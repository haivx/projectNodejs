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
      name: 'Tất cả ticket',
      path: '/allTicket',
      component: lazyLoading('contact/allTicket'),
      meta: {
        link: 'contact/allTicket.vue'
      }
    }
  ]
}
