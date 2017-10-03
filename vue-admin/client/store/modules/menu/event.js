import lazyLoading from './lazyLoading'

export default {
  name: 'Sự kiện',
  path: '/event',
  meta: {
    label: 'Sự kiện',
    icon: 'fa-bar-chart-o',
    expanded: false,
    link: 'event/allEvent.vue'
  },
  component: lazyLoading('event', true),

  children: [
    {
      name: 'Tất cả sự kiện',
      path: 'allEvent',
      component: lazyLoading('event/allEvent'),
      meta: {
        link: 'event/allEvent.vue'
      }
    },
    {
      name: 'Thêm mới sự kiện',
      path: 'newEvent',
      component: lazyLoading('event/newEvent'),
      meta: {
        link: 'event/newEvent.vue'
      }
    }
  ]
}
