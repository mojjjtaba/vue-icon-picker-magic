import { ref as f, openBlock as l, createElementBlock as r, createElementVNode as a, isRef as v, Fragment as _, renderList as p, unref as u, toDisplayString as g, normalizeClass as w, pushScopeId as x, popScopeId as I } from "vue";
function k() {
  let e = f({
    fontawesome: {
      title: "Font Awesome",
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css",
      icons: [],
      classPrefix: "fa-solid",
      regex: /\.fa-[a-z0-9\-]+::before/g,
      slice: { start: 1, end: -8 }
    },
    lineawesome: {
      title: "Line Awesome",
      url: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.css",
      icons: [],
      classPrefix: "la",
      regex: /\.la-[a-z0-9\-]+:before/g,
      slice: { start: 1, end: -7 }
    }
  });
  for (let t in e.value)
    i(t);
  function i(t) {
    let n = e.value[t];
    fetch(n.url).then((o) => o.text()).then((o) => {
      e.value[t].icons = s(o, n);
    }).catch((o) => {
      console.error(o);
    });
  }
  function s(t, n) {
    const o = [];
    let c;
    for (; (c = n.regex.exec(t)) !== null; )
      o.push(c[0].slice(n.slice.start, n.slice.end));
    return o;
  }
  return e;
}
const y = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [t, n] of i)
    s[t] = n;
  return s;
}, F = (e) => (x("data-v-8800a6ba"), e = e(), I(), e), P = { class: "icon-picker-magic" }, b = { class: "wrap" }, S = /* @__PURE__ */ F(() => /* @__PURE__ */ a("section", { class: "search" }, [
  /* @__PURE__ */ a("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), C = { class: "select-font-icon" }, M = ["value", "textContent"], z = { class: "icon-list" }, L = { class: "wrapper" }, N = { class: "icon-item" }, V = {
  __name: "IconPickerMagic",
  props: {
    activeFontIcon: {
      default: "fontawesome",
      type: String
    }
  },
  setup(e) {
    const i = e, s = k();
    let t = s.value[i.activeFontIcon] ? f(i.activeFontIcon) : "fontawesome";
    return console.log(s.value), (n, o) => (l(), r("section", P, [
      a("div", b, [
        S,
        a("section", C, [
          a("select", {
            onChange: o[0] || (o[0] = (c) => v(t) ? t.value = c.target.value : t = c.target.value)
          }, [
            (l(!0), r(_, null, p(u(s), (c, d) => (l(), r("option", {
              key: d,
              value: d,
              textContent: g(d)
            }, null, 8, M))), 128))
          ], 32)
        ]),
        a("section", z, [
          a("div", L, [
            (l(!0), r(_, null, p(u(s)[u(t)].icons, (c, d) => (l(), r("div", N, [
              a("i", {
                class: w(`${u(s)[u(t)].classPrefix} ${c}`)
              }, null, 2)
            ]))), 256))
          ])
        ])
      ])
    ]));
  }
}, m = /* @__PURE__ */ y(V, [["__scopeId", "data-v-8800a6ba"]]), h = function(e) {
  e.component("IconPickerMagic", m);
};
typeof window < "u" && window.Vue && h(window.Vue);
const A = {
  version: "0.0.7",
  install: h,
  IconPickerMagic: m
};
export {
  m as IconPickerMagic,
  A as default
};
