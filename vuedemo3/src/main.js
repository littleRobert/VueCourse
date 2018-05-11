// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailCouPage from './pages/detail/count'
import DetailAnaPage from './pages/detail/analysis'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path:'/detail',
      component: DetailPage,
      redirect:'/detail/count',
      children: [
        {
          path:'count',
          component: DetailCouPage
        },
        {
          path:'analysis',
          component: DetailAnaPage
        },
        {
          path:'forecast',
          component: DetailForPage
        },
        {
          path:'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
