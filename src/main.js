import Vue from 'vue';
import router from '@/router';
import { dollarFilter, percentFilter } from '@/filters';
import '@/assets/css/tailwind.css';
import Chart from 'chart.js';
import Chartick from 'vue-chartkick';
import { VueSpinners } from '@saeris/vue-spinners';

import App from './App.vue';

Vue.use(VueSpinners);
Vue.use(Chartick.se(Chart));
Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
