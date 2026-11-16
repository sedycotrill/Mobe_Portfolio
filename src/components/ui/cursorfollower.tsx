import { useEffect, useRef, useState } from "react";

export type CursorVariant = "ring" | "glow" | "comet" | "stars";
type Mode = { kinds: string[]; k: number[]; chain: boolean };

// kinds: what each follower looks like · k: how tightly it follows · chain: follows the previous one
const MODES: Record<CursorVariant, Mode> = {
  ring: { kinds: ["ring", "dot"], k: [0.16, 0.55], chain: false },
  glow: { kinds: ["glow", "dot"], k: [0.07, 0.55], chain: false },
  comet: {
    kinds: Array.from({ length: 12 }, () => "comet"),
    k: Array.from({ length: 12 }, (_, i) => (i === 0 ? 0.55 : 0.4)),
    chain: true,
  },
  stars: { kinds: ["dot"], k: [0.55], chain: false },
};

const SPARKS = 14;
const IMAGE = "img, .photo";
const LINK = "a, button, [role='button'], summary, label";
const CARD = ".edu-card, .me-card, .cert, .contrib > div, .bday";

export default function CursorFollower({ variant = "ring" }: { variant?: CursorVariant }) {
  const mode = MODES[variant];
  const [enabled, setEnabled] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const sparks = useRef<(HTMLSpanElement | null)[]>([]);

  // Only on devices with a real mouse, and when reduced motion is off
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !calm.matches);
    update();
    fine.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = root.current;
    if (!el) return;
    const cfg = MODES[variant];
    const pos = nodes.current.filter(Boolean) as HTMLDivElement[];
    const sp = sparks.current.filter(Boolean) as HTMLSpanElement[];
    const pts = pos.map(() => ({ x: 0, y: 0 }));
    const bits = sp.map(() => ({ x: 0, y: 0, rot: 0, life: 0 }));
    let x = 0, y = 0, sx = 0, sy = 0, raf = 0, seen = false, last = 0, idx = 0;

    // Animation loop: stops itself once everything has settled
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      let busy = false;

      pos.forEach((node, i) => {
        const t = cfg.chain && i > 0 ? pts[i - 1] : { x, y };
        const p = pts[i];
        p.x += (t.x - p.x) * cfg.k[i];
        p.y += (t.y - p.y) * cfg.k[i];
        if (Math.abs(t.x - p.x) > 0.1 || Math.abs(t.y - p.y) > 0.1) busy = true;
        if (variant === "comet") {
          const f = 1 - i / pos.length;
          node.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${f})`;
          node.style.opacity = String(f * 0.85);
        } else {
          node.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        }
      });

      bits.forEach((b, i) => {
        if (b.life <= 0) return;
        b.life -= dt / 900;
        busy = true;
        const l = Math.max(b.life, 0);
        sp[i].style.opacity = String(l * 0.9);
        sp[i].style.transform = `translate3d(${b.x}px, ${b.y + (1 - l) * 16}px, 0) rotate(${b.rot + (1 - l) * 120}deg) scale(${0.35 + l * 0.65})`;
      });

      raf = busy ? requestAnimationFrame(tick) : 0;
    };

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        pts.forEach((p) => { p.x = x; p.y = y; });
        sx = x; sy = y; seen = true;
      }
      el.classList.add("on");
      if (variant === "stars" && bits.length && Math.hypot(x - sx, y - sy) > 28) {
        const b = bits[idx++ % bits.length];
        b.x = x; b.y = y; b.rot = Math.random() * 90 - 45; b.life = 1;
        sx = x; sy = y;
      }
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const over = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const t = e.target as Element | null;
      el.dataset.state = t?.closest(IMAGE) ? "image" : t?.closest(LINK) ? "link" : t?.closest(CARD) ? "card" : "";
      el.dataset.tone = t?.closest(".inv") ? "light" : "";
    };

    const hide = () => el.classList.remove("on");
    const down = () => el.classList.add("down");
    const up = () => el.classList.remove("down");

    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerdown", down);
    document.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, [enabled, variant]);

  if (!enabled) return null;

  return (
    <div ref={root} className="fw" data-variant={variant} aria-hidden="true">
      {mode.kinds.map((kind, i) => (
        <div key={i} ref={(n) => { nodes.current[i] = n; }} className="fw-pos">
          <span className={`fw-${kind}`} />
        </div>
      ))}
      {variant === "stars" &&
        Array.from({ length: SPARKS }, (_, i) => (
          <span key={i} ref={(n) => { sparks.current[i] = n; }} className="fw-star" />
        ))}
    </div>
  );
}