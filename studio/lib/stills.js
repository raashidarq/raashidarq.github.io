/* Builders for still compositions. Each still page has <section class="shot" id=".." data-w data-h>.
   The renderer opens the page with ?shot=<id>; only that shot is shown, pinned to the top-left. */
(function () {
  const h = (tag, cls, style = {}, parent) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    Object.assign(el.style, style);
    if (parent) parent.appendChild(el);
    return el;
  };
  const px = (v) => (typeof v === "number" ? v + "px" : v);

  function rings(screen, list = []) {
    list.forEach((r) => {
      const el = h("div", "ring" + (r.spot ? " spot" : ""), {
        left: px(r.x), top: px(r.y), width: px(r.w), height: px(r.h), opacity: 1,
        borderRadius: px(r.r ?? 14),
      }, screen);
      if (r.spot) el.style.boxShadow += `, 0 0 0 4000px ${r.dim || "rgba(0,0,0,0.16)"}`;
    });
  }

  /** phone: sw x sh screen in source px; scaled by s; positioned at x,y (top-left of bezel) */
  function phone(parent, o) {
    const bz = o.bezel ?? 14;
    const dev = h("div", "phone", {
      padding: px(bz), borderRadius: px(o.radius ?? 58),
      transform: `translate(${o.x}px, ${o.y}px) ${o.rot ? `rotate(${o.rot}deg) ` : ""}scale(${o.s})`,
    }, parent);
    h("div", "punch", { top: px(bz - 4) }, dev);
    const scr = h("div", "screen", { width: px(o.sw), height: px(o.sh), borderRadius: px(o.screenRadius ?? 44), background: o.bg || "#fff" }, dev);
    const img = h("img", "", {}, scr);
    img.src = o.src; img.width = o.iw || o.sw; img.height = o.ih || o.sh;
    rings(scr, o.rings);
    return dev;
  }

  function card(parent, o) {
    const c = h("div", o.cls || "card", { width: px(o.w), height: px(o.h), borderRadius: px(o.radius ?? 22), background: o.bg || "#fff",
      transform: `translate(${o.x}px, ${o.y}px) ${o.rot ? `rotate(${o.rot}deg) ` : ""}scale(${o.s})` }, parent);
    const img = h("img", "", { left: px(-(o.cx || 0)), top: px(-(o.cy || 0)) }, c);
    img.src = o.src; img.width = o.iw; img.height = o.ih;
    rings(c, o.rings);
    return c;
  }

  function browser(parent, o) {
    const b = h("div", "browser", { width: px(o.w ?? 1434), transform: `translate(${o.x}px, ${o.y}px) scale(${o.s})` }, parent);
    b.innerHTML = `<div class="chrome"><div class="dots"><i></i><i></i><i></i></div><div class="url"><svg viewBox="0 0 24 24" fill="none" stroke="#7d8da0" stroke-width="2.4" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>${o.url || ""}</div><div style="width:61px"></div></div>`;
    const vp = h("div", "viewport", { width: px(o.w ?? 1434), height: px(o.vh ?? 992) }, b);
    const img = h("img", "", { left: px(-(o.cx || 0)), top: px(-(o.cy || 0)) }, vp);
    img.src = o.src; img.width = o.iw ?? 1434; img.height = o.ih ?? 992;
    rings(vp, o.rings);
    return b;
  }

  function show() {
    const id = new URLSearchParams(location.search).get("shot");
    document.querySelectorAll(".shot").forEach((s) => {
      s.style.width = s.dataset.w + "px"; s.style.height = s.dataset.h + "px";
      if (id) s.style.display = s.id === id ? "block" : "none";
    });
  }

  window.Still = { h, phone, card, browser, show };
  window.addEventListener("DOMContentLoaded", () => {
    show();
    window.studioReady = Studio.ready().then(() => true);
  });
})();
