<template>
	<div class="plan">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-9 col-lg-9">
					<div class="row">
						<!--Title Lich khai giang-->
						<div class="col-xs-12 col-md-12 col-lg-12">
							<div class="titleBg">
								<img src="../assets/images/lichkhaigiang/titleBg.png" class="img-fluid" alt="">
								<h2>Lịch khai giảng</h2>
							</div>
						</div>
					</div>
					<!-- Het Title Lich khai giang-->
					<div class="row">
						<div class="col-xs-12 col-md-12 col-lg-12">
							<div class="btnRegister">
								<div class="btn btn-danger" @click="Register">Đăng ký học thử ngay</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-md-12 col-lg-12" v-for="(subschedule, index1) in schedule" :key="subschedule.id" >
							<!-- Lịch khai giảng-->
							<div class="planEng" >
								<h3>{{subschedule[0].title}}</h3>
								<table class="table table-hover table-bordered table-striped table-responsive" >
									<thead >
										<tr>
											<th>#</th>
											<th>Trình độ</th>
											<th>Lớp</th>
											<th>Lịch học</th>
											<th>Ngày nhập học</th>
											<th>Đăng ký</th>
										</tr>
									</thead>
									 <tbody v-for="(items,index) in subschedule" :key="items.id">
										<tr >
											<th scope="row">{{index + 1}}</th>
											<td>{{items.class_level}}</td>
											<td>{{items.course_id}} {{items.class_id}}</td>	
											<td>{{items.schedule_class}}</td>
											<td>{{items.open_date}}</td>
											<td>
												<button class="btn-danger" data-toggle="modal" @click="getPopup(index1)" data-target="#registerModal">Đăng ký</button>
											</td>
										</tr> 
									</tbody>
								</table>
							</div>
							<!-- Hết Lịch khai giảng-->
						</div>
					</div>
					<div class="row">
						<!--Title Ưu đãi-->
						<div class="col-xs-12 col-md-12 col-lg-12" >
							<div class="titleBg">
								<img src="../assets/images/lichkhaigiang/titleBg.png" class="img-fluid" alt="">
								<h2>Lưu ý</h2>
							</div>
							<div v-for="item in note" :key="item.id">
								<p>
									<span style="color:#ff5600; font-weight:bold">
										<i class="fa fa-free-code-camp" aria-hidden="true"></i> {{ item.note_title}}</span> : {{ item.note_content}}</p>
							</div>
						</div>
					</div>

					<!-- Het Title Ưu đãi-->
				</div>
				<div class="col-xs-12 col-md-3 col-lg-3">
					<div class="sidebar">
						<div class="row">
							<div class="col-xs-12 col-md-12 col-lg-12">
								<div class="hotLine">
									<i class="fa fa-phone-square" aria-hidden="true"></i>
									<h4>Hotline
										<span style="font-weight: bold">TƯ VẤN</span>
									</h4>
									<p>04.7307.6699
										<br>0979.357.866</p>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-md-12 col-lg-12">
								<div id="Contentsidebar">
									<div class="titleSidebar">
										<h4>Sự kiện mới nhất</h4>
									</div>
									<div class="contentSidebar"  v-for="items in events" :key="items.id">
										<div class="contentsidebarImg">
											<img :src="imagePathEvent(items.avatar)" class="img-fluid" alt="">
										</div>
										<div class="contentsidebarNews">
											<h5>{{ items.speaker }}</h5>
											<span style="background: #ff6500;color:white;padding: 5px;display:block;"> {{ items.start_time }}</span>
											<a href="">
												<p v-if="items.description" v-html="$options.filters.truncate(items.description,100)"> </p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--Popup register_form -->
		<registerModal :schedule="scheduleForm"></registerModal>
		<!--General register_form-->
		<registerform></registerform>
	</div><!--ĐÓNG THẺ VUE- DON'T REMOVE-->
