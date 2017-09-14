<template>
    <div class="events">
            <h1>Hello World</h1>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'dynamicRoute',
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    document.title = 'Trang chủ'
    // retrieve data from server
    axios.get(`http://localhost:3000/event-detail/` + this.id)
    .then(res => {
      console.log(res)
    })
      .catch(error => {
        console.error(error)
      })
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

