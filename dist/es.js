import { ref as m, openBlock as l, createElementBlock as a, createElementVNode as n, Fragment as u, renderList as _, unref as d, toDisplayString as h, normalizeClass as v, pushScopeId as w, popScopeId as g } from "vue";
function x() {
  let e = m({
    fontawesome: {
      title: "Font Awesome",
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css",
      icons: [],
      regex: /\.fa-[a-z0-9\-]+::before/g,
      slice: { start: 1, end: -8 }
    },
    lineawesome: {
      title: "Line Awesome",
      url: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.css",
      icons: [],
      regex: /\.la-[a-z0-9\-]+:before/g,
      slice: { start: 1, end: -7 }
    }
  });
  for (let c in e.value)
    s(c);
  function s(c) {
    let o = e.value[c];
    fetch(o.url).then((t) => t.text()).then((t) => {
      e.value[c].icons = i(t);
    }).catch((t) => {
      console.error(t);
    });
  }
  function i(c, o) {
    const t = [];
    let r;
    for (; (r = o.regex.exec(c)) !== null; )
      t.push(r[0].slice(o.slice.start, o.slice.end));
    return t;
  }
  return e;
}
const I = (e, s) => {
  const i = e.__vccOpts || e;
  for (const [c, o] of s)
    i[c] = o;
  return i;
}, k = (e) => (w("data-v-7f6bf9c0"), e = e(), g(), e), y = { class: "icon-picker-magic" }, b = { class: "wrap" }, S = /* @__PURE__ */ k(() => /* @__PURE__ */ n("section", { class: "search" }, [
  /* @__PURE__ */ n("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), F = { class: "select-font-icon" }, M = ["value", "textContent"], P = { class: "icon-list" }, z = { class: "wrapper" }, C = { class: "icon-item" }, L = {
  __name: "IconPickerMagic",
  props: {
    activeFontIcon: {
      default: "fontawesome",
      type: String
    }
  },
  setup(e) {
    const s = x();
    return console.log(s.value), (i, c) => (l(), a("section", y, [
      n("div", b, [
        S,
        n("section", F, [
          n("select", null, [
            (l(!0), a(u, null, _(d(s), (o, t) => (l(), a("option", {
              key: t,
              value: t,
              textContent: h(t)
            }, null, 8, M))), 128))
          ])
        ]),
        n("section", P, [
          n("div", z, [
            (l(!0), a(u, null, _(d(s)[e.activeFontIcon].icons, (o, t) => (l(), a("div", C, [
              n("i", {
                class: v(`fa-solid ${o}`)
              }, null, 2)
            ]))), 256))
          ])
        ])
      ])
    ]));
  }
}, f = /* @__PURE__ */ I(L, [["__scopeId", "data-v-7f6bf9c0"]]), p = function(e) {
  e.component("IconPickerMagic", f);
};
typeof window < "u" && window.Vue && p(window.Vue);
const V = {
  version: "0.0.7",
  install: p,
  IconPickerMagic: f
};
export {
  f as IconPickerMagic,
  V as default
};
