import { defineComponent as e, computed as r, openBlock as s, createElementBlock as l, normalizeClass as a, renderSlot as p } from "vue";
import "./style/index.css";
const c = e({ name: "mu-button" }), _ = /* @__PURE__ */ e({
  ...c,
  props: {
    type: {},
    default: {}
  },
  setup(o) {
    const t = o, n = r(() => ({ [`mu-button--${t.type}`]: t.type }));
    return (u, m) => (s(), l("button", {
      class: a(["mu-button", n.value])
    }, [
      p(u.$slots, "default")
    ], 2));
  }
});
export {
  _ as default
};
