<template>
  <div>
    <app-header></app-header>
    <app-mainMenu :logo="general"></app-mainMenu>
      <transition name="fade">
        <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import mainMenu from './components/mainMenu.vue'
  import registerform from './components/registerform.vue'
  import iconscroll from './components/iconscroll.vue'
  import axios from 'axios'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-mainMenu': mainMenu,
      'registerform': registerform,
      'app-iconscroll': iconscroll
    },
    data () {
      return {
        general: []
      }
    },
    created () {
      // retrieve data from server
      axios.get(`http://localhost:3000`)
        .then(res => {
          this.general = res.data.general
          console.log(this.general)
        })
        .catch(error => {
          console.error(error)
        })
    },
    methods: {
      imagePath: (img) => {
        return require('./assets/images/homepage/' + img)
      }
    }
  }
</script>

<style>
</style>
