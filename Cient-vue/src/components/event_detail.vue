<template>
    <div class="events">
        <div class="container">
            <div class="row">
                <!--Phần thông tin Events-->
                <div class="col-xs-12 col-md-9 col-lg-9">
                    <div class="infoEvent">
                        <div class="infoImg">
                            <img src="../assets/images/event/event-1.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="infoContent">
                            <div class="row">
                                <div class="col-xs-12 col-md-9 col-md-9">
                                    <h3>GIỚI THIỆU SỰ KIỆN</h3>
                                    <p>Câu lạc bộ ngoại ngữ vì cộng đồng là một tổ chức phi lợi nhuận hoạt động trong lĩnh vực phát triển cộng đồng, Được thành lập vào tháng 10/2015 bởi các giảng viên đang giảng tại ĐH HN và 1 số các giảng viên Bản ngữ đến từ nhiều quốc gia khác nhau.Nhằm tạo môi trường nâng cao khả năng sử dụng Tiếng Anh cho thanh thiếu niên Việt Nam, sắp tới Câu lạc bộ sẽ tiếp tục tổ chức các lớp học Tiếng Anh Cộng đồng khóa học Mùa thu 2016 , với sự dẫn dắt của các Thầy,Cô tại ĐH Hà Nội  và các giảng viên Bản ngữ đến từ nhiều quốc gia khác nhau.  </p>
                                    <h3>NỘI DUNG CHÍNH CỦA BUỔI SINH HOẠT</h3>
                                    <ul>
                                        <li>Kinh nghiệm đặt mục tiêu và chuẩn bị bước đầu.</li>
                                        <li>Kinh nghiệm đầu tư thời gian và tiền hiệu quả</li>
                                        <li>Kinh nghiệm tìm kiếm thông tin và các nguồn lực hỗ trợ</li>
                                        <li>Kinh nghiệm luyện tập và thực hành tiếng Anh</li>
                                    </ul>
                                    <h3>NGƯỜI CHIA SẺ</h3>
                                    <div class="participantEvent">
                                            <div class="participant">
                                                <img src="../assets/images/event/Ms-Hang.jpg" alt="">
                                            </div>
                                            <div class="portfoParticipant">
                                                <h5>Ms HẰNG V.O</h5>
                                                <p>Founder Community Language Club</p>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-3 col-md-3">
                                    <div class="timeEvent">
                                    <div class="starttimeEvent">

                                        <h4><i class="fa fa-clock-o" aria-hidden="true"></i> Start time</h4>
                                        <p>3:00 PM</p>
                                        <p>Chủ nhật, 2/7/2017</p> <hr>
                                    </div>
                                    <div class="finishtimeEvent">
                                        <h4><i class="fa fa-times-circle-o" aria-hidden="true"></i> Finish time</h4>
                                        <p>5:00 PM</p>
                                        <p>Chủ nhật, 2/7/2017</p> <hr>
                                    </div>
                                    <div class="addEvent">
                                        <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h4>
                                        <p>Cà phê LiKa, 1 Ngõ 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Hết phần thông tin Events-->

                <div class="col-xs-12 col-md-3 col-lg-3">
                      <!--Phần đăng ký Events-->
                    <div class="registerEvent">
                        <h3>BUY TICKET</h3>
                        <table class="table table-striped">

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Số chỗ</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Số vé còn lại</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Hạn đăng ký</td>
                                    <td>28/6/2017</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Giá vé</td>
                                    <td>Free</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>ĐĂNG KÝ</h3>
                        <label for="nameEvent">Họ tên của bạn</label>
                        <input type="text" name="nameEvent" id="nameEvent" >
                        <label for="telEvent">Điện thoại</label>
                        <input type="text" id="telEvent" name="telEvent">
                         <label for="emailEvent">Email nhận thông tin</label>
                        <input type="text" id="emailEvent" name="emailEvent">
                        <label for="ticketCount">Số vé bạn đăng ký</label>
                            <input type="text" name="ticketCount"  id="ticketCount" >
                        <div class="ticketSubmit"><div class="btn btn-primary">Đăng ký ngay</div></div>
                    </div>
                      <!--Hết phần đăng ký Events-->
                      <div class="upEvent">
                          <h3>UPCOMING EVENT</h3>
                          <img src="../assets/images/event/Ms-Hang.jpg" class="img-fluid" alt="">
                          <h5>Chia sẻ:  Ms Hằng <br> <hr> Founder - Community Language Club</h5>
                          <p>Sinh hoạt định kỳ Câu lạc bộ. Chia sẻ bí kíp giao tiếp tiếng Anh trong công việc</p>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get(`http://localhost:3000/event-detail/` + this.$route.params.id + '/')
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
.events {
    margin-top: 150px;
}

.infoImg img {
    max-height: 500px
}
.registerEvent h3 {
    text-align: center;
    background: #ff6500;
    padding:8px  5px;
    color: white;
}
.registerEvent label{
    margin-bottom: 0;
    margin-top: 10px;
}
.registerEvent input{
    padding-left: 4px;
    width: 100%;
}
.ticketSubmit {
    text-align: center
}
.ticketSubmit .btn{
    background: #ff6500;
    border: 2px solid #ff6500;
    cursor: pointer;
    margin-top: 10px
}
.ticketSubmit .btn:hover{
    color: #ff6500;
    background: white;
    border: 2px solid #ff6500
}
.infoContent {
    margin-top: 30px
}
.infoContent h3{
    text-align: left;
    font-weight: bold;
    margin-top: 20px;
     margin-bottom: 20px
}
.timeEvent {
    border-left: 1px solid gray;
    padding-left: 10px;
}
.timeEvent .fa {
    color: #ff6500
}
.dangky {
    position:fixed;
    top: 150px;
    left: 00px;
}
.upEvent {
    margin-top: 30px;
    background: #ff6500;
    padding:8px  5px;
    color: white;
}
.upEvent h3 {
    text-align: center
}
.upEvent h5{
    margin: 10px auto;
    width: 100%;
    text-align: center
}
.upEvent p {
    margin: 15px 10px;
    text-align: justify
}
.participant {
    text-align: center
}
.participant img{
    max-width: 200px;
}
.portfoParticipant {
    text-align: center;
    margin-top: 30px;
}
.portfoParticipant h5{
    font-weight: bold
}
</style>
<script>

</script>