</template>
<script>
import registerModal from '../components/registerModal.vue'
import registerform from '../components/registerform.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'lichkhaigiang',
  components: {
    registerform,
    registerModal
  },
  data () {
    return {
      note: [],
      events: [],
      schedule: [],
      scheduleForm: ''
    }
  },
  methods: {
    getPopup (index1) {
      let scheduleForm = this.schedule[index1]
      this.scheduleForm = scheduleForm
    },
    Register: function () {
      window.$('html, body').animate({
        scrollTop: window.$('#register_hocthumienphi').offset().top - 250
      }, 1000)
    },
    imagePathEvent: function (img) {
      return require('../assets/images/homepage/events/' + img)
    }
  },
  created () {
    document.title = 'Lịch khai giảng'
    // retrieve data from server
    axios.get(`http://localhost:3000/lich-khai-giang`)
      .then(res => {
        console.log('res', res)
        res.data.event_sidebar.map(item => {
          item.start_time = moment(item.starttime).format('DD/MM/YYYY')
          item.start_hour = moment(item.starttime).format('LTS')
        })
      // Format open_date
        res.data.eng_schedule.map(item => {
          item.open_date = moment(item.open_date).format('DD/MM/YYYY')
        })
        res.data.chinese_schedule.map(item => {
          item.open_date = moment(item.open_date).format('DD/MM/YYYY')
        })
        res.data.japanse_schedule.map(item => {
          item.open_date = moment(item.open_date).format('DD/MM/YYYY')
        })
        res.data.korean_schedule.map(item => {
          item.open_date = moment(item.open_date).format('DD/MM/YYYY')
        })
     // Declare name for data receiveved
        this.eng_schedule = res.data.eng_schedule
        this.chinese_schedule = res.data.chinese_schedule
        this.japanse_schedule = res.data.japanse_schedule
        this.korean_schedule = res.data.korean_schedule
        let schedule = [
          this.eng_schedule,
          this.chinese_schedule,
          this.japanse_schedule,
          this.korean_schedule
        ]
        this.schedule = schedule
        console.log('schedule', this.schedule)
        this.note = res.data.note
        this.events = res.data.event_sidebar
        // console.log('res.data.eng_schedule', res.data.eng_schedule)
      })
      .catch(error => {
        console.error(error)
      })
  },
  filters: {
    truncate: function (string, value) {
      return string.substring(0, value) + '...'
    }
  }
}
</script>

<style scoped>
.plan {
	margin-top: 150px;
}

.titleBg {
	position: relative;
	margin-bottom: 10px;
}

.titleBg h2 {
	position: absolute;
	top: 7px;
	left: 100px;
	color: white;
	font-size: 25px;
	text-transform: uppercase
}

.btnRegister {
	text-align: center;
	margin-bottom: 10px;
}

.btnRegister .btn {
	background: #ff6500;
	cursor: pointer;
	border: 2px solid #ff6500;
}

.btnRegister .btn:hover {
	background: white;
	border: 2px solid #ff6500;
	color: #ff6500;
}

table thead {
	background: #ff6500;
	color: white;
	font-size: 19px;
}

table tbody>tr>td .btn-danger {
	background: #ff6500;
	cursor: pointer;
	border: 1px solid #ff6500;
	padding: 5px;
}

table tbody>tr>td .btn-danger:hover {
	color: #ff6500;
	background: white;
	border: 1px solid #ff6500;
}
.table-responsive {
    display: table;
}
.planEng h3 {
	color: #ff6500;
	font-size: 22px;
	font-weight: bold
}


.planChina h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}

.planJapan h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}

.planKorea h3 {
	color: #ff6500;
	font-size: 30px;
	font-weight: bold
}


.sidebar .hotLine {
	padding-top: 5px;
	position: relative;
	background: #ff6500;
	text-align: center
}

.sidebar .hotLine h4 {
	color: white;
	padding-top: 3px
}

.sidebar .hotLine p {
	color: white;
	padding-bottom: 2px;
	padding-left: 10px;
	font-size: 20px;
	font-weight: bold
}

.sidebar .hotLine .fa {
	position: absolute;
	top: 40px;
	left: 20px;
	color: white;
	font-size: 40px;
}

#Contentsidebar {
	border: 2px solid #ff6500;
	margin-bottom: 5px;
}

.titleSidebar {
	text-align: center;
	margin-bottom: 5px;
}

.titleSidebar h4 {
	color: white;
	background: #ff6500;
	padding: 5px;
}

.contentsidebarImg {
	text-align: center;
	width: 100%;
	margin-top: 5px;
}

.contentsidebarImg img {
	max-width: 100px;
}

.contentsidebarNews {
	margin-top: 5px;
	text-align: center;
	width: 100%;
	border-bottom: 1px solid #ff6500;
}

.contentsidebarNews a:hover {
	text-decoration: none
}

.contentsidebarNews p {
	margin-top: 10px;
}

@media screen and (max-width:576px) {
	.titleBg img {
		min-height: 35px;
	}
	.titleBg h2 {
		left: 50px
	}
	.hotLine .fa-phone-square {
		margin-left: 35px
	}
	.sidebar .hotLine .fa {
		top: 50px;
	}
}

@media screen and (min-width:576px) and (max-width: 767px) {
	.titleBg img {
		min-height: 35px;
	}
	.hotLine .fa-phone-square {
		margin-left: 100px
	}
}

@media only screen and (min-width:768px) and (max-width: 991px) {
	.titleBg img {
		min-height: 35px;
	}
	.sidebar .hotLine p {
		color: white;
		padding-bottom: 20px;
		padding-left: 35px;
		font-size: 0.6rem;
		font-weight: bold;
	}
	.sidebar .hotLine h4 {
		font-size: 1.1rem
	}
	.sidebar .hotLine .fa {
		top: 30px;
	}
}

@media only screen and (min-width:992px) {
	.titleBg img {
		min-height: 35px;
	}
	.sidebar .hotLine p {
		padding-left: 30px;
	}
}
</style>
