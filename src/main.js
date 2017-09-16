import Vue from 'vue';
import Chalkboards from './Chalkboards';
require('../node_modules/bootstrap/less/bootstrap.less');

Vue.config.productionTip = false;

new Vue({
  el: '#chalkboards',
  template: '<Chalkboards/>',
  components: {
    Chalkboards
  },
});
