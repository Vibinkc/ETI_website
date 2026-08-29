"""HTML -> JSX converter for the ETI mirror.

Parser-based (html.parser), not regex: builds a well-formed tree, auto-closing
the tags HTML lets you leave open, and emits real JSX.
"""
import json
import os
import posixpath
import re
from html.parser import HTMLParser

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
        'meta', 'param', 'source', 'track', 'wbr'}

RAW = {'style', 'script'}

# html attribute -> react prop
ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'srcset': 'srcSet',
    'tabindex': 'tabIndex', 'colspan': 'colSpan', 'rowspan': 'rowSpan',
    'maxlength': 'maxLength', 'minlength': 'minLength', 'readonly': 'readOnly',
    'autoplay': 'autoPlay', 'playsinline': 'playsInline',
    'frameborder': 'frameBorder', 'allowfullscreen': 'allowFullScreen',
    'novalidate': 'noValidate', 'enctype': 'encType',
    'crossorigin': 'crossOrigin', 'datetime': 'dateTime', 'usemap': 'useMap',
    'accesskey': 'accessKey', 'contenteditable': 'contentEditable',
    'spellcheck': 'spellCheck', 'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus', 'charset': 'charSet', 'http-equiv': 'httpEquiv',
    'srclang': 'srcLang', 'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing', 'formaction': 'formAction',
    'marginwidth': 'marginWidth', 'marginheight': 'marginHeight',
    'referrerpolicy': 'referrerPolicy', 'inputmode': 'inputMode',
}

# valueless attributes that React wants as real booleans
BOOL_PROPS = {'muted', 'loop', 'controls', 'autoplay', 'playsinline',
              'disabled', 'checked', 'selected', 'readonly', 'required',
              'multiple', 'novalidate', 'autofocus', 'hidden', 'open',
              'allowfullscreen', 'defer', 'async', 'reversed', 'default',
              'itemscope', 'inert'}

# tags whose end tag HTML makes optional
OPTIONAL_END = {'li', 'p', 'td', 'th', 'tr', 'option', 'dt', 'dd',
                'thead', 'tbody', 'tfoot'}

