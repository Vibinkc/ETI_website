"use client";

import { useEffect } from "react";

/**
 * Scroll-driven 3D hero.
 *
 * Finds the hero by structure (the section holding the uk-cover video) rather
 * than by YOOtheme's generated `page#3` id, tags the pieces with classes, then
 * drives two CSS custom properties from a rAF loop. All visuals live in
 * app/eti-3d-hero.css; this component only supplies the numbers.
 */
export default function Hero3D() {
  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>(
      "#tm-main video[uk-cover], #tm-main video[data-uk-cover]",
    );
    if (!video) return;

    const hero = video.closest<HTMLElement>(".uk-section");
    const stage = hero?.querySelector<HTMLElement>(".uk-container");
    if (!hero || !stage) return;

    hero.classList.add("eti3d-hero");
    video.classList.add("eti3d-video");
    stage.classList.add("eti3d-stage");

    // Blueprint grid plane, between the video and the text.
    const grid = document.createElement("div");
    grid.className = "eti3d-grid";
    grid.setAttribute("aria-hidden", "true");
    video.insertAdjacentElement("afterend", grid);

    // Depth-order the headline stack: h1, h2, h3, then the CTA wrapper.
    const layers: HTMLElement[] = [];
    (["h1", "h2", "h3"] as const).forEach((tag) => {
      const el = stage.querySelector<HTMLElement>(tag);
      if (el) layers.push(el);
    });
    const button = stage.querySelector<HTMLElement>(".uk-button");
    if (button?.parentElement && button.parentElement !== stage) {
      layers.push(button.parentElement);
    }
    layers.forEach((el, i) => {
      el.classList.add("eti3d-layer", "eti3d-l" + Math.min(i + 1, 4));
      el.style.setProperty("--eti3d-i", String(i));
    });

    const cue = document.createElement("div");
    cue.className = "eti3d-cue";
    cue.setAttribute("aria-hidden", "true");
    hero.appendChild(cue);

    hero.classList.add("eti3d-ready");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let p = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    let queued = false;

    const measure = () => {
      const h = hero.offsetHeight || window.innerHeight;
      // 0 at rest, 1 once the hero has scrolled a full height away.
      const next = Math.min(1, Math.max(0, window.scrollY / h));
      // Smoothstep so the recede eases out instead of ending abruptly.
      p = next * next * (3 - 2 * next);

      mx += (tmx - mx) * 0.08;
      my += (tmy - my) * 0.08;

      hero.style.setProperty("--eti3d-p", p.toFixed(4));
      hero.style.setProperty("--eti3d-mx", mx.toFixed(4));
      hero.style.setProperty("--eti3d-my", my.toFixed(4));

      queued = false;
      if (Math.abs(tmx - mx) > 0.001 || Math.abs(tmy - my) > 0.001) schedule();
    };

    const schedule = () => {
      if (queued || reduced.matches) return;
      queued = true;
      requestAnimationFrame(measure);
    };

    const onMove = (e: MouseEvent) => {
      if (hero.getBoundingClientRect().bottom < 0) return;
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
      schedule();
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine) window.addEventListener("mousemove", onMove, { passive: true });

    schedule();
    const enter = requestAnimationFrame(() => hero.classList.add("eti3d-in"));

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (fine) window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(enter);
      grid.remove();
      cue.remove();
      hero.classList.remove("eti3d-hero", "eti3d-ready", "eti3d-in");
      video.classList.remove("eti3d-video");
      stage.classList.remove("eti3d-stage");
      layers.forEach((el, i) =>
        el.classList.remove("eti3d-layer", "eti3d-l" + Math.min(i + 1, 4)),
      );
    };
  }, []);

  return null;
}
