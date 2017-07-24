<template>
  <footer>
     <div class="container">

       <div class="row">         
       <div class="col-xs-12 col-md-12 col-lg-12">
        <div class="footPage">
          <div class="imgPage">
          <img src="../assets/images/homepage/logo-offical.png" alt=""></div>
          <div class="titlePage">
            <p>Câu lạc bộ ngoại ngữ vì cộng đồng là một tổ chức phi lợi nhuận hoạt động trong lĩnh vực phát triển cộng đồng</p>
          </div>
        </div>
        </div>
          <div class="col-xs-12 col-md-3 col-lg-3 footerPage">
              <h5>LIÊN HỆ </h5> 
              <div class="contactUs">
                <p><i class="fa fa-phone-square" aria-hidden="true"></i> 04.7307.6699</p>
                <p><i class="fa fa-envelope-o" aria-hidden="true"></i> ngoainguvicongdong@gmail.com</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
              </div>
          </div>
           <div class="col-xs-12 col-md-3 col-lg-3 footerPage">
              <h5>TIN TỨC & SỰ KIỆN </h5> 
              <div class="contactUs">
                <p><i class="fa fa-angle-double-right" aria-hidden="true"></i> Kinh nghiệm nộp hồ sơ du học ÚC</p>
                <p><i class="fa fa-angle-double-right" aria-hidden="true"></i> Giao lưu cùng Giảng viên khoa Anh</p>
                <p><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hội thảo hướng nghiệp cho sinh viên ĐH KTQD</p>
              </div>
          </div>
          <div class="col-xs-12 col-md-3 col-lg-3  footerPage">
            <h5>THAM GIA CÙNG CHÚNG TÔI</h5>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fngoainguvicongdong%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=214865951921057" width="300" height="130" style="border:none;overflow:hidden; " scrolling="no" frameborder="0" allowTransparency="true" class="mt-3 mb-3"></iframe>
       </div>
       <div class="col-xs-12 col-md-3 col-lg-3  footerPage">
            <h5>TAGS</h5> 
            <div class="btn btn-success">học tiếng anh</div>
            <div class="btn btn-success">tiếng anh</div>
            <div class="btn btn-success">tiếng anh giao tiếp</div>
            <div class="btn btn-success">luyện nói</div>
            <div class="btn btn-success">trung tâm tiếng anh</div>
            <div class="btn btn-success">học tiếng nhật</div>
            <div class="btn btn-success">học tiếng trung</div>
            <div class="btn btn-success">học tiếng hàn</div>
       </div>
       </div>
       <div class="copyright" ><p>Copyright 2017 COMMUNITY LANGUAGE CLUB | All Rights Reserved</p></div>
     </div>
  </footer>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.imgPage {
  text-align: center;
  width: 100%;
  display: block
}
.imgPage img{
  background:white;
  margin: 5px auto
}
.titlePage {
  text-align: center
}
.titlePage p{
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
}
.copyright p{
  border-top: 1px solid white;
   padding-top: 5px;
   font-size: 15px
}
  footer {
    background:#FF6500;
    padding: 6px;
  }
  p {
    color: white;
    text-align: center;
  }
  .footerPage h4{
    margin-top: 20px;
    text-align: center;
    color:white
  }
    .footerPage h5{
    margin-top: 20px;
    color:white
  }
  .footerPage p{
    text-align: left;
  
  }
   .footerPage p:hover{
     padding-left: 2px;
   }
  .footerPage .slogan {
    text-align: center
  }
    .footerPage input{
      padding-left: 10px;
    }
.contactUs{
  margin-top:15px;
}
  .footerPage iframe {
    width: 100%;
  }
    .footerPage .fimage {
      text-align: center
    }
  .footerPage img{
    background:white;
  }
  .social .fa {
    padding-left: 15px;
    font-size: 20px;
  }
  .footerPage .btn {
    font-size: 14px;
    background:white;
    color: #FF6500;
    border: 1px solid #FF6500;
    cursor: pointer;
    padding: 3px;
  }
  .footerPage .btn:hover{
    background:#FF6500;
    color: white;
    border: 1px solid white;
  }
  @media only screen and (max-width:575px) {
  .copyright p{
    font-size: 0.7rem
  }
  @media screen and (min-width:576px) and (max-width: 767px) {
      .copyright p{
    font-size: 0.7rem
  }
  }
  }
</style>
