import lazyLoading from './lazyLoading'

export default {
  name: 'Sự kiện',
  meta: {
    label: 'Sự kiện',
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'Tất cả sự kiện',
      path: '/allEvent',
      component: lazyLoading('event/allEvent'),
      meta: {
        link: 'event/allEvent.vue'
      }
    },
    {
      name: 'Thêm mới',
      path: '/newEvent',
      component: lazyLoading('event/newEvent'),
      meta: {
        link: 'event/newEvent.vue'
      }
    }
  ]
}
