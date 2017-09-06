<template>
  <div class="loptienganh">
  
    <!--Phan 1 - Ve Chung toi -->
    <div class="banner">
      <img src="../assets/images/khoahoc/loptienganh1.jpg" class="img-fluid" alt="">
      <h2>LỚP HỌC TIẾNG ANH GIAO TIẾP 0 ĐỒNG</h2>
      <div class="btn btn-primary registerBtn " @click="register">Đăng ký học</div>
    </div>
    <!-- Hết Phan 1 - Ve Chung toi -->
    <!--<breadcrumb></breadcrumb>-->
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-md-6 col-lg-6">
          <div class="descript">
            <p>"Hello!
              <br>I'm Ms.Hằng. Sau 8 năm giảng dạy tiếng anh tại rất nhiều nơi, tôi nhận ra 1 điều rằng: các bạn học sinh, sinh viên đang phải chi trả 1 khoản tiền lớn hơn rất nhiều so với những giá trị thực mà các bạn nhận được. Có 1 thực tế các bạn phải hiểu là:
              <b>TIẾNG ANH LÀ 1 KĨ NĂNG, KHÔNG PHẢI MÔN KHOA HỌC. VẬY NÊN, ĐỪNG NGHIÊN CỨU, HÃY SỬ DỤNG NÓ. </b>Lớp học chỉ là nơi bạn học phương pháp. Điều bạn thực sự cần là gì? ĐIỀU BẠN CẦN LÀ MỘT CỘNG ĐỒNG TƯƠNG TÁC, MỘT MÔI TRƯỜNG CỞI MỞ ĐỂ BẠN CÓ THỂ THỰC HÀNH THOẢI MÁI. Có như vậy bạn mới nhanh chóng làm chủ được thứ ngôn ngữ này.
              <br> Dự án
              <span style="color:green; font-weight:bold">“LỚP HỌC 0 ĐỒNG” </span>ra đời với mong muốn cung cấp cho các bạn môi trường như vậy, giúp các bạn làm chủ tiếng Anh với
              <span style="color:red; font-weight:bold"> CHI PHÍ RẺ NHẤT CÓ THỂ.</span> Chúng tôi có một niềm tin chắc chắn rằng ''DỰ ÁN SẼ LÀM THAY ĐỔI HOÀN TOÀN CÁCH HỌC TIẾNG ANH CỦA NGƯỜI VIỆT.''
              <br>
              <br> Tham gia ngay để cùng chia sẻ niềm tin ấy với chúng tôi! </p>
          </div>
        </div>
        <div class="col-xs-6 col-md-6 col-lg-6">
          <div class="descriptImg">
            <img src="../assets/images/khoahoc/founder.png" class="img-fluid" alt="Ms Hang">
            <h4>Mrs Hang</h4>
          </div>
        </div>
      </div>
      <div class="callToAction1">
        <div class="btn btn-primary regist" @click="register">Đăng ký ngay</div>
      </div>
    </div>
    <!--Phan 2 - Gioithieu CLB -->
    <div class="descriptClub">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xs-4 col-md-4 col-lg-4 Club">
            <div class="imgIcon">
              <img src="../assets/images/khoahoc/light-bulb.png" alt="">
            </div>
            <div class="h3">Giới thiệu</div>
            <p>Được thành lập vào tháng 9/2015 bởi các thầy cô ĐH Hà Nội, đến nay Community Language Club đã tổ chức được trên 50 lớp học tiếng Anh, 20 lớp học tiếng Nhật, tiếng Trung 0 đồng và đào tạo trên 1000 học viên từ trình độ mất gốc đến giao tiếp thành thạo</p>
          </div>
          <div class="col-xs-4 col-md-4 col-lg-4 Club">
            <div class="imgIcon">
              <img src="../assets/images/khoahoc/calendar.png" alt="">
            </div>
            <div class="h3">Hoạt động chính</div>
            <p>- Tổ chức các lớp ngoại ngữ chất lượng cao với chi phí cộng đồng ( Anh, Nhật , Hàn, Trung …)
              <br>- Tổ chức các buổi ngoại khóa, event chia sẻ kiến thức về học ngoại ngữ
              <br> - Tổ chức các lớp học chuyên sâu về kỹ năng với chi phí Cộng đồng
              <br>- Kết nối các cộng đồng học ngoại ngữ, chia sẻ tri thức
              <br> - Kết nối với doanh nghiệp, tổ chức các hoạt động trải nghiệm nghề nghiệp và giới thiệu việc làm cho thành viên</p>
  
          </div>
          <div class="col-xs-4 col-md-4 col-lg-4 Club">
            <div class="imgIcon">
              <img src="../assets/images/khoahoc/rocket.png" alt="">
            </div>
            <div class="h3">Sứ mệnh</div>
            <p>Sứ mệnh của Community Language Club là mang đến các lớp học ngoại ngữ chất lượng cao với chi phí thấp, góp phần trang bị hành trang vững chắc cho các bạn sinh viên bước chân vào thời kỳ hội nhập.</p>
          </div>
        </div>
        <div class="row">
          <div class="callToAction2">
            <div class="btn btn-primary regist" @click="register">Đăng ký ngay</div>
          </div>
        </div>
      </div>
  
    </div>
    <!--Hết Phan 2 - Gioithieu CLB -->
    <!--Phan 3 - Quyen loi hoc vien -diem khac biet -->
    <div class="benefit">
      <div class="container">
        <div class="row">
          <div class="titleBenefit">
            <h2>Những điều
              <span style="color:#FF6500; font-weight:bold">Đặc Biệt </span>
            </h2>
            <h2>chỉ có tại
              <span style="color:#576DFF; font-weight:bold">Community English Club</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row contentBenefit">
          <div class="col-xs-12 col-md-6 col-lg-6">
            <div class="row">
              <div class="col-xs-2 col-md-2 col-lg-2">
                <div class="benefitImg">
                  <img src="../assets/images/khoahoc/benefit1.png" alt="">
                </div>
              </div>
              <div class="col-xs-10 col-md-10 col-lg-10">
                <div class="benefit1Content">
                  <h4>Mô hình lớp học CHOC</h4>
                  <p>Mô hình kết hợp hoàn hảo giữa Online và Offline, giúp bạn tiết kiệm được 55% thời gian, tăng 100% hiệu quả học tập. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6">
            <div class="row">
              <div class="col-xs-2 col-md-2 col-lg-2">
                <div class="benefitImg">
                  <img src="../assets/images/khoahoc/benefit2.png" alt="">
                </div>
              </div>
              <div class="col-xs-10 col-md-10 col-lg-10">
                <div class="benefit1Content">
                  <h4>COACH </h4>
                  <p>Đội ngũ Coach luôn theo dõi và đốc thúc học viên đạt mục tiêu theo Action Plan chi tiết đến từng buổi học </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row contentBenefit">
          <div class="col-xs-12 col-md-6 col-lg-6">
            <div class="row">
              <div class="col-xs-2 col-md-2 col-lg-2">
                <div class="benefitImg">
                  <img src="../assets/images/khoahoc/benefit3.png" alt="">
                </div>
              </div>
              <div class="col-xs-10 col-md-10 col-lg-10">
                <div class="benefit1Content">
                  <h4>GIẢNG VIÊN </h4>
                  <p>Đội ngũ giảng viên bản xứ giúp bạn thực hành và gạt bỏ những rào cản về giao tiếp </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6">
            <div class="row">
              <div class="col-xs-2 col-md-2 col-lg-2">
                <div class="benefitImg">
                  <img src="../assets/images/khoahoc/benefit4.png" alt="">
                </div>
              </div>
              <div class="col-xs-10 col-md-10 col-lg-10">
                <div class="benefit1Content">
                  <h4>PHƯƠNG PHÁP HỌC V.A.K</h4>
                  <p>Phương pháp học V.A.K (Hình ảnh - Âm thanh - Vận động trò chơi) giúp học viên nhớ bài ngay tại lớp học.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="callToAction3">
        <div class="btn btn-primary regist" @click="register">Đăng ký học ngay</div>
      </div>
    </div>
    <!--hết Phan 3 - Quyen loi hoc vien -diem khac biet -->
    <!-- Phan 4 - Cam ket cua chung toi -->
    <div class="container">
      <div class="row">
        <div class="titleCommit">
          <h2>CHÚNG TÔI CAM KẾT</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-3 col-lg-3 ">
          <div class="imgCommit">
            <img src="../assets/images/khoahoc/camket.png" alt="">
          </div>
          <div class="contentCommit">
            <p>
              <span style="color:#FF6500; font-weight:bold">GIẢI QUYẾT DỨT ĐIỂM</span> vấn đề MẤT GỐC với lộ trình đã được kiểm chứng qua hàng ngàn học viên đã tốt nghiệp và thành công</p>
          </div>
  
        </div>
        <div class="col-xs-12 col-md-3 col-lg-3 ">
          <div class="imgCommit">
            <img src="../assets/images/khoahoc/camket2.png" alt="">
          </div>
          <div class="contentCommit">
            
            <p style="margin-top: 15px">Giúp bạn đạt Trình độ Speaking tương đương mức <span style="color:#FF6500; font-weight:bold">IELTS 5.0 </span>(Lộ trình 6 tháng )</p>
          </div>
  
        </div>
        <div class="col-xs-12 col-md-3 col-lg-3 ">
          <div class="imgCommit">
            <img src="../assets/images/khoahoc/camket3.png" alt="">
          </div>
          <div class="contentCommit">
            <p>Học viên được học lại <span style="color:#FF6500; font-weight:bold">MIỄN PHÍ </span>nếu làm theo đúng lộ trình mà không giao tiếp được</p>
          </div>
  
        </div>
        <div class="col-xs-12 col-md-3 col-lg-3 ">
          <div class="imgCommit">
            <img src="../assets/images/khoahoc/camket4.png" alt="">
          </div>
          <div class="contentCommit">
            <p> Sử dụng hiệu quả khoảng <span style="color:#FF6500; font-weight:bold">1500 từ và cụm từ thông dụng</span> trong tiếng Anh. Có khả năng giao tiếp thành thạo, thuyết trình bằng tiếng Anh về 12 chủ đề thông dụng</p>
          </div>
  
        </div>
      </div>
      <div class="callToAction4">
        <div class="btn btn-primary regist" @click="register">Đăng ký ngay</div>
      </div>
    </div>
    <!-- hết Phan 4 - Cam ket cua chung toi -->
    <!-- Phan 5 - Hình ảnh Clb + Testimonial-->
    <div class="galleryClub">
      <div class="overlay"></div>
      <div class="container gallery">
        <div class="row">
          <div class="titleGallery">
            <h2>HÌNH ẢNH LỚP HỌC</h2>
          </div>
          <div class="galleryImg">
            <img src="../assets/images/khoahoc/classes1.jpg" class="img-fluid" alt="">
            <img src="../assets/images/khoahoc/classes2.jpg" class="img-fluid" alt="">
          </div>
        </div>
        <div class="testimonial">
          <div class="row">
            <div class="col-xs-12 col-md-3 col-lg-3">
              <img src="../assets/images/khoahoc/testimonial1.png" class="img-fluid" alt="">
              <h4>Vũ Hoàng</h4>
              <p>Sinh viên năm 4 ĐH Bách Khoa HN</p>
            </div>
            <div class="col-xs-12 col-md-9 col-lg-9">
              <blockquote class="blockquote">
                <p class="mb-0">" Từ một đứa nhút nhát, rụt rè và đặc biệt là ghét cay ghét đắng tiếng Anh, tôi giờ đây đã là chủ nhiệm 1 câu lạc bộ tiếng Anh trong trường. Tôi thường xuyên tự tin chia sẻ tại các buổi nói chuyện trước 20-30 bạn. Tôi không chỉ nói tiếng Anh giỏi mà khả năng diễn thuyết trước đám đông của tôi cũng chuyên nghiệp hơn rất nhiều. Đó đều là những điều mình rất khó làm được nếu không biết đến phương pháp học tiếng Anh kèm với các kỹ năng giao giao tiếp tại CLB Ngoại ngữ vì Cộng đồng. Cảm ơn CLB nhiều lắm :) vì đã biến giấc mơ của mình thành sự thật!"</p>
              </blockquote>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12  col-md-9  col-lg-9">
  
              <blockquote class="blockquote blockquote-reverse">
                <p class="mb-0">" Mình năm nay học năm 4 chuyên ngành du lịch, trước đây mình đã từng mất rất nhiều thời gian cũng như tiền bạc để luyện nói tiếng Anh nhưng đều thất bại bới tính nhút nhát và hay ngại của mình. Mình đã từng ân hận vì đã chọn học Du lịch vì cứ nghĩ bản thân mình nhút nhát bẩm sinh. Nhờ có phương pháp đào tạo độc đáo tại CLB Ngoại ngữ vì Cộng đồng mà mình giờ đây đã có thể dẫn Tour cho người nước ngoài, tự tin nói tiếng Anh mà không còn ngại ngùng nữa. Mình muốn chia sẻ với bạn rằng: Nhút nhát là do thiếu kỹ năng chứ không phải bẩm sinh, hãy đến và trải nghiệm tại CLB Ngoại ngữ vì cộng đồng để thay đổi bản thân bạn nhé! "</p>
              </blockquote>
            </div>
            <div class="col-xs-12  col-md-3  col-lg-3">
              <img src="../assets/images/khoahoc/testimonial2.png" class="img-fluid" alt="">
              <h4>Mai Trang</h4>
              <p>Hướng dẫn viên du lịch</p>
            </div>
  
          </div>
        </div>
      </div>
  
    </div>
    <!-- Phan 5 - Hình ảnh Clb + Testimonial-->
    <!-- Phan6 - Form đăng ky-->
    <div class="container formDK " id="register_hocthumienphi">
      <div class="row">
        <div class="titleFormDK">
          <h3>HÃY VỨT BỎ SÁCH VỞ SANG 1 BÊN, HỌC TIẾNG ANH VÀ THỰC HÀNH NÓ</h3>
          <p>HOẶC BẠN SẼ KHÔNG BAO GIỜ NÓI ĐƯỢC TIẾNG ANH </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-lg-6 col-md-6 callToAction5">
          <h3>ĐĂNG KÝ NGAY HÔM NAY</h3>
          <P style="text-align:center">bạn sẽ được ...</P>
          <p>
            <i class="fa fa-gift" aria-hidden="true"></i> Tặng ngay vé sinh hoạt CLB trị giá 600.000 đ</p>
          <p>
            <i class="fa fa-gift" aria-hidden="true"></i> Tặng ngay 1 khóa NGỮ ÂM trị giá 680,000 đ</p>
          <p>
            <i class="fa fa-gift" aria-hidden="true"></i> Tặng ngay bộ Ebook của các tác giả nổi tiếng thế giới trị giá 199 $</p>
          <p>
            <i class="fa fa-gift" aria-hidden="true"></i> Giảm thêm 10 % khi đăng ký các lớp ngoại ngữ khác</p>
          <p>Phụ phí khóa cơ bản chỉ 20K/h (bao gồm chi phí cơ sở vật chất, tài liệu)</p>
        </div>
      
        <div class="col-xs-12 col-lg-6 col-md-6 formInput">
            <form method="post" action="https://docs.google.com/forms/d/e/1FAIpQLScGi_O6uAb2NnOyyHg2csMs-eO107DVVJbAC3H5EBaUraXrxQ/formResponse">
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <input type="text" name="entry.227993533" placeholder="Họ và tên">
            </div>
            <div class="col-xs-12 col-md-12 col-lg-12">
              <input type="text" name="entry.83647550" placeholder="Số điện thoại">
            </div>
            <div class="col-xs-12 col-md-12 col-lg-12">
              <input type="text" name="entry.2041374287" placeholder="Email">
            </div>
            <div class="col-xs-12 col-md-12 col-lg-12">
              <input type="text" name="entry.1407571424" placeholder="Ngày sinh">
            </div>
          </div>
          <input class="btnSubmit" type="submit" name="Đăng ký" value="Đăng ký" id="submit">
           </form>
        </div>
       
      </div>
    </div>
    <!-- Hết Phan6 - Form đăng ky-->
    <!-- Phan7 - Thanh Scroll-->
    <app-iconscroll></app-iconscroll>
  
  </div>
  <!--Đóng thẻ Vue js-->
