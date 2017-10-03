import lazyLoading from './lazyLoading'

export default {
  name: 'Khóa học',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'All Courses',
      path: '/allCourses',
      component: lazyLoading('courses/allCourses'),
      meta: {
        link: 'courses/allCourses.vue'
      }
    },
    {
      name: 'Thêm Course',
      path: '/newCourse',
      component: lazyLoading('courses/newCourse'),
      meta: {
        link: 'courses/newCourse.vue'
      }
    }
  ]
}
