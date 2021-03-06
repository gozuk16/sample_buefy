import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
//import 'buefy/dist/buefy.css';
import './assets/style.scss';
import Api from './api';
import router from './router';

Vue.prototype.$api = Api;
Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


