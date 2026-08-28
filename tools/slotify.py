"""Turn the mirrored markup into CMS-driven JSX plus the slot records to seed.

The layout stays owned by the codebase; every piece of content an editor may
change becomes a *slot*. A slot host is the outermost element whose children are
all inline — so "Where skilled training meets <strong>real</strong> opportunity"
is one editable field rather than three fragments.

Slot keys are structural (`s.2.0.1.h1`), so re-running the generator against
updated markup keeps existing edits attached to the same place.
"""

import json
import re
from html import unescape as html_unescape
from html.parser import HTMLParser

from html2jsx import (
    ATTR_MAP,
    BOOL_PROPS,
    NUMERIC_PROPS,
    OPTIONAL_END,
    RAW,
    URL_ATTRS,
    VOID,
    closes,
    jsx_attr_value,
    jsx_text,
    style_obj,
)

# elements that may appear inside a slot's rich text without ending it
INLINE = {
    "a", "span", "strong", "b", "em", "i", "u", "small", "sup", "sub", "mark",
    "br", "code", "abbr", "time", "s", "del", "ins", "wbr", "q", "cite", "var",
}

# elements that are never worth making editable on their own
SKIP_HOSTS = {"script", "style", "template", "svg", "iframe", "select", "option"}

MEDIA_ATTR = {"img": "src", "video": "src", "source": "src", "audio": "src"}


class Node:
    __slots__ = ("kind", "tag", "attrs", "children", "text", "parent")

    def __init__(self, kind, tag=None, attrs=None, text=None):
        self.kind = kind          # 'element' | 'text' | 'raw'
        self.tag = tag
        self.attrs = attrs or []
        self.children = []
        self.text = text
        self.parent = None

    def add(self, node):
        node.parent = self
        self.children.append(node)
        return node

    # ---- queries used by the slot rules ---------------------------------
    def has_text(self):
        if self.kind == "text":
            return bool(self.text and self.text.strip())
        return any(c.has_text() for c in self.children)

    def only_inline_children(self):
        for c in self.children:
            if c.kind == "element":
                if c.tag not in INLINE or not c.only_inline_children():
                    return False
            elif c.kind == "raw":
                return False
        return True

    def text_content(self):
        if self.kind == "text":
            return self.text or ""
        return "".join(c.text_content() for c in self.children)


class TreeBuilder(HTMLParser):
    """Same well-formedness rules as the JSX converter, but keeps a tree."""

    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.root = Node("element", "#root")
        self.stack = [self.root]
        self.raw_tag = None
        self.raw_attrs = None
        self.raw_buf = []

    def _top(self):
        return self.stack[-1]

    def _autoclose(self, new_tag):
        if new_tag == "a":
            for i in range(len(self.stack) - 1, 0, -1):
                if self.stack[i].tag == "a":
                    del self.stack[i:]
                    break
        while len(self.stack) > 1 and self._top().tag in OPTIONAL_END \
                and closes(self._top().tag, new_tag):
            self.stack.pop()

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if self.raw_tag:
            return
        if tag in RAW:
            self.raw_tag, self.raw_attrs, self.raw_buf = tag, attrs, []
            return
        self._autoclose(tag)
        node = self._top().add(Node("element", tag, attrs))
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        tag = tag.lower()
        self._autoclose(tag)
        self._top().add(Node("element", tag, attrs))

    def handle_endtag(self, tag):
        tag = tag.lower()
        if self.raw_tag:
            if tag == self.raw_tag:
                node = Node("raw", self.raw_tag, self.raw_attrs, "".join(self.raw_buf))
                self._top().add(node)
                self.raw_tag = None
            return
        if tag in VOID:
            return
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        if self.raw_tag:
            self.raw_buf.append(data)
        else:
            self._top().add(Node("text", text=data))

    def handle_entityref(self, name):
        if self.raw_tag:
            self.raw_buf.append(f"&{name};")
        else:
            self._top().add(Node("text", text=f"&{name};"))

    def handle_charref(self, name):
        if self.raw_tag:
            self.raw_buf.append(f"&#{name};")
        else:
            self._top().add(Node("text", text=f"&#{name};"))

    def handle_comment(self, data):
        pass


