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
          <!--Het Phan Đăng nhập - Đăng ký -->
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
            <div role="tabpanel" class="tab-pane fade in active show" id="profile">
              <form id="form-dangky" @submit.prevent="submit" autocomplete="on">
                <br>
                <span v-if="msgServer[0]">{{msgServer}}</span> 
                <br>
                <label for="username">Username</label>
                <br>
                <input type="text" name="username" id="username" v-model="username" required/>
                <br>
                <label for="fullName">Full Name</label>
                <br>
                <input type="text" name="fullName" id="fullName" v-model="fullName" />
                <br>
                <label for="email">Email</label>
                <br>
                <input type="email" name="email" id="email" v-model="email" required />
                <br>
                <label for="tel">Điện thoại</label>
                <br>
                <input type="text" name="tel" id="tel" v-model="tel" />
                <br>
                <label for="password">Password</label>
                <br>
                <input type="password" name="password" id="password" v-model="password" required/><br>
                <span>{{msg.password}}</span>
                <br>
                <label for="confirmPassword">Confirm password</label>
                <br>
                <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" required/><br>
                <span>{{msg.confirmPassword}}</span><br>
                <button class="btn btn-primary" type="submit" style="margin: 10px">Đăng ký</button>
              </form>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="buzz">
              <form id="form-dangnhap"  @submit.prevent="signIn" method="POST">
                <br>
                   <span v-if="msgServer[0]">{{msgServer}}</span>
                <br>
                <label for="usernameLogin">Username</label>
                <br>
                <input type="text" name="Họ tên" id="usernameLogin" required v-model="usernameLogin"/>

                <br>
                <label for="passwordLogin">Password</label>
                <br>
                <input type="password" name="password" id="passwordLogin" required v-model="passwordLogin"/>
                <br>
                <button class="btn btn-primary" type="submit">Đăng nhập</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--HẾT FORM ĐĂNG KÝ TIẾNG NHẬT-->
  </header>
</template>

<script>
import axios from 'axios'
import Router from '../router'
export default {
  data () {
    return {
      username: '',
      email: '',
      fullName: '',
      password: '',
      tel: '',
      confirmPassword: '',
      msg: [],
      msgServer: [],
      usernameLogin: '',
      passwordLogin: ''
    }
  },
  watch: {
    password (value) {
      this.password = value
      this.checkPassword(value)
    },
    confirmPassword (value) {
      this.confirmPassword = value
      this.recheckPassword(value)
    }
  },
  methods: {
    submit () {
      console.log(this.username)
      // $data la tat ca data duoc khai bao trong Vue js
      let data = this.$data
      // console.log('data', data)
      console.log('Day la this.$data', this.$data)
      // console.log(data)
      axios.post(`http://localhost:3000/register`, {
        data
      })
      .then(res => {
        this.username = ''
        this.fullName = ''
        this.email = ''
        this.tel = ''
        this.password = ''
        this.confirmPassword = ''
        this.msgServer = res.data.msg
        // console.log(this.msg)
      })
      .catch(err => {
        console.log(err)
      })
    },
    checkPassword (value) {
      if (value.length < 6 && value.length > 0) {
        this.msg['password'] = 'Password must be at least 6'
      } else {
        this.msg['password'] = ''
      }
    },
    recheckPassword (value) {
      if (this.password === value) {
        this.msg['confirmPassword'] = ''
      } else {
        this.msg['confirmPassword'] = "Password doesn't match"
      }
    },
    signIn () {
      let username = this.usernameLogin
      let password = this.passwordLogin
      axios.post(`http://localhost:3000/login`, {
        username,
        password
      })
      .then(data => {
        console.log(data)
        let result = data.data.msg
        console.log('result', result)
        if (result === 'Login successful') {
          this.msgServer = 'Đăng nhập thành công!'
          Router.push('/dashboard')
          setTimeout(() => {
            window.$('.modal').modal('hide')
          }, 1000)
        } else {
          Router.push('/')
          this.msgServer = 'Thông tin không chính xác, vui lòng điền lại'
        }
      })
      .catch(error => console.log(error))
    }
  }
}

</script>

<style scoped>

label {
  color: white;
  font-size: 1.2rem
}
span {
  color:white
}
#form-dangky, #form-dangnhap {
  text-align: center;
  background:green;
}
.nav-tabs {
   background:green; 
}
#form-dangky input, #form-dangnhap input {
  margin-bottom: 7px;
}
.nav-item a{
  color:white;
}

.top {
  background-color: #FF6500;
  width: 100%;
  height: 37px;
  position: relative;
}

.btn-primary {
  cursor: pointer;
  margin-bottom: 7px;
  background:  #FF6500;
  border: none
}
.btn-primary:hover{
  background:#e67830
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
  font-weight: bold;
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

#register_tienganh p {
  color: white;
}

#register_tienganh .formlist {
  margin-left: 0;
  margin-right: 0;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  border: 1px solid #2c5ba2;
  position: relative;
  z-index: 1
}

#modalSubmit {
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
  background: white;
  color: #ff6500;
}
</style>
