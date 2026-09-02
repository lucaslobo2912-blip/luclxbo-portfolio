"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    root.classList.add("motion-ready");

    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".hero .eyebrow, .hero h1, .hero-copy, .creative-stage, .hero-footer, .section-heading, .web-case, .hire-strip, .project, .portrait-frame, .about-copy, .presence-grid > *, .process-grid article, .services article, .guide-intro, .roadmap article, .field-grid > *, .business, .faq-section > *, .contact-inner > *"
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-target");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" }
    );

    revealTargets.forEach((element) => observer.observe(element));

    const tiltElements = document.querySelectorAll<HTMLElement>(".project, [data-tilt]");
    const portraitElements = document.querySelectorAll<HTMLElement>(".portrait-frame");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const pointerHandlers: Array<{
      element: HTMLElement;
      move: (event: PointerEvent) => void;
      leave: () => void;
    }> = [];
    const glowHandlers: Array<{
      element: HTMLElement;
      start: (event: PointerEvent) => void;
      end: () => void;
    }> = [];

    portraitElements.forEach((element) => {
      const start = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
        element.style.setProperty("--mx", `${x * 100}%`);
        element.style.setProperty("--my", `${y * 100}%`);
        element.classList.add("is-glow-active");
      };
      const end = () => {
        element.classList.remove("is-glow-active");
        element.style.setProperty("--mx", "50%");
        element.style.setProperty("--my", "50%");
      };
      element.addEventListener("pointerenter", start);
      element.addEventListener("pointerdown", start);
      element.addEventListener("pointermove", start);
      element.addEventListener("pointerleave", end);
      element.addEventListener("pointerup", end);
      element.addEventListener("pointercancel", end);
      glowHandlers.push({ element, start, end });
    });

    if (finePointer) {
      tiltElements.forEach((element) => {
        const move = (event: PointerEvent) => {
          const bounds = element.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          element.style.setProperty("--mx", `${x * 100}%`);
          element.style.setProperty("--my", `${y * 100}%`);
          const strength = element.matches(".creative-stage") ? 10 : 5;
          element.style.setProperty("--ry", `${(x - 0.5) * strength}deg`);
          element.style.setProperty("--rx", `${(0.5 - y) * strength * 0.8}deg`);
        };
        const leave = () => {
          element.style.setProperty("--ry", "0deg");
          element.style.setProperty("--rx", "0deg");
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        pointerHandlers.push({ element, move, leave });
      });
    }

    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--page-scroll", String(window.scrollY));
        frame = 0;
      });
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      if (frame) window.cancelAnimationFrame(frame);
      pointerHandlers.forEach(({ element, move, leave }) => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      });
      glowHandlers.forEach(({ element, start, end }) => {
        element.removeEventListener("pointerenter", start);
        element.removeEventListener("pointerdown", start);
        element.removeEventListener("pointermove", start);
        element.removeEventListener("pointerleave", end);
        element.removeEventListener("pointerup", end);
        element.removeEventListener("pointercancel", end);
      });
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

