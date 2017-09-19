<template>
  <div class="container" id="sukien">
    <div class="row ">
    </div>
    <div class="row " id="eventItem">
      <div class="col-xs-12 col-lg-12 col md-12">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item ">
            <a class="nav-link " data-toggle="tab" href="#date1" role="tab">
              HAPPENING
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#date2" role="tab">
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
          <div class="tab-pane " id="date1" role="tabpanel" v-if="happening">
            <div class="row event1" v-for="items in happening" :key="items.id">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">{{items.start_date}}</span>
                <span class="month">Tháng {{items.start_month}}</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3><a href=""><router-link :to="`event/${item.title}`">{{item.title}}</router-link></a></h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>{{items.start_hours}} - {{items.finish_hours}}</span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>{{items.address}}</span>
                  <hr>
                  <p>{{items.description}}</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img :src="imagePath(items.background_image)" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-xs-12 col-md-12 col-lg-12">             
                 <div class="dangkyEvent ">
               <router-link to="sinh-hoat-clb-ngoai-ngu-vi-cong-dong"> <div class="btn btn-danger">Tìm hiểu thêm</div></router-link>
              </div>
              </div>
            </div>
          </div>
          <div class="tab-pane active" id="date2" role="tabpanel" v-if="upcoming">
            <div class="row event1" v-for="item in upcoming" :key="item.id">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">{{item.start_date}}</span>
                <span class="month">Tháng {{item.start_month}}</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3><a href=""> <router-link :to="`event/${item.title}`">{{item.title}}</router-link></a></h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>{{item.start_hours}} - {{item.finish_hours}}</span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>{{item.address}}</span>
                  <hr>
                  <p>{{item.description}}</p>
                  <router-link :to="`event/${item.title}`"><input type="button" class="btn btn-primary" value="Xem thêm"></router-link>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img :src="imagePath(item.background_image)" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane " id="date3" role="tabpanel" v-if="expired">
            <div class="row event1" v-for="item in expired" :key="item.id">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <span class="date">{{item.start_date}}</span>
                <span class="month">Tháng {{item.start_month}}</span>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div id="eventContent">
                  <h3><a href=""><router-link :to="`event/${item.title}`">{{item.title}}</router-link></a></h3>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>{{item.start_hours}} - {{item.finish_hours}} </span>
                  <br>
                  <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  <span>{{item.address}}</span>
                  <hr>
                  <p>{{item.description}}</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="eventImg">
                  <img :src="imagePath(item.background_image)" class="img-fluid" alt="">
                </div>
              </div>            
            </div>
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
  data () {
    return {
      happening: [],
      upcoming: [],
      expired: []
    }
  },
  created () {
    document.title = 'Tin tức - sự kiện'
    const BaseUrl = 'http://localhost:3000/'
    axios.get(`${BaseUrl}sukien`)
      .then(res => {
        res.data.expired.map(item => {
          item.start_date = moment(item.starttime).format('DD')
          item.start_month = moment(item.starttime).format('MM')
          item.start_hours = moment(item.starttime).format('LT')
          item.finish_hours = moment(item.finishtime).format('LT')
        })
        res.data.happening.map(item => {
          item.start_date = moment(item.starttime).format('DD')
          item.start_month = moment(item.starttime).format('MM')
          item.start_hours = moment(item.starttime).format('LT')
          item.finish_hours = moment(item.finishtime).format('LT')
        })
        res.data.upcoming.map(item => {
          item.start_date = moment(item.starttime).format('DD')
          item.start_month = moment(item.starttime).format('MM')
          item.start_hours = moment(item.starttime).format('LT')
          item.finish_hours = moment(item.finishtime).format('LT')
        })
        this.happening = res.data.happening
        this.upcoming = res.data.upcoming
        this.expired = res.data.expired
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    imagePath: function (img) {
      return require('../assets/images/event/' + img)
    }
  }
}
</script>
<style>
#sukien {
  margin-top: 150px;
  margin-bottom: 20px;
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
  margin-top: 20px;
}
#eventContent a:hover {
  text-decoration: none
}
#eventContent .fa {
  margin-right: 10px;
  color: #ff6500
}

#eventContent h3 {
  font-weight: bold
}
#eventContent .btn {
  background:#ff6500;
  color: white; 
  border: none;
  margin-bottom: 5px;
}
#eventContent .btn:hover{
  background: #f27422;
  cursor: pointer;
}
.eventImg {
  margin: 20px auto;
}

.event1 {
  border-bottom: 1px solid black
}
</style>

