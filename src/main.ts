import { createApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import Vant from "vant";
import router from "./router/index";
import store from "./store/index";

createApp(App).use(router).use(Vant).use(store).mount("#app");
