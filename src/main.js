import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import instance from "./axios";
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";
import moment from "moment"; //导入文件

Vue.prototype.$moment = moment; //赋值使用
// import {
//   Button,
//   Layout,
//   Icon,
//   Menu,
//   Dropdown,
//   Form,
//   Select,
//   Modal,
//   Table,
//   Input,
//   Row,
//   Col
// } from "ant-design-vue";

Vue.config.productionTip = false;

// Vue.use(Button);
// Vue.use(Layout);
// Vue.use(Icon);
// Vue.use(Menu);
// Vue.use(Dropdown);
// Vue.use(Form);
// Vue.use(Select);
// Vue.use(Modal);
// Vue.use(Table);
// Vue.use(Input);
// Vue.use(Space);
// Vue.use(Row);
// Vue.use(Col);
Vue.use(Antd);

// Vue.prototype.$request = instance;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