</template>
<script>
import iconscroll from '../components/iconscroll.vue'
export default {
  name: 'loptienganh',
  components: {
    'app-iconscroll': iconscroll
  },
  methods: {
    register: function () {
      window.$('html, body').animate({
        scrollTop: window.$('#register_hocthumienphi').offset().top - 150
      }, 1000)
    }
  },
  created () {
    document.title = 'Lớp tiếng Anh 0 Đồng'
  }
}
</script>

<style scoped>
.banner {
  position: relative;
}

.banner h2 {
  width: 600px;
  height: 50px;
  padding: 10px;
  font-weight: bold;
  background: white;
  color: #FF6500;
  display: block;
  position: absolute;
  bottom: 150px;
  left: 50%;
  margin-left: -300px;
}

.banner .registerBtn {
  position: absolute;
  bottom: 80px;
  width: 180px;
  height: 40px;
  left: 50%;
  margin-left: -90px;
  cursor: pointer;
  font-size: 18px;
  background: #FF6500;
  border: 1px solid #FF6500;
}

.banner .registerBtn:hover {
  background: #5F74FE;
  border: 1px solid #5F74FE;
  font-size: 18px;
}


/*
  CSS cho  phan Content 1 Ve chung toi
*/

.descript {
  margin-top: 30px;
  text-align: justify;
  font-size: 17px;
}


