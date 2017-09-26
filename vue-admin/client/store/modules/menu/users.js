import lazyLoading from './lazyLoading'

export default {
  name: 'Thành viên',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'Tất cả người dùng',
      path: '/users',
      component: lazyLoading('users/allUsers'),
      meta: {
        link: 'users/allUsers.vue'
      }
    },
    {
      name: 'Thêm người dùng',
      path: '/newUser',
      component: lazyLoading('users/newUser'),
      meta: {
        link: 'users/newUser.vue'
      }
    },
    {
      name: 'Hồ sơ cá nhân',
      path: '/profile',
      component: lazyLoading('users/profile'),
      meta: {
        link: 'users/profile.vue'
      }
    }
  ]
}
