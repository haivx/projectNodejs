<template>
  <div class="homepage">
    <!-- KHUNG SLIDE-->
    <div class="container-fluid mainslider">
      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 col-xl-12">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item slider active slideFrames" v-if="general[0]">
                <img class="d-block img-fluid" :src="imagePath(general[0].image_link)" alt="Second slide">
              </div>
              <!-- <div class="carousel-item slider slideFrames">
                <img class="d-block img-fluid" src="../assets/images/homepage/slider/1.jpeg" alt="Third slide">
              </div> -->
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Het phan Slide-->
    </div>
    <!-- CONTENT 1- TẠI SAO CHỌN CLB-->
    <div class="container">
      <div class="row ">
        <div class="titleReason text-center">
          <h2>ĐIỂM KHÁC BIỆT CỦA CHÚNG TÔI ?</h2>
        </div>
      </div>
      <P style="text-align:center">Với chúng tôi, giúp học viên thành công là niềm hạnh phúc. Quan tâm tới học viên là phương châm hoạt động của chúng tôi</P>
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="specialBox">
            <div class="specialImage">
              <img src="../assets/images/homepage/teacher.png" class="img-fluid" alt="">
            </div>
            <div class="specialIcon">
              <i class="fa fa-free-code-camp" aria-hidden="true"></i>
            </div>
            <div class="specialContent">
              <h4>Giảng viên</h4>
              <p>Đội ngũ giảng viên bản xứ giúp bạn thực hành và gạt bỏ những rào cản về giao tiếp</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="specialBox">
            <div class="specialImage">
              <img src="../assets/images/homepage/class.png" class="img-fluid" alt="">
            </div>
            <div class="specialIcon">
              <i class="fa fa-free-code-camp" aria-hidden="true"></i>
            </div>
            <div class="specialContent">
              <h4>Mô hình học CHOC</h4>
              <p>Là sự kết hợp hoàn hảo giữa Online và Offline,giúp bạn tiết kiệm được 55% thời gian, tăng 100% hiệu quả học tập.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="specialBox">
            <div class="specialImage">
              <img src="../assets/images/homepage/coach.png" class="img-fluid" alt="">
            </div>
            <div class="specialIcon">
              <i class="fa fa-free-code-camp" aria-hidden="true"></i>
            </div>
            <div class="specialContent">
              <h4>Coach
                <br>
              </h4>
              <p>Đội ngũ Coach luôn theo dõi và đốc thúc học viên đạt mục tiêu theo Action Plan chi tiết đến từng buổi học</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="specialBox">
            <div class="specialImage">
              <img src="../assets/images/homepage/method.png" class="img-fluid" alt="">
            </div>
            <div class="specialIcon">
              <i class="fa fa-free-code-camp" aria-hidden="true"></i>
            </div>
            <div class="specialContent">
              <h4>Phương Pháp V.A.K
              </h4>
              <p>Phương pháp học V.A.K (Hình ảnh - Âm thanh - Vận động trò chơi) giúp học viên nhớ bài ngay tại lớp học</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Het Content 1 -TẠI SAO CHỌN CLB-->

    <!-- Content 2 - CÁC HOẠT ĐỘNG CỦA CLB -->
    <div class="container">
      <div class="row ">
        <div class="titleReason text-center">
          <h2>CÁC KHÓA HỌC</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="title-courses">
            <h4>Khóa học của chúng tôi</h4>
            <p>Học tập là không có điểm dừng. Không phải bạn đọc xong một cuốn sách, qua một kì thi hay kết thúc một chương trình học. Trong cả cuộc đời mình, từ lúc bạn sinh ra là bạn đã bắt đầu học....
              <br>
            </p>

            <blockquote class="blockquote">
              <i>Education is the most powerful weapon which you can use to change the world.</i>
              <footer class="blockquote-footer">Nelson Mandela</footer>
            </blockquote>
            <!--<div class="btn btn-primary">See all courses</div> -->
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="courses" v-if="course[11]">
            <a href="#">
              <div class="featured_image_courses" >
                <div class="icon">
                  <img :src="imagePath(general[0].logo)" alt="">
                </div>
                <img :src="imagePathClass(course[11].picture)" alt="" class="img-fluid">
              </div>
            </a>
            <div class="col-xs-12 col-md-12 col-lg-12 course_text_content">
              <a href="">{{ course[11].title }}</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="courses" v-if="course[9]">
            <router-link to="lop-tieng-anh-0-dong">
              <a href="#">
                <div class="featured_image_courses" >
                  <div class="icon">
                    <img :src="imagePath(general[0].logo)" alt="">
                  </div>
                  <img :src="imagePathClass(course[6].picture)" alt="" class="img-fluid">
                </div>
              </a>
            </router-link>
            <div class="col-xs-12 col-md-12 col-lg-12 course_text_content">
              <a href="">{{ course[6].title }}</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="courses" v-if="course[10]">
            <a href="#">
              <div class="featured_image_courses">
                <div class="icon">
                  <img :src="imagePath(general[0].logo)" alt="">
                </div>

                <img :src="imagePathClass(course[10].picture)" alt="" class="img-fluid">
              </div>
            </a>
            <div class="col-xs-12 col-md-12 col-lg-12 course_text_content">
              <a href="">{{ course[10].title }}</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="courses" v-if="course[12]">
            <a href="#">
              <div class="featured_image_courses">
                <div class="icon">
                  <img :src="imagePath(general[0].logo)" alt="">
                </div>
                <img :src="imagePathClass(course[12].picture)" alt="" class="img-fluid">
              </div>
            </a>
            <div class="col-xs-12 col-md-12 col-lg-12 course_text_content">
              <a href="">{{ course[12].title }}</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="courses" v-if="course[13]">
            <a href="#">
              <div class="featured_image_courses">
                <div class="icon">
                  <img :src="imagePath(general[0].logo)" alt="">
                </div>
                <img :src="imagePathClass(course[13].picture)" alt="" class="img-fluid">
              </div>
            </a>
            <div class="col-xs-12 col-md-12 col-lg-12 course_text_content">
              <a href="">{{ course[13].title }}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--Hết Content 2 - Các hoạt động CLB -->
    <!--  Content 7 - UPCOMING EVENT-->
    <div class="container">
      <div class="row ">
        <div class="titleReason text-center event">
          <h2> SỰ KIỆN SẮP DIỄN RA</h2>
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <p>Các sự kiện sẽ diễn ra trong tháng này</p>
        </div>
      </div>
      <div class="row upcomingEvents text-center">
        <div class="col-xs-12 col-lg-12 col md-12">
        <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist" >
            <li class="nav-item" v-for="(item, index, key) in info" :key="item.key">
              <a class="nav-link" :class="{active: index==0 ? true : false}" data-toggle="tab" :href="`#date${index+1}`" role="tab">
                <h3>Tuần
                  <span>0{{index+1}}</span>
                </h3>
                  {{ item.start_time }}
                <span class="arrow"></span>
              </a>
            </li>
          </ul>
           <!-- Tab panes  -->
            <div class="tab-content">
            <div class="tab-pane ":id="`date${index+1}`"  :class="{active: index==0 ? true : false}" role="tabpanel " aria-expanded="true" v-for="(item, index) in info" :key="item.id">
            <div class="row eventContent">
                 <div class="col-xs-12 col-md-2 col-lg-2 ">
                  <div class="time-area">
                    <h4 class="time">{{item.start_hour}}
                    </h4>
                  </div>
                </div>
                <div class="col-xs-12 col-md-3 col-lg-3">
                  <div class="author">
                    <div class="image">
                      <img :src="imagePathEvent(item.avatar)" alt="">
                    </div>
                    <div class="authorInfo">
                      <div class="name">{{item.speaker}}</div>
                      <div class="author-title">{{item.job}}</div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-7 col-lg-7">
                  <div class="scheduleInfo">
                    <h3 class="title">{{item.title}}</h3>
                    <p>{{item.description}}</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-12">
                  <div class="btnMore">
                    <router-link to="sukien">
                      <div class="btn btn-danger">Đọc thêm</div>
                    </router-link>
                  </div>
                </div>
            </div>
            </div> 
          </div> 
        </div>
      </div> -->
      <!--<div class="moreEvent"><div class="btn btn-danger">Tìm hiểu thêm</div></div>-->
    </div>
    <!--  Hết Content 7 - UPCOMING EVENT-->
    <!--Content4 CALL TO ACTION-->
    <div class="container-fluid">
      <div class=" row background-calltoaction"></div>
      <div class="row mt-4 mb-3 callToAction ">
        <div class="col-xs-12 col-md-12 col-lg-12">
          <h2>Bạn có thắc mắc gì về các khóa học?</h2>
          <h5>Để lại thông tin để được hỗ trợ ngay</h5>
          <div class="btn btn-primary" id="call" @click="call">Để lại thông tin</div>
        </div>
      </div>
    </div>
    <!--Het content4 CALL TO ACTION-->
    <!--  Content 5 - HỌC VIÊN NÓI GÌ VỀ CHÚNG TÔI-->
    <div class="container">
      <div class="row ">
        <div class="titleReason text-center">
          <h2>HỌC VIÊN NÓI GÌ VỀ CHÚNG TÔI?</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="abc-slider" class="owl-carousel">
            <div class="testimonial">
              <div class="pic">
                <img src="../assets/images/homepage/testimonial/people7.png" alt="">
              </div>
              <div class="testimonial-content">
                <h3 class="testimonial-title">Việt Anh
                  <small class="post">Web Designer</small>
                </h3>
                <p class="description">
                  Tôi rất thích cách giảng dạy của các giáo viên cũng như cách chắm sóc học viên của Empire. Từ người mất gốc lâu năm và rất tự ti khi nói tiếng Anh tôi đã giao tiếp được và cảm thấy yêu thích học tiếng Anh hơn. Từ đó tôi nhận ra Tiếng Anh vốn không hề khó. Chỉ là chúng ta có thực sự quyết tâm và theo đuổi mục tiêu hay không mà thôi. Empire đã giúp tôi nhận ra điều đó !
                </p>
              </div>
            </div>
            <div class="testimonial">
              <div class="pic">
                <img src="../assets/images/homepage/testimonial/people2.png" alt="">
              </div>
              <div class="testimonial-content">
                <h3 class="testimonial-title">Thanh Hoàng
                  <small class="post">Sinh viên khoa du lịch ĐH KHXH & NV</small>
                </h3>
                <p class="description">
                  Mình từng ân hận vì đã chọn học Du lịch vì cứ nghĩ bản tính mình nhút nhát bẩm sinh. Nhờ có phương pháp đào tạo độc đáo tại Empire mà mình giờ đây đã có thể dẫn Tour cho người nước ngoài, tự tin nói tiếng Anh mà không còn ngại ngùng nữa. Tôi muốn chia sẻ với bạn rằng:Hãy đến trải nghiệm đây để thay đổi ngay bạn nhé !
                </p>
              </div>
            </div>
            <div class="testimonial">
              <div class="pic">
                <img src="../assets/images/homepage/testimonial/people5.png" alt="">
              </div>
              <div class="testimonial-content">
                <h3 class="testimonial-title">Thu Thủy
                  <small class="post">SV năm 4 ĐH Ngoại Thương</small>
                </h3>
                <p class="description">
                  Từ 1 đứa nhút nhát, rụt rè và đặc biệt là ghét cay ghét đăng tiếng Anh, Tôi giờ đây đã là chủ nhiệm 1 câu lạc bộ tiếng Anh trong trường. Tôi thường xuyên tự tin chia sẻ tại các buổi nói chuyện trước 20-30 bạn. Tôi không chỉ nói giỏi về tiếng Anh mà khẳ năng diễn thuyết trước đám đông của tôi cũng chuyên nghiệp hơn rất nhiều

                </p>
              </div>
            </div>
            <div class="testimonial">
              <div class="pic">
                <img src="../assets/images/homepage/testimonial/people6.png" alt="">
              </div>
              <div class="testimonial-content">
                <h3 class="testimonial-title">Đình Tùng
                  <small class="post">SV năm 2 ĐH Ngoại thương</small>
                </h3>
                <p class="description">
                  “ Cảm ơn câu lạc bộ !!! Clb Ngoại ngữ vì cộng đồng là một lựa chọn đúng đắn của em giữa rất nhiều trung tâm và câu lạc bộ . Giảng viên,coach và care đều rất nhiệt tình chỉ dẫn cho em . Lớp học rất hài hước và vui nhộn . Sau khoá phát âm em đã tự tin về phát âm của mình hơn trước rất nhiều Cảm ơn Clb nhiều lắm !!! ”
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <!--  Hết ontent 5 - HỌC VIÊN NÓI GÌ VỀ CHÚNG TÔI-->
    <!--  Content 6 - Báo chí nói gì về chúng tôi-->
    <div class="container">
      <div class="row ">
        <div class="titleReason text-center">
          <h2>BÁO CHÍ NÓI GÌ VỀ CHÚNG TÔI?</h2>
        </div>
      </div>
      <div class="row newspaperVideo">
        <div class="col-xs-12 col-md-12 col-lg-6">
          <iframe src="https://www.youtube.com/embed/jfG1CN-PMfc" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="col-xs-12 col-md-12 col-lg-6">
          <div class="row" v-if="newspaper[0]">
            <div class="col-xs-12 col-md-6 col-lg-6">
              <div class="newspaperImg text-center" >
                <img :src="imagePath(newspaper[0].cover_link)" class="img-fluid" alt="">
              </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-6">
              <div class="newspaperContent">
                <a href="">
                  <h4>{{newspaper[0].title}}</h4>
                </a>
                <p>{{ newspaper[0].description}}</p>
              </div>
            </div>
          </div>
          <div class="row" v-if="newspaper[1]">
            <div class="col-xs-12 col-md-6 col-lg-6">
              <div class="newspaperImg text-center" >
                <img :src="imagePath(newspaper[1].cover_link)" class="img-fluid" alt="">
              </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-6">
              <div class="newspaperContent">
                <a href="">
                  <h4>{{newspaper[1].title}}</h4>
                </a>
                <p>{{ newspaper[1].description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  Hết Content 6 - Báo chí nói gì về chúng tôi-->
    <!--  Content 7 - FORM ĐĂNG KÝ-->
    <registerform></registerform>
    <!--  Hết Content 7 - FORM ĐĂNG KÝ-->
    <!--  Content 8 - THANH SCROLL-->
    <app-iconscroll></app-iconscroll>
  </div>
  <!--Đóng Khung template Vue/ don't remove-->
</template>
<script>
import registerform from '../components/registerform.vue'
import iconscroll from '../components/iconscroll.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'homepage',
  data () {
    return {
      general: [],
      info: [],
      course: [],
      newspaper: []
    }
  },
  components: {
    registerform,
    'app-iconscroll': iconscroll
  },
  created () {
    // retrieve data from server
    axios.get(`http://localhost:3000`)
    .then(res => {
      res.data.event.map(item => {
        item.start_time = moment(item.starttime).format('DD/MM/YYYY')
        item.start_hour = moment(item.starttime).format('LTS')
      })
      this.info = res.data.event
      this.general = res.data.general
      this.course = res.data.course
      this.newspaper = res.data.newspaper
      // console.log(this.course)
    })
      .catch(error => {
        console.error(error)
      })
  },
  mounted () {
    window.$('#abc-slider').owlCarousel({
      items: 2,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [767, 1],
      pagination: true,
      autoPlay: true
    })
  },
  methods: {
    call: function () {
      window.$('html, body').animate({
        scrollTop: window.$('#register_hocthumienphi').offset().top - 250
      }, 1000)
    },
    imagePath: function (img) {
      return require('../assets/images/homepage/' + img)
    },
    imagePathClass: function (img) {
      return require('../assets/images/homepage/class/' + img)
    },
    imagePathEvent: function (img) {
      return require('../assets/images/homepage/events/' + img)
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
  transition: right 0.3s ease-in-out;
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
  transition: 0.3s;
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




/******
	CSS CHO PHAN SLIDER
	******/

#carouselExampleControls>div>.slideFrames {
  align-items: center;
  margin-top: 110px;
}

.titleReason {
  margin-top: 30px;
  width: 100%;
}

.titleReason .fa-calendar {
  margin-top: 10px;
}

.titleReason p {
  font-size: 17px;
}

.titleReason h2 {
  font-weight: bold;
  font-size: 30px;
  color: #FF6500;
}

.titleReason h2::after {
  display: block;
  margin: 0 auto;
  margin-top: 17px;
  width: 170px;
  height: 2px;
  background: #576DFF;
  content: "";
}

.titleReason h5 {
  padding: 7px 25px;
  line-height: 26px;
}



/******
	CSS CHO PHAN WHY CHOOSE US
	******/

.specialBox {
  background: rgba(128, 128, 128, 0.11);
  transition: 0.3s
}

.specialBox:hover .specialImage img {
  filter: grayscale(0)
}

.specialImage {

  padding: 2px;
  overflow: hidden;
  transition: 0.3s
}

.specialImage img {
  transition: 0.3s;
  filter: grayscale(100%);
}

.specialIcon {
  text-align: center;
  margin: 10px;
  font-size: 40px;
  color: #556AF8;
  filter: grayscale(100%);
}

.specialBox:hover .specialIcon {
  filter: grayscale(0);
}

.specialBox:hover {
  background: #FF6500;
}

.specialContent h4 {
  text-align: center;
  color: #FF6500;
  filter: grayscale(100%);
  font-weight: bold
}

.specialBox:hover .specialContent h4 {
  color: white;
  filter: grayscale(0);
}

.specialContent p {
  text-align: justify;
  padding: 15px;
}


/******
	CSS CHO PHAN CONTENT2 CÁC HOẠT ĐỘNG CỦA EMPIRE
	******/

.title-courses {
  margin-top: 20px;
}

.title-courses .btn {
  display: block;
  text-align: center;
  cursor: pointer
}

.courses {
  margin-top: 20px;
}

.featured_image_courses {
  position: relative;
  overflow: hidden;
  transition: 0.6s
}

.featured_image_courses img {
  transition: 0.6s
}

.featured_image_courses .icon {
  position: absolute;
  top: 0;
  right: 20px;
  width: 60px;
  height: 30px;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.featured_image_courses .icon img {
  width: 60px;
  height: 30px;
  background: white;
}

.course_text_content {
  padding: 10px;
  text-align: center;
  background: #FF6500;
}

.course_text_content a {
  font-size: 22px;
  text-decoration: none;
  color: white;
}

.courses:hover .featured_image_courses img {
  transform: scale(1.1)
}


/******
	CSS CHO PHAN CONTENT4 lY DO CHON EMPiRE
	******/

.callToAction {
  background-image: url("../assets/images/homepage/calltoaction.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 40px 0;
  text-align: center;
  display: flex;
  align-items: center;
}

.callToAction h2 {
  color: white;
  padding: 20px;
}

.callToAction h5 {
  color: white;
  padding: 10px;
}

.callToAction .btn {
  background: #FF6500;
  color: white;
  font-size: 17px;
  padding: 15px 25px;
  font-weight: bold;
  cursor: pointer;
  border: 3px solid white;
}

.callToAction .btn:hover {
  color: #FF6500;
  background: white;
  border: 3px solid #FF6500;
}

.background-calltoaction {
  height: 100%;
  position: absolute;
  width: 100%;
  padding: 80px 0;
  background: rgba(0, 5, 8, 0.66);
}



/******
	CSS CHO PHAN CONTENT5 CONTACT FORM
	******/

.contactForm {
  background-image: url("../assets/images/homepage/background-contactform.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover
}

.btnfooter {
  text-align: center;
  margin-left: 0;
  margin-right: 0;
}

.btnfooter .square {
  background: #FF6500;
  border: none;
  color: white;
  padding: 15px 40px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 25px;
  border: 1px solid #FF6500;
}

.btnfooter .square:hover {
  color: white;
  border: 1px solid #576DFF;
  background: #576DFF;
  outline: none
}

.form-control {
  margin: 15px;
  border: 1px solid #e62239;
  border-radius: 10px;
  font-size: 16px;
}

.formlist {
  margin-left: 0;
  margin-right: 0;
}




/******
	CSS CHO PHAN CONTENT5 TESTIMONIAL
	******/

.testimonial {
  padding: 20px;
  margin: 20px 10px;
}

.testimonial .pic {
  width: 122px;
  height: 122px;
  float: left;
  margin-right: 50px;
  position: relative;
}

.testimonial .pic:before {
  content: "";
  display: block;
  height: 50%;
  width: 50%;
  position: absolute;
}

.testimonial .pic:after {
  content: "";
  display: block;
  height: 50%;
  width: 50%;
  position: absolute;
}

.testimonial .pic:before {
  bottom: -10%;
  left: -10%;
  border-bottom: 3px solid #E16B47;
  border-left: 3px solid #E16B47;
}

.testimonial .pic:after {
  top: -10%;
  right: -10%;
  border-top: 3px solid #e16b47;
  border-right: 3px solid #e16b47;
}

.testimonial .pic img {
  width: 100%;
  height: auto;
}

.testimonial .testimonial-content {
  display: table;
  position: relative;
}

.testimonial .testimonial-content:before {
  content: "\f10d";
  font-family: fontawesome;
  position: absolute;
  top: -30px;
  left: -15px;
  font-size: 60px;
  color: #d8dad6;
  z-index: -1;
}

.testimonial .testimonial-title {
  font-size: 24px;
  color: #e16b47;
  text-transform: capitalize;
}

.testimonial .post {
  font-size: 13px;
  font-weight: 600;
  color: #585f62;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 5px;
  padding-left: 5px;
}

.testimonial .description {
  font-size: 15px;
  color: #7c7c7c;
  line-height: 22px;
  margin-top: 12px;
  font-style: italic;
}

.owl-theme .owl-controls .owl-page.active span {
  background-color: #e16b47;
}

.owl-theme .owl-controls.clickable .owl-page:hover span {
  background-color: #e16b47;
}




/******
	CSS CHO PHAN CONTENT6 UPCOMING EVENT
	******/

.event i {
  font-size: 120px;
  color: #dc4e41;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -60px;
  opacity: 0.2;
  z-index: -10
}


/*.eventContent:hover {
  background: #FF6500
}*/

.eventContent:hover img {
  transform: scale(1.1);
  transition: 0.7s
}

.eventContent {
  border: 1px solid gray;
  background: #6fc191;
  padding: 10px 0;
  margin-bottom: 20px;
  margin-top: 20px;
}

.eventContent .time-area {
  padding-top: 10px;
  padding-right: 5px;
}

.time-area h4 {
  text-align: right;
  font-size: 2.2rem;
  line-height: 2.5rem;
  display: inline-block;
  font-weight: bold;
  color:#FF6500;
}

.time-area span {
  color: white;
  font-size: 25px;
}

.upcomingEvents {
  width: 100%;
  margin-left: 0;
  margin-right: 0
}

.upcomingEvents>ul>li {
  margin: 0 auto;
  padding: 3px;
  border: 5px solid #FF6500;
  box-sizing: border-box;
  box-shadow: 0 0 1px rgba(0, 0, 0, .25)
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link{
  border: 5px solid #6fc191;
  position: relative;
  z-index: 1
}

.nav-tabs .nav-link.active span.arrow {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  bottom: -21px;
  border-top: 20px solid #6fc191;
  position: absolute
}

.upcomingEvents .nav-tabs {
  display: flex;
  justify-content: center
}

.upcomingEvents ul>li>h3 {
  font-weight: bold
}

.upcomingEvents ul li h3 span {
  color: #dc4e41
}

.upcomingEvents ul li p span {
  color: #dc4e41
}

.upcomingEvents .nav-tabs {
  border: none;
}

.author img {
  max-width: 100px;
  border-radius: 50%;
  transition: 0.7s
}

.author img {
  float: left;
  width: 50%;
}

.authorInfo {
  width: 50%;
  float: right
}

.scheduleInfo {
  text-align: left
}

.authorInfo .name {
  font-weight: bold
}

.moreEvent {
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer
}

.btnMore {
  width: 100%;
  text-align: center
}

.btnMore .btn {
  background: #FF6500;
  border: 2px solid #FF6500;
}

.btnMore .btn:hover {
  background: white;
  color: #FF6500;
}


/******
	CSS CHO PHAN CONTENT6 BÁO CHÍ NÓI GÌ VỀ CHÚNG TÔI
	******/

.newspaperVideo iframe {
  width: 100%;
}

.newspaperContent a:hover {
  text-decoration: none;
  color: #FF6500
}


/******
	CSS CHO PHAN CONTENT7 VALIDATE FORM
******/

.error {
  font-size: 14px;
  color: red;
  padding-left: 20px;
}

@media screen and (max-width: 575px) {
  header {
    display: none;
  }
  .mainMenu {
    margin-top: 0
  }
  #carouselExampleControls>div>.slideFrames {
    margin-top: 15px
  }
  .specialImage {
    text-align: center
  }
  .specialImage img {
    filter: grayscale(0);
    max-width: 80%;
    margin-top: 5px;
  }
  .specialIcon {
    filter: grayscale(0);
  }
  .specialContent h4 {

    filter: grayscale(0);
  }
  .titleReason1 h2 {
    font-size: 1.6rem;
  }
  .titleReason1 h5 {
    text-align: justify;
    padding: 0 8px;
  }
  .titleReason {
    width: 100%;
  }
  .titleReason h2 {
    font-size: 1.5rem;
    line-height: 1.8rem
  }
  .human-duty {
    min-height: auto;
  }
  .form-control {
    margin: 15px auto;
  }
  .callToAction h3 {
    font-size: 1.6rem;
    line-height: 2rem
  }
  .box_scroll img {
    display: none!important;
  }

  .mainslider {
    margin-top: 55px;
  }
  .carousel-control-prev,
  .carousel-control-next-icon {
    margin-top: 15px;
  }
  .upcomingEvents .nav-tabs .nav-link {
    padding: 0.5rem
  }
  .nav-tabs .nav-link.active span.arrow {
    left: 15px;
  }
  .newspaperVideo iframe {
    min-height: 200px
  }
}

@media screen and (min-width:576px) and (max-width: 767px) {
  header {
    display: none;
  }
  .mainMenu {
    margin-top: 0
  }
  .specialImage img {
    filter: grayscale(0);
    margin-top: 5px;
  }
  .specialIcon {
    filter: grayscale(0);
  }
  .specialContent h4 {

    filter: grayscale(0);
  }
  .box_scroll img {
    display: none!important;
  }
  .logo img {
    left: 50%;
    position: relative;
    margin-left: -36px;
  }
  .newspaperVideo iframe {
    min-height: 200px
  }
  .specialBox {
    min-height: 552px;
  }
}



/*STYLE CSS RIENG BIET CHO OWL CAROSEL*/

@media only screen and (max-width: 980px) {

  .testimonial {
    padding: 20px 0;
    margin: 20px 15px;
  }
  .testimonial .pic {
    float: none;
  }
  .testimonial .testimonial-content {
    display: block;
    margin-top: 30px;
  }
  .testimonial .testimonial-content:before {
    z-index: 1;
    top: -200px;
  }
}

@media only screen and (min-width:768px) and (max-width: 991px) {
  .specialBox {
    min-height: 553px;
  }
  .specialImage img {
    filter: grayscale(0);
    margin-top: 5px;
  }
  .specialIcon {
    filter: grayscale(0);
  }
  .specialContent h4 {

    filter: grayscale(0);
  }
  .mainslider {
    margin-top: 55px;
  }
  .carousel-control-prev,
  .carousel-control-next-icon {
    margin-top: 55px;
  }
  .course_text_content a {
    font-size: 1rem
  }
  .newspaperVideo iframe {
    min-height: 400px
  }
}


@media only screen and (min-width:992px) and (max-width: 1199px) {
  .newspaperVideo iframe {
    min-height: 300px
  }
  .specialBox {
    min-height: 480px;
  }
}

@media only screen and (min-width:1200px) {
  .specialBox {
    min-height: 502px;
  }
  .newspaperVideo iframe {
    min-height: 300px
  }
}
</style>
