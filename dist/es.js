import { ref as h, openBlock as a, createElementBlock as l, createElementVNode as n, Fragment as u, renderList as _, unref as d, toDisplayString as m, normalizeClass as v, pushScopeId as I, popScopeId as w } from "vue";
function g() {
  let e = h({
    fontawesome: {
      title: "Font Awesome",
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css",
      icons: []
    }
  });
  for (let o in e.value)
    c(o);
  function c(o) {
    fetch(e.value[o].url).then((t) => t.text()).then((t) => {
      e.value[o].icons = i(t);
    }).catch((t) => {
      console.error(t);
    });
  }
  function i(o) {
    const t = /\.fa-[a-z0-9\-]+::before/g, s = [];
    let r;
    for (; (r = t.exec(o)) !== null; )
      s.push(r[0].slice(1, -8));
    return s;
  }
  return e;
}
const x = (e, c) => {
  const i = e.__vccOpts || e;
  for (const [o, t] of c)
    i[o] = t;
  return i;
}, k = (e) => (I("data-v-76b58540"), e = e(), w(), e), y = { class: "icon-picker-magic" }, S = { class: "wrap" }, b = /* @__PURE__ */ k(() => /* @__PURE__ */ n("section", { class: "search" }, [
  /* @__PURE__ */ n("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), F = { class: "select-font-icon" }, M = ["value", "textContent"], P = { class: "icon-list" }, C = { class: "wrapper" }, N = { class: "icon-item" }, V = {
  __name: "IconPickerMagic",
  props: {
    activeFontIcon: {
      default: "fontawesome",
      type: String
    }
  },
  setup(e) {
    const c = g();
    return console.log(c), (i, o) => (a(), l("section", y, [
      n("div", S, [
        b,
        n("section", F, [
          (a(!0), l(u, null, _(d(c), (t, s) => (a(), l("select", null, [
            n("option", {
              value: s,
              textContent: m(s)
            }, null, 8, M)
          ]))), 256))
        ]),
        n("section", P, [
          n("div", C, [
            (a(!0), l(u, null, _(d(c)[e.activeFontIcon].icons, (t, s) => (a(), l("div", N, [
              n("i", {
                class: v(`fa-solid ${t}`)
              }, null, 2)
            ]))), 256))
          ])
        ])
      ])
    ]));
  }
}, p = /* @__PURE__ */ x(V, [["__scopeId", "data-v-76b58540"]]), f = function(e) {
  e.component("IconPickerMagic", p);
};
typeof window < "u" && window.Vue && f(window.Vue);
const z = {
  version: "0.0.7",
  install: f,
  IconPickerMagic: p
  // customButton: IconPickerMagic
};
export {
  p as IconPickerMagic,
  z as default
};
