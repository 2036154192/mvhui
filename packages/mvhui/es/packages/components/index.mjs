import * as s from "./src/index.mjs";
const t = {
  install: (e) => {
    Object.values(s).forEach((a) => {
      e.use(a);
    });
  }
};
export {
  t as default
};
