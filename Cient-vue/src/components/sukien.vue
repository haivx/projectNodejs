<template>
  <div class="container" id="sukien">
    <div class="row ">
    </div>
    <div class="row " id="eventItem">
      <div class="col-xs-12 col-lg-12 col md-12">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item ">
            <a class="nav-link active" data-toggle="tab" href="#date1" role="tab">
              HAPPENING
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#date2" role="tab">
              UPCOMING
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#date3" role="tab">
              EXPIRED
            </a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active " id="date1" role="tabpanel">
            <div class="row event1">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">02</span>
                <span class="month">Tháng 7</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3>Buổi sinh hoạt thường kỳ của Câu lạc bộ</h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>15:PM - 17:PM </span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>Số 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                  <hr>
                  <p>Buổi sinh hoạt thường kỳ của câu lạc bộ Communnity Language Club sẽ diễn ra vào chủ nhật hàng tuần. Các học viên muốn tham gia cần đăng ký trước để được chuẩn bị chủ đề và tài liệu trước khi tham gia.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img src="../assets/images/tintuc/blog22.jpg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-xs-12 col-md-12 col-lg-12">             
                 <div class="dangkyEvent ">
               <router-link to="sinh-hoat-clb-ngoai-ngu-vi-cong-dong"> <div class="btn btn-danger">Tìm hiểu thêm</div></router-link>
              </div></div>
            </div>

          </div>
          <div class="tab-pane" id="date2" role="tabpanel">
            <div class="row event1">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">04</span>
                <span class="month">Tháng 7</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3>Sinh trắc vân tay và vai trò trong hướng nghiệp</h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>9:AM - 11:AM </span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>Số 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                  <hr>
                  <p>Hiện là giám đốc học viện đào tạo kỹ năng NLP, cùng Mr Tuyên khám phá sinh trắc vân tay và vai trò trong định hướng công việc trong tương lai.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img src="../assets/images/tintuc/blog6.jpg" class="img-fluid" alt="">
                </div>
              </div>
                            <div class="col-xs-12 col-md-12 col-lg-12">             
                 <div class="dangkyEvent ">
                <div class="btn btn-danger">Tìm hiểu thêm</div>
              </div></div>
            </div>
            <div class="row event1">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">06</span>
                <span class="month">Tháng 7</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3>Chia sẻ chiến lược luyện thi IELTS</h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>8:AM - 5:PM </span>
                  <br>
                     <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>Số 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                  <hr>
                     <p>Muốn đạt điểm cao ở một chương trình thi quốc tế như IELTS bạn cần một cái đầu lạnh và chiến thuật hợp lý. IELTS là một kỳ thi để kiểm tra mức độ thành thạo tiếng Anh của người sử dụng tiếng Anh như ngôn ngữ thứ hai. Những thí sinh đăng ký thi IELTS muốn đạt điểm cao cần phải lên kế hoạch luyện thi thật chăm chỉ và chi tiết...</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img src="../assets/images/tintuc/blog33.jpg" class="img-fluid" alt="">
                </div>
              </div>
                            <div class="col-xs-12 col-md-12 col-lg-12">             
                 <div class="dangkyEvent ">
                <div class="btn btn-danger">Tìm hiểu thêm</div>
              </div></div>
            </div>
          </div>
          <div class="tab-pane " id="date3" role="tabpanel">
            <div class="row event1">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">06</span>
                <span class="month">Tháng 6</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3>Chia sẻ kinh nghiệm viết CV và nộp hồ sơ xin việc</h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>8:AM - 5:PM </span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>Số 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                  <hr>
                  <p>Anh Bảo hiện đang là trưởng phòng nhân sự của Vingroup, hàng năm Vingroup đều có đợt tuyển dụng nhân lực, vậy tiêu chí nào...</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img src="../assets/images/tintuc/blog2.jpg" class="img-fluid" alt="">
                </div>
              </div>
              
            </div>
            <div class="row event1">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">01</span>
                <span class="month">Tháng 6</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3>Chia sẻ chiến lược luyện thi IELTS</h3>
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>1:PM - 5:PM </span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                     <span>Số 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                  <hr>
                  <p>Thầy Tùng hiện là Giảng viên khoa Anh ĐH Hà Nội. Cùng thầy Tùng giải đáp những thắc mắc của nhiều bạn hội viên nhé....</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img src="../assets/images/tintuc/blog4.jpg" class="img-fluid" alt="">
        
                </div>
              </div>
            </div>
            <div class="row event1">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">04</span>
                <span class="month">Tháng 5</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3>Chia sẻ kinh nghiệm săn học bổng du học Úc</h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>2:PM - 5:PM </span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>Số 619 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                  <hr>
                  <p>Bạn thương hiện là Du học sinh năm 4 ĐH Queensland Australia. Hãy tham khảo những đóng góp quý giá của bạn nhé.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img src="../assets/images/tintuc/blog44.jpg" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#sukien {
  margin-top: 150px;
}

.dangkyEvent {
  text-align: center
}
.dangkyEvent .btn {
  margin-bottom: 10px;
  background: #ff6500;
  border: 2px solid #ff6500;
  color: white;
  cursor: pointer
}
.dangkyEvent .btn:hover{
  color: #ff6500;
  background: white;
}
#eventItem a.nav-link {
  color: #2c5ba2;
  padding: 10px 60px;
  text-transform: uppercase;
  font-weight: bold
}

#eventItem a.nav-link.active {
  border-top: 3px solid red
}

.date {
  font-size: 130px;
  color: #ff6500
}

.month {
  font-weight: bold;
  font-size: 28px;
}

#eventContent {
  margin-top: 20px
}

#eventContent .fa {
  margin-right: 10px;
  color: #ff6500
}

#eventContent h3 {
  font-weight: bold
}

.eventImg {
  margin: 20px auto;
}

.event1 {
  border-bottom: 1px solid black
}
</style>

