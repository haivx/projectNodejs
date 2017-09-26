import lazyLoading from './lazyLoading'

export default {
  name: 'Testimonial',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: 'All Testimonial',
      path: '/allTestimonial',
      component: lazyLoading('testimonial/allTestimonial'),
      meta: {
        link: 'testimonial/allTestimonial.vue'
      }
    },
    {
      name: 'Thêm Testimonial',
      path: '/newTestimonial',
      component: lazyLoading('testimonial/newTestimonial'),
      meta: {
        link: 'testimonial/newTestimonial.vue'
      }
    }
  ]
}