/*.descript p {
  font-size: 1.2rem
}*/

.descriptImg {
  margin-top: 30px;
  margin-left: 20px;
  text-align: center
}

.descriptImg h4 {
  padding-left: 80px
}

.callToAction1 {
  text-align: center;
}

.callToAction1 .btn {
  background: #FF6500;
  margin-bottom: 30px;
  border: 2px solid #FF6500
}

.callToAction1 .btn:hover {
  background: #576DFF;
  border: 2px solid #576DFF;
  cursor: pointer
}




/*
  CSS cho  phan Content 2 Gioi thieu Clb
*/

.imgIcon img {
  margin-bottom: 10px;
}

.descriptClub {
  background-image: url("../assets/images/khoahoc/overlay.jpg");
  background-attachment: fixed;
  position: relative
}

.Club p {
  text-align: left;
  line-height: 26px;
}

.overlay {
  background: rgba(0, 0, 0, 0.67);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100
}

.descriptClub .Club {
  margin-top: 30px;
  text-align: center;
  z-index: 1000;
  color: white;
}

.callToAction2 {
  margin-bottom: 20px;
  z-index: 1000;
  text-align: center;
  width: 100%;
}

.callToAction2 .btn {
  background: #FF6500;
  border: 2px solid #FF6500;
  border-radius: 20px
}

