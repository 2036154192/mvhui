import { defineComponent as o, openBlock as p, createElementBlock as s, normalizeClass as m, unref as c, renderSlot as a } from "vue";
import { computed as l } from "../../../../node_modules/.pnpm/@vue_runtime-core@3.4.27/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { buttonGroupProps as f } from "./buttonGroup-type.mjs";
import "./style/index.css";
import { toRefs as i } from "../../../../node_modules/.pnpm/@vue_reactivity@3.4.27/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const d = o({ name: "mu-button-group" }), B = /* @__PURE__ */ o({
  ...d,
  props: f,
  setup(t) {
    const r = t, { direction: e } = i(r), n = l(() => [
      "mu-button-group",
      `mu-button-group--${e.value}`
    ]);
    return (u, _) => (p(), s("div", {
      class: m(c(n))
    }, [
      a(u.$slots, "default")
    ], 2));
  }
});
export {
  B as default
};
