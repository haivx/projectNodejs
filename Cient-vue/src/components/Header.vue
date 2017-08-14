<template>
  <header>
    <div class="container-fluid">
      <div class="row fixed-top">
        <div class="top ">
          <div>
            <p id="contactNum">Hotline: 04.7307.6699</p>
          </div>
          <!-- Het phan khung Contact-->
          <div class="logBtn">
            <a id="loginBtn" data-toggle="modal" data-target="#logIn">Đăng nhập</a>
            <a id="regisBtn" data-toggle="modal" data-target="#logIn">Đăng ký</a>
          </div>
          <!--Het Phan Đăng nhập Đăng ký -->
        </div>
        <!-- Het Phan top-->
      </div>
    </div>
  
    <!-- Modal -->
    <div class="modal fade" id="logIn" tabindex="-1" role="dialog" aria-labelledby="loginForm" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" href="#profile" role="tab" data-toggle="tab">Đăng ký</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#buzz" role="tab" data-toggle="tab">Đăng nhập</a>
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="profile">
              <form id="form">
                <label for="Name">Họ tên</label>
                <br>
                <input class="square" type="text" name="Họ tên" id="full-name" />
                
                <br>
                <label for="dob">Ngày sinh</label>
                <br>
                <input class="square" type="text" name="ngày sinh" id="dob" />
                <br>
          
                <label for="add">Địa chỉ</label>
                <br>
                <input class="square" type="text" name="Địa chỉ" id="add" />
                <br>
                
                <label for="tel">Điện thoại</label>
                <br>
                <input class="square" type="text" name="Điện thoại" id="tel" />
               
                <br>
                <label for="email">Email</label>
                <br>
                <input class="square" type="text" name="Email" id="email" />
                
                <br>
                <label for="Password">Password</label>
                <br>
                <input class="square" type="password" name="Password" id="Password" />
                
                <br>
                <input class="square btn" type="button" name="Đăng ký" value="Đăng ký" style="margin: 10px;"/>
              </form>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="buzz">bbb</div>
          </div>
        </div>
      </div>
    </div>
    <!--HẾT FORM ĐĂNG KÝ TIẾNG NHẬT-->
  </header>
</template>

<script>

export default {

}

</script>

<style scoped>
#form label{
  color: green;
}
#form{
  text-align: center
}
.top {
  background-color: #FF6500;
  width: 100%;
  height: 37px;
  position: relative;
}

#contactNum {
  color: white;
  font-size: 14px;
  margin: 7px 20px;
  font-weight: bold
}

#loginBtn {
  cursor: pointer;
  padding-right: 80px;
  color: white;
  position: absolute;
  top: 7px;
  right: 15px;
  font-size: 14px;
  font-weight: bold
}

#loginBtn:link {
  text-decoration: none;
  font-size: 15px;
}

#regisBtn {
   cursor: pointer;
  padding-right: 10px;
  color: white;
  position: absolute;
  top: 7px;
  right: 15px;
  font-size: 14px;
  font-weight: bold
}

#regisBtn:link {
  text-decoration: none;
  font-size: 15px;
}


/******
      MEDIA QUERY
      ******/

@media screen and (max-width: 575px) {
  .displayBlock {
    display: block !important;
  }
  .menuCollapse {
    background-color: #1e85bd;
  }
  .mainMenu .menuCollapse {
    background-color: #1e85bd;
  }
}


/** Man hinh MD**/

@media screen and (min-width: 768px) and (max-width: 991px) {
  .menuCollapse {
    background-color: #1e85bd;
  }
}
</style>