.callToAction2 .btn:hover {
  cursor: pointer;
  background: #5F74FE;
  border: 2px solid #5F74FE;
  color: white;
}



/*
  CSS cho  phan Content 3 Quyền lợi học viên
*/

.benefit {
  background-image: url("../assets/images/khoahoc/overlay2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20px;
}

.titleBenefit {
  margin-top: 30px;
  width: 100%;
  display: block;
  text-align: center;
  font-weight: bold
}

.contentBenefit {
  margin-top: 30px
}

.callToAction3 {
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
}

.callToAction3 .btn {
  background: #FF6500;
  border: 2px solid #FF6500;
}

.callToAction3 .btn:hover {
  background: #576DFF;
  border: 2px solid #576DFF;
  color: white;
}



/*
  CSS cho  phan Content 4 Cam kết của chúng tôi
*/

.titleCommit {
  border: 5px solid #FF6500;
  position: relative;
  width: 850px;
  height: 50px;
  margin: 30px auto;
  border-bottom: none;
}

.titleCommit h2 {
  color: #FF6500;
  margin: auto;
  width: 400px;
  position: absolute;
  top: -20px;
  background: white;
  left: 50%;
  margin-left: -200px;
  text-align: center;
  font-weight: bold
}

.imgCommit {
  text-align: center
}

.contentCommit {
  text-align: justify
}

.callToAction4 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
  cursor: pointer
}

