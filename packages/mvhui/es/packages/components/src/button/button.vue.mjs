import { defineComponent as n, toRefs as c, computed as b, openBlock as f, createElementBlock as _, normalizeClass as v, unref as o, renderSlot as x } from "vue";
import "./style/index.css";
import { buttonProps as $ } from "./button-type.mjs";
const g = ["disabled"], h = n({ name: "mu-button" }), C = /* @__PURE__ */ n({
  ...h,
  props: $,
  setup(s) {
    const u = s, { type: l, size: a, disabled: t, round: r, plain: i, text: d, loading: e } = c(u), p = b(() => [
      "mu-button",
      `mu-button--${l.value}`,
      `mu-button--${a.value}`,
      t.value ? "is-disabled" : "",
      r.value ? "is-round" : "",
      i.value ? "is-plain" : "",
      d.value ? "is-text" : "",
      e.value ? "is-loading" : ""
    ]);
    return (m, k) => (f(), _("button", {
      class: v(p.value),
      disabled: o(t) || o(e)
    }, [
      x(m.$slots, "default")
    ], 10, g));
  }
});
export {
  C as default
};
