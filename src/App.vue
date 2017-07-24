<template>
  <div>
    <app-header></app-header>
    <app-mainMenu></app-mainMenu>
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
  import breadcrumb from './components/Breadcrumb.vue'
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-mainMenu': mainMenu,
      'registerform': registerform,
      'app-iconscroll': iconscroll,
      'breadcrumb': breadcrumb
    },
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>

