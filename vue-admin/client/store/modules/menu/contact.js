import lazyLoading from './lazyLoading'

export default {
  name: 'Contact',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'Tất cả contact',
      path: '/contact',
      component: lazyLoading('contact/allContact'),
      meta: {
        link: 'contact/allContact.vue'
      }
    },
    {
      name: 'Thêm mới contact',
      path: '/newContact',
      component: lazyLoading('contact/newContact'),
      meta: {
        link: 'contact/newContact.vue'
      }
    }
  ]
}
