import { createApp } from "vue";
import App from "./app.vue";
import muui from "@muui/components";
const app = createApp(App);
app.use(muui);
app.mount("#app");