.callToAction4 .btn {
  background: #FF6500;
  border: 2px solid #FF6500;
}

.callToAction4 .btn:hover {
  background: #576DFF;
  border: 2px solid #576DFF;
  color: white;
}

.galleryClub {
  background-image: url("../assets/images/khoahoc/overlay3.jpg");
  position: relative
}

.titleGallery {
  display: block;
  width: 100%;
  text-align: center;
  margin: 20px auto;
}

.titleGallery h2 {
  color: white;
  font-weight: bold;
}

.gallery {
  z-index: 1000
}

.galleryImg {
  margin: 20px auto;
}

.galleryImg img {
  padding: 0 20px
}

.overlay {
  background: rgba(0, 0, 0, 0.81);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100
}

.blockquote {
  color: white;
  margin-bottom: 30px
}

.testimonial {
  text-align: center
}

.testimonial h4 {
  color: white
}

.testimonial p {
  color: white;
}

.titleFormDK {
  text-align: center;
  width: 100%;
}

.formDK {
  border: 5px solid #FF6500
}

.formDK {
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.titleFormDK h3 {
  font-weight: bold;
  color: #576DFF
}

.titleFormDK p {
  font-size: 17px;
  text-transform: uppercase;
  color: #576DFF;
  font-weight: bold
}

.formInput {
  margin-top: 40px;
  text-align: center
}

.formInput input {
  margin: 10px auto;
  width: 300px;
  height: 40px;
  padding-left: 10px;
}

.formInput .btn {
  background: #FF6500;
  border: 2px solid #FF6500;
  cursor: pointer;
  margin-top: 20px;
}
.btnSubmit{
    background: #FF6500;
  border: 2px solid #FF6500;
  cursor: pointer;
  margin-top: 20px;
  color: white;
}
.btnSubmit:hover {
  background: #576DFF;
  border: 2px solid #576DFF;
  color: WHITE;
}

.callToAction5 .fa {
  color: #FF6500;
  font-size: 40px;
  margin-right: 10px;
}

.callToAction5 h3 {
  color: #FF6500;
  font-weight: bold;
  padding-left: 20px
}

.callToAction5 p {
  font-size: 18px;
}

@media screen and (max-width: 575px) {
  .banner {
    margin-top: 135px;
    text-align: center
  }
  .banner h2 {
    bottom: 50px;
    font-size: 1rem;
    width: 200px;
    left: 50%;
    margin-left: -100px;
  }
  .banner .registerBtn {
    bottom: 10px;
    font-size: 1rem;
    width: 100px;
    margin-left: -50px;
  }
  .titleCommit h2 {
    width: 300px;
    margin-left: -150px;
  }
  .descriptImg h4 {
    padding-left: 0
  }
  .titleCommit {
    border: none;
  }
  .titleFormDK h3 {
    font-size: 1.6rem
  }
  .formInput input {
    width: 100%;
  }
  .titleCommit .imgCommit {
    text-align: center
  }
  .benefitImg {
    text-align: center
  }
}

@media screen and (min-width:576px) and (max-width: 767px) {
  .titleCommit .imgCommit {
    text-align: center
  }
  .benefitImg {
    text-align: center
  }
}

@media only screen and (min-width:768px) and (max-width: 991px) {
  .banner {
    margin-top: 30px;
  }
  .galleryImg img {
    padding: 10px;
    max-width: 350px
  }
  .titleCommit .imgCommit {
    text-align: center
  }
  .benefitImg {
    text-align: center
  }
}
</style>
