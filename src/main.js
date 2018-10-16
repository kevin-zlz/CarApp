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
import Drive from './components/Drive'
import Drive2 from './components/Drive2'
import Drive3 from './components/Drive3'
import Dot from './components/Dot'
Vue.config.productionTip = false;

//注册全局组件
Vue.component('nav-main',NavMain);
Vue.component('Revert',Revert);
Vue.component('RevertLeft',RevertLeft);
Vue.component('RevertRight',RevertRight);
Vue.component('RevertBottom',RevertBottom);
Vue.component('RevertTop',RevertTop);
Vue.component('RevertTop',RevertTop);
Vue.component('Drive',Drive);
Vue.component('Drive2',Drive2);
Vue.component('Drive3',Drive3);
Vue.component('Dot',Dot);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
