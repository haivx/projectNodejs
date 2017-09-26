import lazyLoading from './lazyLoading'

export default {
  name: 'Settings',
  path: '/settings',
  component: lazyLoading('settings/index'),
  meta: {
    link: 'settings/index.vue'
  }
}
