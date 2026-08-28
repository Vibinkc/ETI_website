"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sends the Get Started form to our own API instead of the old Joomla site.
 *
 * The form markup is generated from the original page, so this attaches to it
 * rather than replacing it: the fields, labels and styling stay exactly as
 * they are, and only the submit is taken over. Without script the form still
 * has its original action, so it degrades to the old behaviour rather than to
 * nothing.
 */

const ENDPOINT = "/api/forms/sign-up";

/** The generated markup has no id; the Joomla action is what identifies it. */
const FORM_SELECTOR = 'form[action*="com_ajax"]';

const HONEYPOT = "website";

function findForm(): HTMLFormElement | null {
  return document.querySelector<HTMLFormElement>(FORM_SELECTOR);
}

/** A hidden field only a bot will fill in. */
function addHoneypot(form: HTMLFormElement) {
  if (form.querySelector(`[name="${HONEYPOT}"]`)) return;

  const wrap = document.createElement("div");
  // Not display:none — some bots skip those. Off-screen and out of the tab
  // order, and hidden from assistive tech, so no person can reach it.
  wrap.setAttribute("aria-hidden", "true");
  wrap.style.cssText =
    "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden";

  const input = document.createElement("input");
  input.type = "text";
  input.name = HONEYPOT;
  input.tabIndex = -1;
  input.autocomplete = "off";

  wrap.appendChild(input);
  form.appendChild(wrap);
}

function statusBox(form: HTMLFormElement): HTMLElement {
  let box = form.querySelector<HTMLElement>(".eti-form-status");
  if (!box) {
    box = document.createElement("div");
    box.className = "eti-form-status uk-margin";
    // Announced by screen readers when it changes, without stealing focus.
    box.setAttribute("role", "status");
    box.setAttribute("aria-live", "polite");
    form.appendChild(box);
  }
  return box;
}

function say(form: HTMLFormElement, kind: "success" | "danger" | "info", text: string) {
  const box = statusBox(form);
  box.innerHTML = "";
  const alert = document.createElement("div");
  alert.className = `uk-alert-${kind}`;
  alert.setAttribute("uk-alert", "");
  const p = document.createElement("p");
  p.textContent = text;
  alert.appendChild(p);
  box.appendChild(alert);
}

/**
 * The generated form carries `novalidate`, because the old site validated in
 * its own script. That script is gone, so the required fields are checked
 * here — otherwise every field is effectively optional.
 */
function firstInvalid(form: HTMLFormElement): HTMLElement | null {
  const fields = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input, select, textarea",
    ),
  ).filter((f) => f.name !== HONEYPOT && f.type !== "hidden");

  for (const field of fields) {
    if (!field.required) continue;

    if (field.type === "radio") {
      const group = form.querySelectorAll<HTMLInputElement>(
        `input[type="radio"][name="${CSS.escape(field.name)}"]`,
      );
      if (![...group].some((r) => r.checked)) return field;
      continue;
    }
    if (!field.value.trim()) return field;
    if (field.type === "email" && !field.checkValidity()) return field;
  }
  return null;
}

function labelFor(field: HTMLElement): string {
  const el = field as HTMLInputElement;
  const labelled = el.labels?.[0]?.textContent?.trim();
  return labelled || el.placeholder?.replace(/\*$/, "").trim() || el.name || "a field";
}

export default function SignUpForm() {
  const pathname = usePathname();

  useEffect(() => {
    const form = findForm();
    if (!form) return;

    addHoneypot(form);

    const submitButtons = Array.from(
      form.querySelectorAll<HTMLButtonElement | HTMLInputElement>(
        'button[type="submit"], input[type="submit"], button:not([type])',
      ),
    );

    // The generated markup ships the button `disabled`: the original Joomla
    // script enabled it once its CSRF token came back. That script is gone, so
    // without this the button is dead and nothing can be submitted at all.
    submitButtons.forEach((b) => {
      b.disabled = false;
    });

    // Only the disabled state is touched while sending. The button's contents
    // are the theme's own markup — label span, spinner span — and replacing
    // them with text would destroy the styling for good.
    const setBusy = (busy: boolean) => {
      submitButtons.forEach((b) => {
        b.disabled = busy;
      });
      if (busy) say(form, "info", "Sending…");
    };

    const onSubmit = async (event: SubmitEvent) => {
      event.preventDefault();

      const bad = firstInvalid(form);
      if (bad) {
        say(form, "danger", `Please complete ${labelFor(bad)}.`);
        bad.scrollIntoView({ behavior: "smooth", block: "center" });
        bad.focus();
        return;
      }

      const data = new FormData(form);
      const answers: Record<string, string> = {};
      let honeypot = "";
      data.forEach((value, key) => {
        if (typeof value !== "string") return;
        if (key === HONEYPOT) {
          honeypot = value;
          return;
        }
        const text = value.trim();
        if (text) answers[key] = text;
      });

      setBusy(true);
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers, [HONEYPOT]: honeypot }),
        });
        const body = await res.json().catch(() => ({}));

        if (res.ok && body.ok) {
          say(
            form,
            "success",
            body.message || "Thank you. We have your details and will be in touch.",
          );
          form.reset();
          statusBox(form).scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          say(
            form,
            "danger",
            body.message ||
              body.detail ||
              "Sorry — we could not send that. Please try again.",
          );
        }
      } catch {
        say(form, "danger", "Sorry — we could not reach the server. Please try again.");
      } finally {
        setBusy(false);
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
    // re-attach after a client-side navigation onto (or away from) the page
  }, [pathname]);

  return null;
}
