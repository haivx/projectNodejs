<template>
  <div>
    <h1>
      This is allEvent page
      <ul v-for="item in course" :key="item.key">
        <li>{{item.event[0]}}</li>
      </ul>
    </h1>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    course () {
      console.log(this.$store.state.course)
      return this.$store.state.course
    }
  },
  created () {
    if (this.course.length === 0) {
      this.$store.dispatch('courseDetail')
    }
  }
}
</script>
