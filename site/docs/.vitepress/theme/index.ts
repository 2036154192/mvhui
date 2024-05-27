import DefaultTheme from "vitepress/theme";
import mvhui from "mvhui";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(mvhui);
  },
};