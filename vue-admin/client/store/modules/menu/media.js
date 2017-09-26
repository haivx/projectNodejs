import lazyLoading from './lazyLoading'

export default {
  name: 'Thư viện',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'Tất cả phương tiện',
      path: '/allMedia',
      component: lazyLoading('media/allMedia'),
      meta: {
        link: 'media/allMedia.vue'
      }
    },
    {
      name: 'Thêm mới phương tiện',
      path: '/newMedia',
      component: lazyLoading('media/newMedia'),
      meta: {
        link: 'media/newMedia.vue'
      }
    }
  ]
}
