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

import Dot from './components/Dot'
import Time from './components/Time'
import City from './components/City'
import Strict from './components/Strict'
import Calenlar from './components/Calenlar'
import Province from './components/Province'
import LongLoad from './components/LongLoad'
import User from './components/User'
import TimeNew from './components/TimeNew'
import CityNew from './components/CityNew'
import AnswerDetails from './components/AnswerDetails'
import SelectCarStyle from './components/SelectCarStyle'
import SelectDay from './components/SelectDay'
import UpDataPwd from './components/UpDataPwd'
import LongHire from './components/LongHire'
import Order from './components/Order'
import Information from './components/Information'
import CarDetail from './components/CarDetail'
import Dic from './components/Dic'
import UpHead from './components/UpHead'
import Questions from './components/Questions'
import Article from './components/Article'
import Pagination from './components/Pagination'
import MyActivity from './components/MyActivity'
import SowingMap from './components/SowingMap'

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
Vue.component('RevertTop',RevertTop);
Vue.component('Drive',Drive);
Vue.component('Dot',Dot);
Vue.component('Dot',Dot);
Vue.component('LongLoad',LongLoad);
Vue.component('User',User);
Vue.component('TimeNew',TimeNew);
Vue.component('CityNew',CityNew);
Vue.component('AnswerDetails',AnswerDetails);
Vue.component('SelectDay',SelectDay);
Vue.component('SelectCarStyle',SelectCarStyle);
Vue.component('UpDataPwd',UpDataPwd);
Vue.component('LongHire',LongHire);
Vue.component('Order',Order);
Vue.component('Information',Information);
Vue.component('CarDetail',CarDetail);
Vue.component('Dic',Dic);
Vue.component('UpHead',UpHead);
Vue.component('Questions',Questions);
Vue.component('Article',Article);
Vue.component('Pagination',Pagination);
Vue.component('MyActivity',MyActivity);
Vue.component('SowingMap',SowingMap);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
