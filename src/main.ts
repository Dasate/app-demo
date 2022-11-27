import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementPlus from "element-plus";
import "element-plus/dist/index.css";
//测试第二次提交github
createApp(App).use(store).use(router).use(elementPlus).mount("#app");
