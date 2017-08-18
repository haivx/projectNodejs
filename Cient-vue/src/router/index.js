import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import lienhe from '@/components/lienhe'
import gioithieu from '@/components/gioithieu'
import loptienganh from '@/components/loptienganh'
import lichkhaigiang from '@/components/lichkhaigiang'
import events from '@/components/events'
import sukien from '@/components/sukien'
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
      path: '/sinh-hoat-clb-ngoai-ngu-vi-cong-dong',
      name: 'events',
      component: events
    },
    {
      path: '/sukien',
      name: 'sukien',
      component: sukien
    }
  ]
})