TEMPLATE_RE = re.compile(r"<template>(.*?)</template>", re.S)


def build_tree(html):
    tpls = []

    def stash(m):
        tpls.append(m.group(1))
        return '<eti-template data-i="%d"></eti-template>' % (len(tpls) - 1)

    p = TreeBuilder()
    p.feed(TEMPLATE_RE.sub(stash, html))
    p.close()
    return p.root, tpls


# --------------------------------------------------------------------------
def _short(text, limit=70):
    t = re.sub(r"\s+", " ", html_unescape(re.sub(r"<[^>]+>", " ", text))).strip()
    return (t[: limit - 1] + "…") if len(t) > limit else t


class Slotifier:
    """Walks the tree, emitting JSX and collecting slot records."""

    def __init__(self, rewriter, tpls, key_prefix="s"):
        self.rw = rewriter
        self.tpls = tpls
        self.key_prefix = key_prefix
        self.slots = []
        self.out = []
        self.used_link = False
        self.group = None

    # ---- attributes (same rules as the plain converter) -----------------
    def _attrs(self, tag, attrs, skip=()):
        parts = []
        for name, value in attrs:
            low = name.lower()
            if low in skip:
                continue
            if low == "style" and value:
                parts.append("style=%s" % style_obj(self.rw.assets_in(value)))
                continue
            if value is None:
                if low in BOOL_PROPS:
                    parts.append("%s={true}" % ATTR_MAP.get(low, low))
                else:
                    parts.append('%s=""' % ATTR_MAP.get(low, name))
                continue
            if low in NUMERIC_PROPS and re.match(r"^\d+$", value.strip()):
                parts.append("%s={%d}" % (ATTR_MAP.get(low, low), int(value.strip())))
                continue
            if low in URL_ATTRS:
                value = self.rw.url(value)
                if value == "":
                    continue
            elif low.endswith("srcset"):
                value = ", ".join(self.rw.assets_in(p.strip()) for p in value.split(","))
            else:
                value = self.rw.assets_in(value)
            parts.append("%s=%s" % (ATTR_MAP.get(low, name), jsx_attr_value(value)))
        return (" " + " ".join(parts)) if parts else ""

    def _attr(self, node, name):
        for k, v in node.attrs:
            if k.lower() == name:
                return v
        return None

    # ---- slot bookkeeping ------------------------------------------------
    def _record(self, key, kind, default, label, alt=None):
        self.slots.append({
            "key": key,
            "kind": kind,
            "label": label,
            "group": self.group,
            "sort_order": len(self.slots),
            "default_value": default,
            "alt_text": alt,
        })

    # ---- serialising a subtree back to HTML (for richtext defaults) -----
    def _inner_html(self, node):
        out = []
        for c in node.children:
            if c.kind == "text":
                out.append(c.text)
            elif c.kind == "element":
                a = []
                for k, v in c.attrs:
                    if k.lower() in URL_ATTRS and v is not None:
                        v = self.rw.url(v)
                    a.append(k if v is None else '%s="%s"' % (k, v.replace('"', "&quot;")))
                attr = (" " + " ".join(a)) if a else ""
                if c.tag in VOID:
                    out.append("<%s%s>" % (c.tag, attr))
                else:
                    out.append("<%s%s>%s</%s>" % (c.tag, attr, self._inner_html(c), c.tag))
        return "".join(out)

    # ---- the walk --------------------------------------------------------
    def emit(self, node, key):
        if node.kind == "text":
            self.out.append(jsx_text(node.text))
            return

        if node.kind == "raw":
            body = self.rw.assets_in(node.text or "")
            if node.tag == "script" and any(k.lower() == "src" for k, _ in node.attrs):
                return
            if body.strip():
                self.out.append(
                    "<%s%s dangerouslySetInnerHTML={{ __html: %s }} />"
                    % (node.tag, self._attrs(node.tag, node.attrs), json.dumps(body))
                )
            return

        tag = node.tag

        if tag == "eti-template":
            i = int(self._attr(node, "data-i") or 0)
            self.out.append(
                "<template dangerouslySetInnerHTML={{ __html: %s }} />"
                % json.dumps(self.rw.assets_in(self.tpls[i]))
            )
            return

        # --- media slots --------------------------------------------------
        if tag in MEDIA_ATTR:
            src_attr = MEDIA_ATTR[tag]
            raw_src = self._attr(node, src_attr)
            if raw_src:
                url = self.rw.url(raw_src)
                kind = "image" if tag in ("img", "source") else "video"
                alt = self._attr(node, "alt") or ""
                slot_key = "%s.%s" % (key, tag)
                self._record(slot_key, kind, url,
                             _short(alt) or url.rsplit("/", 1)[-1], alt=alt or None)
                attrs = self._attrs(tag, node.attrs, skip=(src_attr, "alt"))
                alt_jsx = ""
                if tag == "img":
                    alt_jsx = ' alt={c.a("%s", %s)}' % (slot_key, json.dumps(alt))
                self.out.append(
                    '<%s%s src={c.m("%s", %s)}%s />'
                    % (tag, attrs, slot_key, json.dumps(url), alt_jsx)
                )
                return

        # --- text / richtext slots ----------------------------------------
        if (tag not in SKIP_HOSTS and tag not in VOID and node.has_text()
                and node.only_inline_children()):
            inner = self._inner_html(node)
            is_rich = any(c.kind == "element" for c in node.children)
            slot_key = "%s.%s" % (key, tag)
            # A text slot is rendered as a JS string, which does not decode
            # entities — so `&amp;` has to become `&` here or it shows up
            # literally. Rich text goes through innerHTML, which decodes.
            value = inner if is_rich else html_unescape(node.text_content())
            self._record(slot_key, "richtext" if is_rich else "text",
                         value.strip(), _short(value))
            attrs = self._attrs(tag, node.attrs)
            if is_rich:
                # data-cms-rich marks injected HTML so RichTextLinks can keep
                # the links inside it routing client-side
                self.out.append(
                    '<%s%s data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("%s", %s) }} />'
                    % (tag, attrs, slot_key, json.dumps(value.strip()))
                )
            else:
                lead = value[: len(value) - len(value.lstrip())]
                trail = value[len(value.rstrip()):]
                self.out.append(
                    "<%s%s>%s{c.t(\"%s\", %s)}%s</%s>"
                    % (tag, attrs, jsx_text(lead), slot_key,
                       json.dumps(value.strip()), jsx_text(trail), tag)
                )
            return

        # --- ordinary element: recurse ------------------------------------
        emit_name = tag
        if tag == "a":
            href = self._attr(node, "href")
            if href and self.rw.is_route(self.rw.url(href)):
                emit_name = "Link"
                self.used_link = True

        attrs = self._attrs(tag, node.attrs)
        if tag in VOID:
            self.out.append("<%s%s />" % (tag, attrs))
            return

        self.out.append("<%s%s>" % (emit_name, attrs))
        for i, child in enumerate(node.children):
            # name the group after the first heading in each top-level section
            self.emit(child, "%s.%d" % (key, i))
        self.out.append("</%s>" % emit_name)

    def run(self, root):
        # root is <main>; its top-level sections become editor-facing groups
        main = root.children[0] if root.children else root
        self.out.append("<%s%s>" % (main.tag, self._attrs(main.tag, main.attrs)))
        for i, child in enumerate(main.children):
            self.group = self._group_name(child, i)
            self.emit(child, "%s.%d" % (self.key_prefix, i))
        self.out.append("</%s>" % main.tag)
        self.group = None
        return "".join(self.out)

    def _group_name(self, node, index):
        if node.kind != "element":
            return None
        for tag in ("h1", "h2", "h3", "h4"):
            found = self._find_tag(node, tag)
            if found is not None:
                label = _short(found.text_content(), 40)
                if label:
                    return label
        return "Section %d" % (index + 1)

    def _find_tag(self, node, tag):
        if node.kind == "element" and node.tag == tag and node.has_text():
            return node
        for c in node.children:
            if c.kind == "element":
                r = self._find_tag(c, tag)
                if r is not None:
                    return r
        return None


def slotify(html, rewriter, key_prefix="s"):
    """-> (jsx, slots, used_link)"""
    root, tpls = build_tree(html)
    s = Slotifier(rewriter, tpls, key_prefix)
    jsx = s.run(root)
    return jsx, s.slots, s.used_link