P_CLOSERS = {'div', 'p', 'ul', 'ol', 'table', 'section', 'header', 'footer',
             'hr', 'main', 'nav', 'form', 'blockquote', 'pre', 'figure',
             'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'fieldset'}

URL_ATTRS = {'href', 'src', 'poster', 'data-src', 'action', 'data-thumb'}

# React types these as numbers, so they must be emitted as JSX expressions
NUMERIC_PROPS = {'maxlength', 'minlength', 'size', 'rows', 'cols', 'span',
                 'start', 'tabindex', 'colspan', 'rowspan',
                 'aria-level', 'aria-posinset', 'aria-setsize',
                 'aria-colcount', 'aria-rowcount', 'aria-colindex',
                 'aria-rowindex', 'aria-colspan', 'aria-rowspan',
                 'aria-valuenow', 'aria-valuemin', 'aria-valuemax'}


def closes(open_tag, new_tag):
    if open_tag == 'li':
        return new_tag == 'li'
    if open_tag == 'p':
        return new_tag in P_CLOSERS
    if open_tag in ('td', 'th'):
        return new_tag in ('td', 'th', 'tr')
    if open_tag == 'tr':
        return new_tag == 'tr'
    if open_tag == 'option':
        return new_tag == 'option'
    if open_tag in ('dt', 'dd'):
        return new_tag in ('dt', 'dd')
    if open_tag in ('thead', 'tbody'):
        return new_tag in ('tbody', 'tfoot')
    return False


def camel(prop):
    if prop.startswith('--'):
        return prop
    parts = prop.strip().lower().split('-')
    if parts[0] == '' and len(parts) > 1:      # -webkit-foo
        parts = parts[1:]
        return 'Webkit' + ''.join(p.title() for p in parts[1:]) \
            if parts[0] == 'webkit' else ''.join(
                [parts[0]] + [p.title() for p in parts[1:]])
    return parts[0] + ''.join(p.title() for p in parts[1:])


def style_obj(value):
    """`a: b; c: d` -> `{{ a: 'b', c: 'd' }}` (JSX expression, braces included)."""
    out = []
    for decl in value.split(';'):
        if ':' not in decl:
            continue
        k, v = decl.split(':', 1)
        k, v = k.strip(), v.strip()
        if not k or not v:
            continue
        key = camel(k)
        if not re.match(r'^[A-Za-z][A-Za-z0-9]*$', key):
            key = json.dumps(key)
        out.append('%s: %s' % (key, json.dumps(v)))
    return '{{ %s }}' % ', '.join(out) if out else '{{}}'


def jsx_attr_value(value):
    """Prefer a plain quoted string; fall back to a JS string expression."""
    if '"' not in value and '\n' not in value and '\\' not in value \
            and '{' not in value and '}' not in value:
        return '"%s"' % value
    return '{%s}' % json.dumps(value)


def jsx_text(text):
    # `'` and `"` are legal in JSX text but trip react/no-unescaped-entities.
    return (text.replace('{', "{'{'}").replace('}', "{'}'}")
                .replace("'", '&apos;').replace('"', '&quot;'))


class Rewriter:
    """Rewrites mirror-relative URLs to Next routes / public asset paths."""

    ASSET_DIRS = ('images', 'media', 'templates', 'plugins', 'yt')

    def __init__(self, routes, page_dir):
        self.routes = routes        # set of mirror-relative .html paths
        self.page_dir = page_dir    # e.g. '' or 'applicants/inside-wireman'
        self.unresolved = set()
        # every route this site serves, as Next paths
        self.route_paths = {'/'} | {
            '/' + p[:-5] for p in routes if p != 'index.html'}

    def is_route(self, url):
        """True if `url` is an internal page (so it can use next/link)."""
        return url.split('#')[0].split('?')[0] in self.route_paths

    # ---- helpers ---------------------------------------------------------
    def _route_for(self, rel):
        if rel == 'index.html':
            return '/'
        if rel.endswith('.html') and rel in self.routes:
            return '/' + rel[:-5]
        # HTTrack query-variants: "news7b17" -> "news.html"
        m = re.match(r'^(.*?)[0-9a-f]{4}$', rel)
        if m and (m.group(1) + '.html') in self.routes:
            base = m.group(1)
            return '/' if base == 'index' else '/' + base
        return None

    def url(self, raw):
        raw = raw.strip()
        if not raw or raw[0] in '#?' or re.match(
                r'^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|//)', raw):
            return raw
        path, sep, tail = raw.partition('#')
        path, qsep, query = path.partition('?')
        if not path:
            return raw

        # already rewritten (routes and asset paths) — keep url() idempotent
        if path.startswith('/') and (
                self.is_route(path) or path.split('/')[1:2] and
                path.split('/')[1] in self.ASSET_DIRS):
            return raw
        joined = posixpath.normpath(posixpath.join(self.page_dir, path))
        while joined.startswith('../'):
            joined = joined[3:]        # links that escape the mirror root
        joined = joined.lstrip('./')

        # cross-host assets HTTrack mirrored into sibling folders
        m = re.match(r'^img\.youtube\.com/vi/([^/]+)/', joined)
        if m:
            return '/yt/%s.jpg' % m.group(1)
        if 'etiapi.croar.co' in joined:
            return ''                  # third-party chat widget, dropped

        route = self._route_for(joined)
        if route:
            return route + (sep + tail if sep else '')
        if joined.split('/')[0] in ('images', 'media', 'templates', 'plugins'):
            return '/' + joined + (qsep + query if qsep else '') + \
                (sep + tail if sep else '')
        if joined.startswith('component/'):
            self.unresolved.add(joined)
            return '/' + joined + (qsep + query if qsep else '')
        self.unresolved.add(joined)
        return '/' + joined

    # The ../ run is bounded. Unbounded, a long string of them with no asset
    # folder after has to be retried at every possible count before the match
    # can fail. Nothing in the mirror nests anywhere near eight levels up.
    ASSET_RE = re.compile(
        r'(?<![/\w.-])((?:\.\./){0,8}(?:images|media|templates|plugins)/[^"\'\s,)\\]+)')

    def assets_in(self, text):
        """Rewrite every mirror asset path inside a blob (JSON, CSS, srcset)."""
        return self.ASSET_RE.sub(lambda m: self.url(m.group(1)), text)


class JSXConverter(HTMLParser):
    def __init__(self, rewriter):
        super().__init__(convert_charrefs=False)
        self.rw = rewriter
        self.out = []
        self.stack = []
        self.raw_tag = None
        self.raw_attrs = None
        self.raw_buf = []
        self.flattened_anchors = 0
        self.nested_anchor_warnings = 0
        self.dropped_empty_anchors = 0
        self.anchor_starts = []
        self.used_link = False

    # ---- emission --------------------------------------------------------
    def _attrs(self, tag, attrs):
        parts = []
        for name, value in attrs:
            low = name.lower()
            if low == 'style' and value:
                parts.append('style=%s' % style_obj(self.rw.assets_in(value)))
                continue
            if value is None:
                if low in BOOL_PROPS:
                    parts.append('%s={true}' % ATTR_MAP.get(low, low))
                else:
                    parts.append('%s=""' % ATTR_MAP.get(low, name))
                continue
            if low in NUMERIC_PROPS and re.match(r'^\d+$', value.strip()):
                parts.append('%s={%d}' % (ATTR_MAP.get(low, low),
                                          int(value.strip())))
                continue
            if low in URL_ATTRS:
                value = self.rw.url(value)
                if value == '':
                    continue
            elif low == 'srcset' or low.endswith('srcset'):
                value = ', '.join(
                    self.rw.assets_in(p.strip()) for p in value.split(','))
            else:
                value = self.rw.assets_in(value)
            parts.append('%s=%s' % (ATTR_MAP.get(low, name),
                                    jsx_attr_value(value)))
        return (' ' + ' '.join(parts)) if parts else ''

    def _pop(self):
        """Close the innermost open element, emitting the name it went out as.

        An anchor that turns out to hold nothing is dropped instead. These come
        from the mirror's links-wrapped-around-links: flattening them the way a
        browser does leaves the outer one empty, and an empty link is a tab stop
        that announces nothing to a screen reader.
        """
        tag, emitted = self.stack.pop()

        if tag == 'a' and self.anchor_starts:
            start = self.anchor_starts.pop()
            if not ''.join(self.out[start + 1:]).strip():
                del self.out[start:]
                self.dropped_empty_anchors += 1
                return tag

        self.out.append('</%s>' % emitted)
        return tag

    def _open_tags(self):
        return [t for t, _ in self.stack]

    def _autoclose(self, new_tag):
        # An <a> start tag closes an open <a>: the HTML parser does this, so
        # emitting the source's nested anchors verbatim would make React's
        # markup disagree with the browser's and break hydration. The mirror
        # has a few of these (a link wrapped around another link).
        if new_tag == 'a' and 'a' in self._open_tags():
            if self.stack[-1][0] != 'a':
                self.nested_anchor_warnings += 1
            while self.stack and self.stack[-1][0] != 'a':
                self._pop()
            if self.stack:
                self._pop()
            self.flattened_anchors += 1

        while self.stack and self.stack[-1][0] in OPTIONAL_END \
                and closes(self.stack[-1][0], new_tag):
            self._pop()

    # ---- parser callbacks ------------------------------------------------
    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if self.raw_tag:
            return
        if tag in RAW:
            self.raw_tag, self.raw_attrs, self.raw_buf = tag, attrs, []
            return
        self._autoclose(tag)

        # internal page links become <Link> so navigation stays client-side
        emit = tag
        if tag == 'a':
            href = next((v for k, v in attrs if k.lower() == 'href'), None)
            if href and self.rw.is_route(self.rw.url(href)):
                emit = 'Link'
                self.used_link = True

        self.out.append('<%s%s%s>' % (emit, self._attrs(tag, attrs),
                                      ' /' if tag in VOID else ''))
        if tag not in VOID:
            if tag == 'a':
                self.anchor_starts.append(len(self.out) - 1)
            self.stack.append((tag, emit))

    def handle_startendtag(self, tag, attrs):
        tag = tag.lower()
        self._autoclose(tag)
        self.out.append('<%s%s />' % (tag, self._attrs(tag, attrs)))

    def handle_endtag(self, tag):
        tag = tag.lower()
        if self.raw_tag:
            if tag == self.raw_tag:
                body = self.rw.assets_in(''.join(self.raw_buf))
                if self.raw_tag == 'script':
                    src = dict((k.lower(), v) for k, v in self.raw_attrs) \
                        .get('src')
                    if src is not None:          # external script: layout owns it
                        self.raw_tag = None
                        return
                if body.strip():
                    self.out.append(
                        '<%s%s dangerouslySetInnerHTML={{ __html: %s }} />'
                        % (self.raw_tag, self._attrs(self.raw_tag,
                                                     self.raw_attrs),
                           json.dumps(body)))
                self.raw_tag = None
            return
        if tag in VOID:
            return
        if tag not in self._open_tags():
            return                                # stray close tag
        while self.stack and self.stack[-1][0] != tag:
            self._pop()
        if self.stack:
            self._pop()

    def handle_data(self, data):
        if self.raw_tag:
            self.raw_buf.append(data)
        else:
            self.out.append(jsx_text(data))

    def handle_entityref(self, name):
        if self.raw_tag:
            self.raw_buf.append('&%s;' % name)
        else:
            self.out.append('&%s;' % name)

    def handle_charref(self, name):
        if self.raw_tag:
            self.raw_buf.append('&#%s;' % name)
        else:
            self.out.append('&#%s;' % name)

    def handle_comment(self, data):
        pass

    def close(self):
        super().close()
        while self.stack:
            self._pop()
        return ''.join(self.out)


TEMPLATE_RE = re.compile(r'<template>(.*?)</template>', re.S)


def convert(html, routes, page_dir):
    """Returns (jsx, rewriter)."""
    rw = Rewriter(routes, page_dir)

    # <template> content must land in .content, so keep it as raw innerHTML.
    tpls = []

    def stash(m):
        tpls.append(m.group(1))
        return '<eti-template data-i="%d"></eti-template>' % (len(tpls) - 1)

    html = TEMPLATE_RE.sub(stash, html)

    p = JSXConverter(rw)
    p.feed(html)
    jsx = p.close()
    rw.dropped_empty_anchors = p.dropped_empty_anchors
    rw.flattened_anchors = p.flattened_anchors
    rw.nested_anchor_warnings = p.nested_anchor_warnings
    rw.used_link = p.used_link

    for i, body in enumerate(tpls):
        jsx = jsx.replace(
            '<eti-template data-i="%d"></eti-template>' % i,
            '<template dangerouslySetInnerHTML={{ __html: %s }} />'
            % json.dumps(rw.assets_in(body)))
    return jsx, rw
