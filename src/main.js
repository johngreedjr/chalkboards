import Vue from 'vue';
import Chalkboards from './Chalkboards';

Vue.config.productionTip = false;

new Vue({
  el: '#chalkboards',
  template: '<Chalkboards/>',
  components: {
    Chalkboards
  },
});
