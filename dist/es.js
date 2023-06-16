import { ref as _, computed as m, unref as u, openBlock as d, createElementBlock as f, createElementVNode as l, withDirectives as h, isRef as w, vModelText as x, Fragment as I, renderList as g, normalizeClass as k } from "vue";
function F() {
  let t = _({
    fontawesome: {
      title: "Font Awesome",
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css",
      icons: [],
      classPrefix: "fa-solid",
      regex: /\.fa-[a-z0-9\-]+::before/g,
      slice: { start: 1, end: -8 }
    }
  });
  for (let n in t.value)
    s(n);
  function s(n) {
    let e = t.value[n];
    fetch(e.url).then((o) => o.text()).then((o) => {
      t.value[n].icons = c(o, e);
    }).catch((o) => {
      console.error(o);
    });
  }
  function c(n, e) {
    const o = [];
    let i;
    for (; (i = e.regex.exec(n)) !== null; )
      o.push(i[0].slice(e.slice.start, e.slice.end));
    return o;
  }
  return t;
}
const y = (t, s) => {
  const c = t.__vccOpts || t;
  for (const [n, e] of s)
    c[n] = e;
  return c;
}, b = { class: "icon-picker-magic" }, P = { class: "wrap" }, M = { class: "search" }, V = { class: "icon-list" }, N = { class: "wrapper" }, j = { class: "icon-item" }, z = {
  __name: "IconPickerMagic",
  props: {
    activeFontIcon: {
      default: "fontawesome",
      type: String
    }
  },
  setup(t) {
    const s = t, c = F();
    let n = c.value[s.activeFontIcon] ? _(s.activeFontIcon) : "fontawesome", e = _(null);
    const o = m(() => {
      let i = c.value[u(n)].icons;
      return e.value ? i.filter((a) => a.indexOf(e.value) > -1) : i;
    });
    return console.log(c.value), (i, a) => (d(), f("section", b, [
      l("div", P, [
        l("section", M, [
          h(l("input", {
            type: "search",
            placeholder: "Search icon ...",
            "onUpdate:modelValue": a[0] || (a[0] = (r) => w(e) ? e.value = r : e = r)
          }, null, 512), [
            [x, u(e)]
          ])
        ]),
        l("section", V, [
          l("div", N, [
            (d(!0), f(I, null, g(o.value, (r, B) => (d(), f("div", j, [
              l("i", {
                class: k(`${u(c)[u(n)].classPrefix} ${r}`)
              }, null, 2)
            ]))), 256))
          ])
        ])
      ])
    ]));
  }
}, p = /* @__PURE__ */ y(z, [["__scopeId", "data-v-8ba75b8a"]]), v = function(t) {
  t.component("IconPickerMagic", p);
};
typeof window < "u" && window.Vue && v(window.Vue);
const L = {
  version: "0.0.7",
  install: v,
  IconPickerMagic: p
};
export {
  p as IconPickerMagic,
  L as default
};
