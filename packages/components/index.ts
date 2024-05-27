import * as components from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    Object.values(components).forEach((component: any) => {
      app.use(component);
    });
  },
};
