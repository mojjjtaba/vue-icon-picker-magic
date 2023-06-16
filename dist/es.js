import { ref as f, openBlock as l, createElementBlock as r, createElementVNode as a, isRef as m, Fragment as d, renderList as p, unref as u, toDisplayString as g, normalizeClass as I, pushScopeId as w, popScopeId as x } from "vue";
function k() {
  let e = f({
    fontawesome: {
      title: "Font Awesome",
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css",
      icons: [],
      classPrefix: "fa-solid",
      regex: /\.fa-[a-z0-9\-]+::before/g,
      slice: { start: 1, end: -8 }
    }
  });
  for (let t in e.value)
    i(t);
  function i(t) {
    let c = e.value[t];
    fetch(c.url).then((o) => o.text()).then((o) => {
      e.value[t].icons = n(o, c);
    }).catch((o) => {
      console.error(o);
    });
  }
  function n(t, c) {
    const o = [];
    let s;
    for (; (s = c.regex.exec(t)) !== null; )
      o.push(s[0].slice(c.slice.start, c.slice.end));
    return o;
  }
  return e;
}
const y = (e, i) => {
  const n = e.__vccOpts || e;
  for (const [t, c] of i)
    n[t] = c;
  return n;
}, F = (e) => (w("data-v-8800a6ba"), e = e(), x(), e), P = { class: "icon-picker-magic" }, S = { class: "wrap" }, b = /* @__PURE__ */ F(() => /* @__PURE__ */ a("section", { class: "search" }, [
  /* @__PURE__ */ a("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), C = { class: "select-font-icon" }, M = ["value", "textContent"], N = { class: "icon-list" }, V = { class: "wrapper" }, j = { class: "icon-item" }, z = {
  __name: "IconPickerMagic",
  props: {
    activeFontIcon: {
      default: "fontawesome",
      type: String
    }
  },
  setup(e) {
    const i = e, n = k();
    let t = n.value[i.activeFontIcon] ? f(i.activeFontIcon) : "fontawesome";
    return console.log(n.value), (c, o) => (l(), r("section", P, [
      a("div", S, [
        b,
        a("section", C, [
          a("select", {
            onChange: o[0] || (o[0] = (s) => m(t) ? t.value = s.target.value : t = s.target.value)
          }, [
            (l(!0), r(d, null, p(u(n), (s, _) => (l(), r("option", {
              key: _,
              value: _,
              textContent: g(_)
            }, null, 8, M))), 128))
          ], 32)
        ]),
        a("section", N, [
          a("div", V, [
            (l(!0), r(d, null, p(u(n)[u(t)].icons, (s, _) => (l(), r("div", j, [
              a("i", {
                class: I(`${u(n)[u(t)].classPrefix} ${s}`)
              }, null, 2)
            ]))), 256))
          ])
        ])
      ])
    ]));
  }
}, h = /* @__PURE__ */ y(z, [["__scopeId", "data-v-8800a6ba"]]), v = function(e) {
  e.component("IconPickerMagic", h);
};
typeof window < "u" && window.Vue && v(window.Vue);
const E = {
  version: "0.0.7",
  install: v,
  IconPickerMagic: h
};
export {
  h as IconPickerMagic,
  E as default
};
