import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import UIComponents from "./components/UI/index";
import HeaderComponents from "./components/Header/index";

import "./assets/scss/main.scss";

const app = createApp(App);

HeaderComponents.forEach((component) => {
    app.component(component.name, component);
});
UIComponents.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).mount("#app");