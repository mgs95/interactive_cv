import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) ?? "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    // Swap all theme variables atomically: hover transitions would otherwise
    // animate some colors while the rest of the page snaps.
    root.setAttribute("data-theme-switching", "");
    root.dataset.theme = theme;
    void root.offsetHeight; // flush styles while transitions are suppressed
    root.removeAttribute("data-theme-switching");
  }, [theme]);

  // Persist only on explicit toggle — never on mount — so first-time visitors
  // keep following their OS preference until they actually pick a theme.
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
  };
  return { theme, toggle };
}

/** Returns the id of the section currently in view. */
export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const lastId = ids[ids.length - 1];
    // The last section can never reach the top of a tall viewport, so pin it
    // as active whenever the page is scrolled to the bottom.
    const atBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    // Rank sections by visible pixels (intersectionRect.height), not by
    // intersectionRatio: the ratio is normalized by each section's own height,
    // which makes tall and short sections incomparable.
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRect.height : 0);
        }
        if (atBottom()) {
          setActive(lastId);
          return;
        }
        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        if (best && best[1] > 0) setActive(best[0]);
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      if (atBottom()) setActive(lastId);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}

/** Fades sections in as they enter the viewport. Respects reduced motion. */
export function useReveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

/** Tracks the pointer and exposes it as CSS variables for the spotlight. */
export function useSpotlight() {
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--spot-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spot-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}
