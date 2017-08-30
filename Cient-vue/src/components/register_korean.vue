<template lang="html">
  <!--FORM ĐĂNG KÝ TIẾNG HÀN-->
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="KoreanModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="KoreanModalLabel">Đăng ký lớp tiếng Hàn</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <form id="register_tienganh" name="formDangky" method="" action="https://docs.google.com/forms/d/e/1FAIpQLSeYgqjHl3hmvjZqbbvdwtdbWzLzfPm3DMwhIqzu5Z4fTyoOYg/formResponse">
                  <p>Vui lòng hoàn thành form đăng ký dưới đây và chọn lớp học đăng ký để chúng tôi tiện sắp xếp và liên lạc lại với bạn nhé</p>
                  <div class="table_list">
                    <div class="row formlist">
                      <div class="col-xs-12 col-md-12 col-lg-12">


                          <input type="text" name="entry.350283165" id="name" placeholder="Họ và tên*" class="form-control">
                      </div>
                      <div class="col-xs-12 col-md-12 col-lg-12">

                        <input type="text" name="entry.496056650" id="tel" placeholder="Điện thoại*" class="form-control">
                      </div>
                      <div class="col-xs-12 col-md-12 col-lg-12">

                        <input type="text" name="entry.653822262" id="email" placeholder="Email*" class="form-control">
                      </div>
                      <div class="col-xs-12 col-md-12 col-lg-12">
                        <select class="form-control" name="entry.2027763509" v-model="selected" >
                          <option  value="" >Bạn muốn đăng ký lớp học</option>
                          <option v-for="item in schedule">{{ item.course_id}} {{item.open_date}}</option>
                          <option value="Lịch khác">Tôi muốn đăng ký lịch khác</option>
                        </select>
                      </div>
                    </div>
                  </div><hr style="background:white;">
                    <div id="modalSubmit">
                      <button class="btn btn-primary modalSubmit" type="submit" name="Đăng ký" value="Đăng ký" id="submit">Đăng ký</button>
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>	<!--HẾT FORM ĐĂNG KÝ TIẾNG HÀN-->

</template>

<script>
export default {
  props: ['schedule'],
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style lang="css">
.modal-content .modal-header h5 {
	color: white;
	font-size: 30px;
}

#register_tienganh .form-control {
	margin: 15px auto;
	border: 1px solid #2c5ba2;
	border-radius: 10px;
	font-size: 16px;
}
#register_tienganh p{
	color: white;
}
#register_tienganh .formlist {
	margin-left: 0;
	margin-right: 0;
}

/* .modal-content {
	background:#2c5ba2
} */
#modalSubmit{
	text-align: center
}
.modalSubmit {
	background: #ff6500;
	cursor: pointer;
	border: 2px solid #ff6500;
	padding: 10px 30px;
}
.modalSubmit:hover {
	border: 2px solid #ff6500;
	background:white;
	color: #ff6500;
}
</style>
