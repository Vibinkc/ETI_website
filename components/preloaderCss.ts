/**
 * The first-paint cover's styles, as a string so the layout can inline them.
 *
 * These used to live in app/eti-preloader.css and arrive with the bundled
 * stylesheet. That is one network request later than the HTML, and until it
 * landed the cover was an unstyled div -- `position: static`, no background --
 * so the very thing meant to hide the unstyled page was itself unstyled, and
 * the header flashed with its links stacked. Measured on a throttled
 * connection: at 250ms one stylesheet had parsed and the cover was not
 * covering; by 500ms fifteen had.
 *
 * Inlined in the document, it is parsed with the markup it has to cover, so
 * there is no window where one exists without the other. It is about 1.5kB.
 */
export const PRELOADER_CSS = `
.eti-preloader {
  position: fixed;
  inset: 0;
  z-index: 2147483000; /* above UIkit's offcanvas (1020) and the chat widget */
  background: #002c5c;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.45s ease;
}
.eti-preloader.is-leaving {
  opacity: 0;
  pointer-events: none;
}
.eti-preloader-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 24px;
}
.eti-preloader-inner img {
  width: 190px;
  max-width: 62vw;
  height: auto;
  animation: eti-preloader-in 0.6s cubic-bezier(0.16, 0.84, 0.28, 1) both;
}
/* Indeterminate rail: the load has no measurable progress, so it shows
   activity rather than pretending to a percentage. */
.eti-preloader-bar {
  position: relative;
  width: 168px;
  max-width: 56vw;
  height: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
}
.eti-preloader-bar span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 40%;
  border-radius: 999px;
  background: #81c341;
  animation: eti-preloader-sweep 1.15s ease-in-out infinite;
}
@keyframes eti-preloader-in {
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to { opacity: 1; transform: none; }
}
@keyframes eti-preloader-sweep {
  0% { transform: translateX(-105%); }
  100% { transform: translateX(255%); }
}
@media (prefers-reduced-motion: reduce) {
  .eti-preloader-inner img { animation: none; }
  .eti-preloader-bar span { animation: none; width: 100%; opacity: 0.7; }
}
`;
