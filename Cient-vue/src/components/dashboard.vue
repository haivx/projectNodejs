<template>
  <!-- MENU + SIDEBAR-->
  <div id="dashboard">
    <div class="wrapper">
      <div class="menuLeft">
        <ul class="navbar-nav navbar-sidenav">
          <li class="nav-item active" >
              <span><i class="fa fa-fw fa-dashboard"></i>Dashboard</span>
          </li>          
          <li class="nav-item ">
              <span><i class="fa fa-file-o"></i>  Trang</span>
          </li>
          <li class="nav-item" @click="show1 = !show1" >
              
              <span><i class="fa fa-pencil-square-o"></i>  Bài viết</span>
            <i id="down" class="fa fa-sort-desc" v-if="!show1"></i>
             <i id="up"  class="fa fa-sort-desc rotate1-complete-item" v-if="show1 = show1"></i>
            <transition name="bounce">
            <ul class="submenu" v-if="show1">                        
              <li>
                <a href="">Tất cả bài viết</a>
              </li>
              <li>
                <a href="">Bài viết mới</a>
              </li>
              <li>
                <a href="">Chuyên mục</a>
              </li>
            </ul>
            </transition>
          </li>
          <li class="nav-item">
              
              <span><i class="fa fa-youtube-play"></i>  Phương tiện</span>

            <!-- <i id="down" class="fa fa-sort-desc"></i> -->
          </li>
          <li class="nav-item" @click="show2 = !show2">
              <span><i class="fa fa-address-book-o"></i>  Contact</span>

            <i id="down" class="fa fa-sort-desc" v-if="!show2"></i>
            <i id="up"  class="fa fa-sort-desc rotate1-complete-item" v-if="show2 = show2"></i>
            <transition name="bounce">
            <ul class="submenu" v-if="show2">
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Bài viết mới</a>
              </li>
              <li>
                <a href="">Chuyên mục</a>
              </li>
            </ul>
            </transition>
          </li>
          <li class="nav-item" @click="show3 = !show3">


              <span><i class="fa fa-bandcamp"></i>  Thành viên</span>

    <i id="down"  class="fa fa-sort-desc rotate1-complete-item" v-if="!show3"></i>
    <i id="up"  class="fa fa-sort-desc rotate1-complete-item" v-if="show3 = show3"></i>
            <transition name="bounce">
            <ul class="submenu" v-if="show3">
              <li>
                <a href="">Tất cả User</a>
              </li>
              <li>
                <a href="">Thêm mới</a>
              </li>
            </ul>
            </transition>
          </li>
          <li class="nav-item">


              <span><i class="fa fa-fw fa-wrench"></i>  Cài đặt</span>

          </li>

        </ul>
      </div>
      <div class="contentRight">
    <!-- CONTENT-->

  <!-- <account></account> -->
    <!-- HET CONTENT-->
        
      </div>
    </div>
  <!-- HET MENU + SIDEBAR-->


  </div>
</template> 
<script>
import account from '../components/dashboard-account.vue'
export default {
  components: {
    account: account
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false
    }
  }
}

</script>
<style scoped>
#dashboard {
  margin-top: 110px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap
}

.wrapper .menuLeft {
  flex-grow: 1;
  width: 15%;
  height: 80vw;
  background: #324157
}

.navbar-nav .nav-item {
  font-size: 18px;
  padding-top: 15px;
  position: relative;
}
.navbar-nav .nav-item 
.navbar-nav .nav-item  {
  color: white;
}

.navbar-nav .nav-item span:hover {
  text-decoration: none;
}

.contentRight {
  flex-grow: 8;  
  width: 85%;
  height: 80vw;
}

.submenu {
  display: none;
}
.nav-item span {
  margin-left: 15px;
  color: white
}
.nav-item:hover{
  background:gray;
  cursor: pointer;
}
.nav-item .submenu {
  display: block;
  font-size: 15px;
  list-style-type: none;
  background: #212529;
}
.nav-item .submenu li:hover{
  background: gray
}
.nav-item .submenu li {
  padding-top: 10px;
}
.nav-item .submenu li a{
  color: white
}
#down {
  color: white;
  position: absolute;
  right: 10px;
}
#up {
  color: white;
  position: absolute;
  right: 10px;
    transform: rotate(-90deg)
}
/* Transition*/
.bounce-enter-active {
  animation: bounce-in .1s;
}
.bounce-leave-active {
  animation: bounce-in .1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
