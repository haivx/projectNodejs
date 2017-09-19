<template>
    <div class="events">
        <div class="container">
            <div class="row">
                <!--Phần thông tin Events-->
                <div class="col-xs-12 col-md-9 col-lg-9">
                    <div class="infoEvent">
                        <div class="infoImg" v-if="upcomingOne.background_image">
                            <img :src="imagePath(upcomingOne.background_image)" class="img-fluid" alt="">
                        </div>
                        <div class="infoContent">
                            <div class="row">
                                <div class="col-xs-12 col-md-9 col-md-9">
                                    <h3>GIỚI THIỆU SỰ KIỆN</h3>
                                    <p>{{event.description}}</p>
                                    <h3>NỘI DUNG CHÍNH CỦA BUỔI SINH HOẠT</h3>
                                    <p>{{event.contents}}</p>
                                    <h3>NGƯỜI CHIA SẺ</h3>
                                    <div class="participantEvent">
                                            <div class="participant" v-if="event.avatar">
                                                <img :src="imagePath(event.avatar)" alt="">
                                            </div>
                                            <div class="portfoParticipant">
                                                <h5>{{ event.speaker}}</h5>
                                                <p>{{event.job}}</p>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-3 col-md-3">
                                    <div class="timeEvent">
                                    <div class="starttimeEvent">

                                        <h4><i class="fa fa-clock-o" aria-hidden="true"></i> Start time</h4>
                                        <p>{{event.start_hour}}</p>
                                        <p>{{event.start_time}}</p> <hr>
                                    </div>
                                    <div class="finishtimeEvent">
                                        <h4><i class="fa fa-times-circle-o" aria-hidden="true"></i> Finish time</h4>
                                        <p>{{event.finish_hour}}</p>
                                        <p>{{event.finish_time}}</p> <hr>
                                    </div>
                                    <div class="addEvent">
                                        <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h4>
                                        <p>{{event.address}}</p>
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
                                    <td>{{event.total_ticket}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Số vé còn lại</td>
                                    <td>{{availbleSeat}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Hạn đăng ký</td>
                                    <td>{{event.Regisdeadine}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Giá vé</td>
                                    <td>{{event.price_ticket}}</td>
                                </tr>
                            </tbody>
                        </table>
                    <form @submit.prevent="onSubmit" method="post">
                        <h3>ĐĂNG KÝ</h3>
                        <span id="msg" v-if="msg"> {{msg}}</span> <br>
                        <label for="nameEvent">Họ tên của bạn</label>
                        <input type="text" name="nameEvent" id="nameEvent" required v-model="nameEvent">
                        <label for="telEvent">Điện thoại</label>
                        <input type="text" id="telEvent" name="telEvent" required v-model="telEvent">
                         <label for="emailEvent">Email nhận thông tin</label>
                        <input type="text" id="emailEvent" name="emailEvent" required v-model="emailEvent">
                        <label for="ticketCount">Số vé bạn đăng ký</label>
                        <input type="text" name="ticketCount"  id="ticketCount" v-model="ticketCount">
                        <div class="ticketSubmit"><button type="submit">Đăng ký</button></div>
                    </form>
                    </div>
                      <!--Hết phần đăng ký Events-->
                      <div class="upEvent" v-if="upcomingOne.avatar">
                          <h3>UPCOMING EVENT</h3>
                          <img :src="imagePath(upcomingOne.avatar)"class="img-fluid" alt="">
                          <h5>Chia sẻ:  {{upcomingOne.speaker}} <br> <hr> {{upcomingOne.job}}</h5>
                          <p  v-html="$options.filters.truncate(upcomingOne.description,90)"></p> 
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'event_detail',
  data () {
    return {
      id: this.$route.params.eventDetail,
      event: [],
      ticket: [],
      availbleSeat: '',
      nameEvent: '',
      telEvent: '',
      emailEvent: '',
      ticketCount: '',
      msg: '',
      upcomingOne: []
    }
  },
  created () {
    this.fetchEventData()
  },
  methods: {
    fetchEventData () {
      axios.get(`http://localhost:3000/event/` + this.id)
        .then(res => {
          let data = res.data
        //   console.log('data', data.upcomingOne)
        //   this.upcomingOne = data.upcommingOne
          data.events.start_time = moment(data.events.starttime).format('DD/MM/YYYY')
          data.events.finish_time = moment(data.events.finish_time).format('DD/MM/YYYY')
          data.events.Regisdeadine = moment(data.events.deadline).format('DD/MM/YYYY')
          data.events.start_hour = moment(data.events.starttime).format('LTS')
          data.events.finish_hour = moment(data.events.finishtime).format('LTS')
          this.ticket = data.ticket
          this.event = data.events
          this.upcomingOne = data.upcomingOne
          console.log('data.ticket', data.ticket)

          let availbleSeat = parseInt(this.event.total_ticket) - parseInt(this.ticket.sum)
          this.availbleSeat = availbleSeat
        })
        .catch(error => {
          console.log(error)
        })
    },
    imagePath (img) {
      return require('../assets/images/event/' + img)
    },
    onSubmit () {
      console.log('this.nameEvent', this.nameEvent)
      let nameEvent = this.nameEvent
      let telEvent = this.telEvent
      let emailEvent = this.emailEvent
      let ticketCount = this.ticketCount
      let eventId = this.event.id
      console.log('telEvent', telEvent)
      let data = {nameEvent, telEvent, emailEvent, ticketCount, eventId}
      axios.post(`http://localhost:3000/event/registerEvent`, {
        data
      })
        .then(res => {
          console.log('SUCCESS', res.data.msg)
          this.msg = res.data.msg
          console.log('this.msg', this.msg)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  filters: {
    truncate: function (string, value) {
      return string.substring(0, value) + '...'
    }
  }
}
</script>
<style>
#msg {
    color:red;
}
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
.ticketSubmit button{
    color: white;
    background: #ff6500;
    border: 2px solid #ff6500;
    cursor: pointer;
    margin-top: 10px
}
.ticketSubmit button:hover{
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
    text-align: center  
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
.upEvent img {
    max-width: 200px;
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
