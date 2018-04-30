import Vue from 'vue'
import App from './App.vue'

import AppListItem from './components/ListItem.vue';
import AppBasket from './components/Basket.vue';
import AppFilters from './components/Filters.vue';
import AppStats from './components/Stats.vue';

Vue.component('AppListItem', AppListItem);
Vue.component('AppBasket', AppBasket);
Vue.component('AppFilters', AppFilters);
Vue.component('AppStats', AppStats);

new Vue({
  el: '#app',
  render: h => h(App)
})
