<template>
    <div>
        <div class="container contact">
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-6">
                    <div class="titleContact">
                        <h2 class="text-center">CONTACT INFO</h2>
                        <br>
                        <p>Chào mừng bạn đến với Câu lạc bộ Ngoại ngữ Vì Cộng đồng</p>
                    </div>
                    <hr>
                    <div class="infoContact">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-6 ">
                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                <h5>Phone</h5>
                                <p>04.7307.6699</p>
                            </div>
    
                            <div class="col-xs-12 col-md-6  col-lg-6 ">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <h5>Email</h5>
                                <p>ngoainguvicongdong@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="addContact">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <h5>Địa chỉ</h5>
                        <p>619 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                    </div>
                    <hr>
                    <div class="socialContact">
                        <a href="https://www.facebook.com/ngoainguvicongdong/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                        <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                       <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
                <!--Het phần contact-->
                <div class="col-xs-12 col-md-6 col-lg-6">
                    <div class="titleMessage">
                        <h2 class="text-center">GỬI THÔNG TIN LIÊN HỆ</h2>
                        <br>
                        <p>Nếu bạn có thắc mắc cần giải đáp, vui lòng điền vào form dưới đây</p>
                    </div> <hr>
                    <div class="formMessage">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-6">
                                <input type="text" name="name" placeholder="Họ và tên">
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6">
                                <input type="text" name="tel" placeholder="Điện thoại">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12 col-lg-12">
                                <input type="text" name="subject" placeholder="Tiêu đề">
                            </div>
                        </div>
                        <div class="row">
                            <textarea name="" id="" cols="60" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="sendMess"><div class="btn btn-primary">Gửi liên hệ</div></div>
                </div>  <!--Het phần contact-->
            </div>
        </div>
            <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1711193609735!2d105.79311067426383!3d20.98577666651271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc638f49c7d%3A0xf168bf5be9edd96f!2zNjE5IE5ndXnhu4VuIFRyw6NpLCBUaGFuaCBYdcOibiBOYW0sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1497411021341" width="100%" height="400" frameborder="0" style="border:0"></iframe>
    </div>
    </div>
 
</template>

<style scoped>
.titleContact p{
    font-size: 17px;
}
.titleMessage {
    font-size: 17px;
}
.contact {
    margin-top: 150px;
    margin-bottom: 30px;    
}

.infoContact i {
    position: absolute;
    top: 17px;
    font-size: 30px;
    color: #1e85bd;
}

.infoContact p,
h5 {
    padding-left: 50px;
}

.addContact i {
    position: absolute;
    font-size: 30px;
    padding-top: 17px;
    color: #1e85bd;
}

.addContact p,
h5 {
    padding-left: 50px;
}

.socialContact {
    text-align: center
}

.socialContact i {
    font-size: 30px;
    margin-left: 30px;
    cursor: pointer;
    margin-bottom: 10px;
        overflow: hidden
}

.socialContact .fa-facebook-square:hover {
    color: #166e9e
}

.socialContact .fa-twitter-square:hover {
    color: #6dc3f2
}

.socialContact .fa-google-plus-square:hover {
    color: red
}

.socialContact .fa-instagram:hover {
    background: radial-gradient(circle at 33% 100%,#fed373 4%,#f15245 30%,#d92e7f 62%,#9b36b7 85%,#515ecf);
        border: none;
    color: #fff;
}
.formMessage input{
    width: 100%;
    margin: 10px auto;
    padding-left: 2px;

}
 .formMessage textarea {
     width: 100%;
     margin: 15px;
     padding: 0 5px;
 }
 .sendMess {
     text-align: center;
     margin: 5px auto;

 }
 .sendMess .btn{     background: orangered;
     color: white;
     border: none;
     }
      .sendMess .btn:hover{
          color: white;
          background: #166e9e;
          cursor: pointer;
      }
</style>
