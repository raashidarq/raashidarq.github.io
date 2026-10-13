/* Tiny deterministic timeline engine.
   A composition defines render(t) and calls Studio.boot({ duration, render, poster }).
   The renderer calls window.seek(t) for every frame, then screenshots. */
(function () {
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, p) => a + (b - a) * p;

  const E = {
    linear: (t) => t,
    out: (t) => 1 - Math.pow(1 - t, 3),
    outQuint: (t) => 1 - Math.pow(1 - t, 5),
    outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    in: (t) => t * t * t,
    inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    inOutQuint: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2),
    inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  };

  /** eased progress of t across [a,b] */
  const prog = (t, a, b, ease = E.inOut) => ease(clamp((t - a) / (b - a)));

  /** keyframes: [[time, value, ease?], ...]; value may be a number or array; ease applies to the segment ending at that key */
  function kf(t, keys, ease = E.inOutQuint) {
    if (t <= keys[0][0]) return keys[0][1];
    for (let i = 1; i < keys.length; i++) {
      const [t1, v1, e1] = keys[i];
      if (t <= t1) {
        const [t0, v0] = keys[i - 1];
        const p = (e1 || ease)(clamp((t - t0) / (t1 - t0)));
        return Array.isArray(v0) ? v0.map((x, j) => lerp(x, v1[j], p)) : lerp(v0, v1, p);
      }
    }
    return keys[keys.length - 1][1];
  }

  /** opacity envelope: fades in over [a, a+fi], out over [b-fo, b] */
  function env(t, a, b, fi = 0.6, fo = 0.6, ein = E.out, eout = E.inOut) {
    if (t < a || t > b) return 0;
    return Math.min(prog(t, a, a + fi, ein), 1 - prog(t, b - fo, b, eout));
  }

  /** apply transform/opacity/filter */
  function tf(el, o) {
    if (!el) return;
    const { x = 0, y = 0, s = 1, sx, sy, r = 0, rx = 0, ry = 0, persp = 0 } = o;
    let t = "";
    if (persp) t += `perspective(${persp}px) `;
    t += `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    if (rx) t += ` rotateX(${rx.toFixed(3)}deg)`;
    if (ry) t += ` rotateY(${ry.toFixed(3)}deg)`;
    if (r) t += ` rotate(${r.toFixed(3)}deg)`;
    if (sx != null || sy != null) t += ` scale(${(sx ?? s).toFixed(5)}, ${(sy ?? s).toFixed(5)})`;
    else if (s !== 1) t += ` scale(${s.toFixed(5)})`;
    el.style.transform = t;
    if (o.o != null) el.style.opacity = clamp(o.o).toFixed(4);
    if (o.blur != null) el.style.filter = o.blur > 0.05 ? `blur(${o.blur.toFixed(2)}px)` : "none";
  }

  /** wrap each word of el in spans (keeps <em> styling) */
  function split(el) {
    if (!el || el.dataset.split) return el;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
            else { const s = document.createElement("span"); s.className = "w"; s.textContent = part; frag.appendChild(s); }
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains("w")) walk(n);
      });
    };
    walk(el);
    el.dataset.split = "1";
    return el;
  }

  /** kinetic text: words rise in, de-blur, then drift out */
  function words(el, t, tin, tout, { stagger = 0.07, dur = 0.9, dy = 34, outDur = 0.55 } = {}) {
    if (!el) return;
    const ws = el.querySelectorAll(".w");
    let any = false;
    ws.forEach((w, i) => {
      const p = prog(t, tin + i * stagger, tin + i * stagger + dur, E.outQuint);
      const q = tout == null ? 0 : prog(t, tout + i * stagger * 0.35, tout + i * stagger * 0.35 + outDur, E.inOut);
      const o = p * (1 - q);
      if (o > 0) any = true;
      w.style.opacity = o.toFixed(4);
      w.style.transform = `translate3d(0, ${((1 - p) * dy - q * dy * 0.6).toFixed(2)}px, 0)`;
      const b = (1 - p) * 10 + q * 8;
      w.style.filter = b > 0.05 ? `blur(${b.toFixed(2)}px)` : "none";
    });
    el.style.visibility = any ? "visible" : "hidden";
  }

  /** camera: (cx, cy) is the world point at the stage centre, s the zoom */
  function camera(el, c, W = 1920, H = 1080) {
    const [cx, cy, s] = c;
    el.style.transform = `translate3d(${(W / 2 - cx * s).toFixed(2)}px, ${(H / 2 - cy * s).toFixed(2)}px, 0) scale(${s.toFixed(5)})`;
    return { toStage: (wx, wy) => [W / 2 + (wx - cx) * s, H / 2 + (wy - cy) * s], s };
  }

  /** ring around a rect (device-local coords). pops in with a soft scale, pulses gently */
  function ring(el, t, a, b, { pad = 8 } = {}) {
    if (!el) return;
    const o = env(t, a, b, 0.45, 0.45);
    const p = prog(t, a, a + 0.7, E.outQuint);
    const pulse = t > a + 0.7 ? 1 + 0.012 * Math.sin((t - a - 0.7) * 3.2) : 1;
    el.style.opacity = o.toFixed(4);
    el.style.transform = `scale(${((1.08 - 0.08 * p) * pulse).toFixed(5)})`;
  }

  /** callout pinned to an anchor (stage coords) with a leader line; sits at x >= minX, vertically centred on the anchor */
  function callout(el, t, a, b, [ax, ay], minX) {
    if (!el) return;
    let lead = el.querySelector(".lead");
    if (!lead) { lead = document.createElement("i"); lead.className = "lead"; el.prepend(lead); }
    const o = env(t, a, b, 0.5, 0.4);
    const p = prog(t, a, a + 0.8, E.outQuint);
    const h = el.offsetHeight;
    const x = Math.max(ax + 40, minX);
    const len = Math.max(0, x - ax);
    lead.style.width = len.toFixed(1) + "px";
    lead.style.transform = `scaleX(${p.toFixed(4)})`;
    tf(el, { x: x + (1 - p) * 18, y: ay - h / 2, o });
  }

  /** tap indicator at stage point */
  function tap(el, t, t0, [x, y]) {
    const p = prog(t, t0, t0 + 0.9, E.out);
    const o = t < t0 ? 0 : Math.min(prog(t, t0, t0 + 0.12, E.linear), 1 - prog(t, t0 + 0.35, t0 + 0.9, E.inOut));
    tf(el, { x, y, s: 0.45 + 0.75 * p, o });
  }

  function place(el, x, y, w, h) {
    el.style.left = x + "px"; el.style.top = y + "px";
    if (w != null) el.style.width = w + "px";
    if (h != null) el.style.height = h + "px";
  }

  /** wait for fonts and every image */
  async function ready() {
    await document.fonts.ready;
    const imgs = [...document.images];
    await Promise.all(imgs.map((i) => (i.complete && i.naturalWidth ? i.decode().catch(() => {}) : new Promise((r) => { i.onload = i.onerror = () => r(); }))));
    // force font load for the families we use
    await Promise.all([
      document.fonts.load('400 40px "Instrument Serif"'),
      document.fonts.load('italic 400 40px "Instrument Serif"'),
      document.fonts.load('500 20px "Manrope"'),
      document.fonts.load('600 20px "Manrope"'),
      document.fonts.load('700 20px "Manrope"'),
    ]).catch(() => {});
  }

  function boot({ duration, render, poster = 0, fps = 30 }) {
    document.querySelectorAll("[data-split]").forEach((el) => { delete el.dataset.split; split(el); });
    window.DURATION = duration;
    window.FPS = fps;
    window.POSTER = poster;
    window.seek = (t) => render(Math.max(0, Math.min(duration, t)));
    window.studioReady = ready().then(() => { window.seek(0); return true; });
    // live preview: open the file in a browser and add #play or #t=12.5
    const h = location.hash;
    if (h.startsWith("#t=")) window.studioReady.then(() => window.seek(parseFloat(h.slice(3))));
    if (h === "#play") window.studioReady.then(() => {
      const t0 = performance.now();
      const loop = () => { const t = ((performance.now() - t0) / 1000) % duration; window.seek(t); requestAnimationFrame(loop); };
      loop();
    });
  }

  window.Studio = { E, clamp, lerp, prog, kf, env, tf, split, words, camera, ring, callout, tap, place, ready, boot };
})();
