// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NavMain from './components/NavMain'
import Revert from './components/Revert'
import RevertLeft from './components/RevertLeft'
import RevertRight from './components/RevertRight'
import RevertBottom from './components/RevertBottom'
import RevertTop from './components/RevertTop'
import City from './components/City'
import Time from './components/Time'
import Strict from './components/Strict'
import Calenlar from './components/Calenlar'
import Province from './components/Province'
Vue.config.productionTip = false;

//注册全局组件
Vue.component('nav-main',NavMain);
Vue.component('Revert',Revert);
Vue.component('RevertLeft',RevertLeft);
Vue.component('RevertRight',RevertRight);
Vue.component('RevertBottom',RevertBottom);
Vue.component('RevertTop',RevertTop);
Vue.component('Time',Time);
Vue.component('City',City);
Vue.component('Strict',Strict);
Vue.component('Calenlar',Calenlar);
Vue.component('Province',Province);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
