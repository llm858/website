import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myheader from './components/myheader'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("my-header",myheader);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
