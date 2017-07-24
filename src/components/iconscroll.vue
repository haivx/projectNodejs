<template>
  <div>
    <div class="box_scroll " id="regist" @click="scroll">
      <img src="../assets/images/homepage/regist.png" alt="">
    </div>
        <div class="calendarScroll " id="calendarScroll">
      <router-link to="lich-khai-giang"><img src="../assets/images/homepage/calendar.png" alt=""></router-link> 
    </div>
  </div>
  </div>
</template>
<script>
window.$(window).scroll(function () {
  if (window.$(this).scrollTop() >= 550) {
    window.$('.box_scroll img').css('display', 'block')
  } else {
    window.$('.box_scroll img').css('display', 'none')
  }
})
window.$(window).scroll(function () {
  if (window.$(this).scrollTop() >= 550) {
    window.$('#calendarScroll img').css('display', 'block')
  } else {
    window.$('#calendarScroll img').css('display', 'none')
  }
})
export default {
  methods: {
    scroll: function () {
      window.$('html, body').animate({
        scrollTop: window.$('#register_hocthumienphi').offset().top - 250
      }, 1000)
    }
  }
}
</script>
<style>
/******
	CSS CHO PHAN CONTENT6 THANH SCROLL
	******/

.box_scroll {
  position: fixed;
  top: 140px;
  right: 20px;
  z-index: 10000;
  transition: right 0.3s ease-in-out ;
}

.box_scroll:hover {
  right: 30px;
  transition: 0.3s;
  cursor: pointer
}

.box_scroll img {
  transition: 0.3s;
  display: none;
}
#calendarScroll {
  position: fixed;
  top: 140px;
  left: 20px;
  z-index: 10000;
  transition:  0.3s  ;
}

#calendarScroll:hover {
  left: 30px;
  transition: 0.3s;
  cursor: pointer
}

#calendarScroll img {
  transition: 0.3s;
  display: none;
}

@media screen and (max-width: 575px) {
  #calendarScroll a > img{
    display: none!important
  }
    .box_scroll img {
    display: none!important
  }
}
@media screen and (min-width:576px) and (max-width: 767px) {
    #calendarScroll a > img{
    display: none!important
  }
  .box_scroll img {
    display: none!important
  }
}

</style>
