<template>
  <form class="box" @submit.prevent="submitOK" method="POST">
    <h3 class="title">
      Nội dung chính
    </h3>
    <p class="control">
      <input class="input is-primary" type="text" placeholder="Tiêu đề" :value="editEvent1.title"  @input="updateEvent('title',$event)" >
    </p>
    <quill :options="{ theme: 'snow' }" v-if="editEvent1.contents">
      <span v-html="editEvent1.contents"></span>
    </quill><br>
    <article class="tile is-child box">
      <h1 class="title">Thông tin bổ sung</h1>
      <div class="columns">
        <div class="column">
          <div class="control">
            <label class="label">Họ tên diễn giả</label>
            <input class="input"  :value="editEvent1.speaker" @input="updateEvent('updateSpeaker',$event)"></input>
          </div>
          <div class="control">
            <label class="label">Địa điểm tổ chức sự kiện</label>
            <input class="input"  :value="editEvent1.address" @input="updateEvent('updateAddress',$event)"></input>
          </div>
          <div class="control">
            <label class="label">Chức danh</label>
            <input class="input" :value="editEvent1.job" @input="updateEvent('updateJob',$event)"></input>
          </div>
        </div>
        <div class="column">
          <div class="control">
            <label class="label">Thời gian bắt đầu sự kiện</label>
            <Datepicker ref="date1" placeholder="American Format ('m/d/Y')" :value="editEvent1.finishtime"   :config="{ dateFormat: 'm/d/Y' }"></Datepicker>
          </div>
          <div class="control">
            <label class="label">Thời gian kết thúc sự kiện</label>
            <Datepicker placeholder="American Format ('m/d/Y')" :value="editEvent1.starttime"  :config="{ dateFormat: 'm/d/Y' }"></Datepicker>
          </div>
          <div class="control">
            <!-- <label class="label">Địa điểm tổ chức sự kiện</label>
                  <input class="input" :value="editEvent.address"></input> -->
          </div>
        </div>
        <div class="column">
          <div class="control">
            <label class="label">Mô tả ngắn về sự kiện</label>
            <textarea class="textarea" :value="editEvent1.description" @input="updateEvent('updateDescription',$event)"></textarea>
          </div>
        </div>
      </div>
    </article>
    <article class="tile box">
      <div class="column">
        <div class="control">
            <div class="file-upload-form">
                Upload hình nền:
                <input type="file" @change="previewImage1" accept="image/*" @input="updateEvent('updatepicture1',$event)">
                <img v-if="!imageData && editEvent1.background_image" class="preview-big" :src="''+ URLBASE + '' + editEvent1.background_image+ ''" alt="">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview-big" :src="imageData">
            </div>
        </div>
      </div>
      <div class="column">
        <div class="control">
            <div class="file-upload-form">
                Upload ảnh diễn giả:
                <input type="file" @change="previewImage2" accept="image/*" @input="updateEvent('updatepicture2',$event)">
                <img v-if="!imageBg && editEvent1.avatar" class="preview" :src="''+ URLBASE + '' + editEvent1.avatar+ ''" alt="">
            </div>
            <div class="image-preview" v-if="imageBg.length > 0">
                <img class="preview" :src="imageBg">
            </div>
        </div>
      </div>
    </article>
    <button class="button is-primary" type="submit" id="submit">Đăng sự kiện</button>
  </form>
</template>

<script>
import Quill from 'vue-bulma-quill'
import Datepicker from 'vue-bulma-datepicker'
export default {
  components: {
    Quill,
    Datepicker: Datepicker
  },
  data () {
    return {
      title: '',
      rawValue: '',
      value: '2016-12-12',
      imageData: '',
      imageBg: '',
      URLBASE: 'http://localhost:3000/public/assets/images/event/',
      updateObj: {},
      updateEventObj: {}
    }
  },
  created () {
    let title = this.$route.params.id
    // console.log('params', title)
    return this.$store.dispatch('editEvent', title)
  },
  computed: {
    editEvent1 () {
      // console.log('this.$store.getters.editEvent', this.$store.getters.editEvent)
      return this.$store.getters.editEvent
    },
    today () {
      return new Date()
    },
    maxDate () {
      let d = new Date()
      d.setDate(32)
      return d
    },
    placeholder () {
      return `minDate: today, maxDate: ${this.maxDate.getFullYear()}-${this.maxDate.getMonth() + 1}-${this.maxDate.getDate()}`
    }
  },
  methods: {
    previewImage1: function (event) {
        // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new window.FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
          this.imageData = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    },
    previewImage2: function (event) {
        // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new window.FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageBg" refers to the imageBg of Vue component
            // Read image as base64 and set to imageBg
          this.imageBg = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    },
    updateEvent (attribute, e) {
      this.updateObj[attribute] = e.target.value
      console.log('this.updateObj', this.updateObj)
    },
    submitOK () {
      console.log('this.$refs', this.$refs.date1.value)
      var finalEventObj = Object.assign({}, this.updateObj)
      console.log('UPDATE_EVENT', finalEventObj)
      this.$store.commit('UPDATE_EVENT', finalEventObj)
      console.log('this.$store.state.events', this.$store.state.events)
    }
  }
}
</script>

<style lang="styl">
@import "~quill/assets/snow";
.tile.is-parent {
  min-width: 50%;
}

#submit {
  margin: 10px;
    border: 2px solid #00d1b2;
      font-weight: bold
}
#submit:hover{
  background: white;
  border: 2px solid #00d1b2;
  color: #00d1b2;
  font-weight: bold
}
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
    text-align: center
}
img.preview {
     max-width:250px;
    /* height: auto; */
    margin-top:20px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
img.preview-big {
     max-width: 550px;
    /* max-height: 150px; */
    margin-top:20px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>
