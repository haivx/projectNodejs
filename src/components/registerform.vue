<template>
    <div class="registerForm">
            <!--  Content 7 - FORM ĐĂNG KÝ-->
    <div class="contactForm">
      <div class="container">
        <div class="row ">
          <div class="titleReason text-center">
            <h2> BẠN MUỐN TRẢI NGHIỆM PHƯƠNG PHÁP HỌC ĐỘC ĐÁO CỦA CHÚNG TÔI?</h2>
            <p>Để lại thông tin dưới đây và chúng tôi sẽ liên lạc lại với bạn</p>
          </div>
        </div>
        <div class="row">
          <form id="register_hocthumienphi" name="frmDangky" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeYgqjHl3hmvjZqbbvdwtdbWzLzfPm3DMwhIqzu5Z4fTyoOYg/formResponse">
            <div class="table_list">
              <div class="row formlist">
                <div class="col-xs-12 col-md-12 col-lg-4">
                  <span Class="error"></span>
                  <input type="text" name="entry.350283165" id="name" placeholder="Họ và tên*" class="form-control">
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                   <span Class="error"></span>
                  <input type="text" name="entry.496056650" id="tel" placeholder="Điện thoại*" class="form-control">
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                   <span Class="error"></span>
                  <input type="text" name="entry.653822262" id="email" placeholder="Email*" class="form-control">
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                  <input type="text" name="entry.1994627561" id="email" placeholder="Năm sinh" class="form-control">
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                  <input type="text" name="entry.1625028648" id="email" placeholder="Nơi công tác" class="form-control">
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                  <select  class="form-control" name="entry.2027763509">
                    <option value="starter">Bạn quan tâm đến chương trình</option>
                    <option value="Tiếng Anh 0 đồng">Tiếng Anh 0 đồng</option>
                    <option value="Tiếng Nhật 0 đồng">Tiếng Nhật 0 đồng</option>
                    <option value="Tiếng Trung 0 đồng">Tiếng Trung 0 đồng</option>
                    <option value="Tiếng Hàn 0 đồng">Tiếng Hàn 0 đồng</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row btnfooter">
              <div class="col-xs-12 col-md-12 col-lg-12">
                <input class="square" type="submit" name="Đăng ký" value="Đăng ký" id="submit" @click="submit">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--  Hết Content 7 - FORM ĐĂNG KÝ-->
    </div>
</template>
<script>
export default {
  methods: {
    submit: function () {
      window.$('#register_hocthumienphi').on('submit', function () {
        var isValid = true
        // Validate cho ô Họ và tên
        if (window.$('#name').val().trim() === '') {
          window.$('#name').prev('span').text('Tên của bạn là gì?')
          isValid = false
        } else {
          window.$('#name').prev('span').text('')
        }
        // Validate cho ô điện thoại
        if (window.$('#tel').val().match(/[0-9]/) == null) {
          window.$('#tel').prev('span').text('Điện thoại của bạn?')
          window.$('#tel').css('box-shadow', 'rgba(221, 0, 0, 0.1) 0px 0px 0px 3px')
          isValid = false
        } else {
          window.$('#tel').prev('span').text('')
          window.$('#tel').css('box-shadow', 'none')
        }
        // Validate cho ô email
        if (window.$('#email').val().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) == null) {
          window.$('#email').prev('span').text('Vui lòng điền đúng định dạng email?')
          window.$('#email').css('box-shadow', 'rgba(221, 0, 0, 0.1) 0px 0px 0px 3px')
          isValid = false
        } else {
          window.$('#email').prev('span').text('')
          window.$('#email').css('box-shadow', 'none')
        }
        return isValid
      })
    }
  }
}
</script>

<style scoped>
/******
	CSS CHO PHAN CONTENT5 CONTACT FORM
	******/
.titleReason {
  width: 100%;
  margin-top: 30px;
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
  margin: 15px auto;
  border: 1px solid #e62239;
  border-radius: 10px;
  font-size: 16px;
}

.formlist {
  margin-left: 0;
  margin-right: 0;
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
  .titleReason {
    width: 100%;
  }
  .titleReason h2 {
    font-size: 1.5rem;
    line-height: 1.8rem
  }
  .titleReason p {
    padding: 0 5px;
  }
}
</style>
