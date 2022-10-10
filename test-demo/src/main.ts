import { createApp } from "vue";
import router from "./router/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
const app = createApp(App);
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const App = createApp(App);
App.use(ElementPlus);
//导入公共组件
const modulesFiles: any = import.meta.globEager("./components/*/*.vue");
const result = Object.keys(modulesFiles).filter((item: any) => true);
result.forEach((item: any) => {
  const moduleName = item.split("/")[2];
  const componentConfig = modulesFiles[item];
  app.component(moduleName, componentConfig.default || componentConfig);
});
app.use(Antd).use(router).mount("#app");
