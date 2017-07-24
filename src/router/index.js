import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import lienhe from '@/components/lienhe'
import gioithieu from '@/components/gioithieu'
import tintuc from '@/components/tintuc'
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
      component: lienhe,
      meta: { breadcrumb: 'Liên Hệ' }
    },
    {
      path: '/gioi-thieu',
      name: 'gioithieu',
      component: gioithieu,
      meta: { breadcrumb: 'Hướng dẫn' }
    },
    {
      path: '/tintuc-sukien',
      name: 'tintuc',
      component: tintuc,
      meta: { breadcrumb: 'Tin tức' }
    },
    {
      path: '/lop-tieng-anh-0-dong',
      name: 'loptienganh',
      component: loptienganh,
      meta: { breadcrumb: 'Lớp tiếng Anh' }
    },
    {
      path: '/lich-khai-giang',
      name: 'lichkhaigiang',
      component: lichkhaigiang,
      meta: { breadcrumb: 'Lịch khai giảng' }
    },
    {
      path: '/sinh-hoat-clb-ngoai-ngu-vi-cong-dong',
      name: 'events',
      component: events,
      meta: { breadcrumb: 'Events' }
    },
    {
      path: '/sukien',
      name: 'sukien',
      component: sukien,
      meta: { breadcrumb: 'sukien' }
    }
  ]
})
