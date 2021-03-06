import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import lienhe from '@/components/lienhe'
import gioithieu from '@/components/gioithieu'
import loptienganh from '@/components/loptienganh'
import lichkhaigiang from '@/components/lichkhaigiang'
import eventDetail from '@/components/eventDetail'
import event from '@/components/event'
import dashboard from '@/components/dashboard'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/lien-he',
      name: 'lienhe',
      component: lienhe
    },
    {
      path: '/gioi-thieu',
      name: 'gioithieu',
      component: gioithieu
    },
    {
      path: '/lop-tieng-anh-0-dong',
      name: 'loptienganh',
      component: loptienganh
    },
    {
      path: '/lich-khai-giang',
      name: 'lichkhaigiang',
      component: lichkhaigiang
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/event/:eventDetail',
      name: 'eventDetail',
      component: eventDetail
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/dashboard/account',
      name: 'Account',
      component: dashboard
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    return {x: 0, y: 0}
  }
})
