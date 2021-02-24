import Vue from 'vue';
import './vee-validate'
import router from './router';
import './scss/index.scss';
import App from './components/App.vue';
import { Field, Input, Button, Tooltip } from 'buefy';
Vue.use(Field);
Vue.use(Input);
Vue.use(Button);
Vue.use(Tooltip);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount(`#app`);
