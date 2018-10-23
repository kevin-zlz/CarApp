import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Calenlar from '@/components/Calenlar'
import Login from '@/components/Login'
import UpDataPwd from '@/components/UpDataPwd'
import Regist from '@/components/Regist'
import Revert from '@/components/Revert'
import Answer from '@/components/Answer'
import Drive from '@/components/Drive'
import Dot from '@/components/Dot'
import LongLoad from '@/components/LongLoad'
import User from '@/components/User'
import AnswerDetails from '@/components/AnswerDetails'
import Retrieve from '@/components/Retrieve'
import CarDetail from '@/components/CarDetail'
import UpHead from '@/components/UpHead'
import Article from '@/components/Article'
import Order from '@/components/Order'
import Questions from '@/components/Questions'
import Activity from '@/components/Activity'
import MyActivity from '@/components/MyActivity'
import ConfirmOrder from '@/components/ConfirmOrder'
import AnswerDetail from '@/components/AnswerDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/calenlar',
      name: Calenlar,
      component: Calenlar
    },
    {
      path: '/order',
      name:ConfirmOrder ,
      component: ConfirmOrder,
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Pwd',
      name: 'UpDataPwd',
      component: UpDataPwd
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/revert',
      name: 'Revert',
      component: Revert
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer,
    },
    {
      path: '/drive',
      name: 'Drive',
      component: Drive,
    },
    {
      path: '/dot',
      name: 'Dot',
      component: Dot,
    },
    {
      path: '/retrieve',
      name: 'Retrieve',
      component: Retrieve,
    },
    {
      path: '/long',
      name: 'LongLoad',
      component: LongLoad,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '/det',
      name: 'AnswerDetails',
      component: AnswerDetails,
    },
    {
      path: '/revert/car',
      name: 'CarDetail',
      component: CarDetail,
    },
    {
      path: '/answer/question',
      name: 'Questions',
      component: Questions,
    },
    {
      path: '/uphead',
      name: 'UpHead',
      component: UpHead,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
    },
    {
      path: '/myactivity',
      name: 'MyActivity',
      component: MyActivity,
    },
    {
      path: '/answerdetail',
      name: 'AnswerDetail',
      component: AnswerDetail
    },
  ]
})
