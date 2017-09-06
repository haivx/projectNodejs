import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import lienhe from '@/components/lienhe'
import gioithieu from '@/components/gioithieu'
import loptienganh from '@/components/loptienganh'
import lichkhaigiang from '@/components/lichkhaigiang'
import eventDetail from '@/components/event_detail'
import event from '@/components/event'
import dashboard from '@/components/dashboard'
import dynamicRoute from '@/components/dynamicRoute'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/event-detail',
      name: 'event_detail',
      component: eventDetail
    },
    {
      path: '/event-detail/:id',
      name: 'dynamicRoute',
      component: dynamicRoute
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
