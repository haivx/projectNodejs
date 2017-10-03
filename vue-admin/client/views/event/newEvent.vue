<template>
  <form class="box">
    <h3 class="title">
      Nội dung chính
    </h3>
    <p class="control">
      <input class="input is-primary" type="text" placeholder="Tiêu đề" >
    </p>
    <quill :options="{ theme: 'snow' }">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi obcaecati vitae libero non, sint nulla! Enim perferendis pariatur distinctio rem.</p>
    </quill><br>
    <article class="tile is-child box">
      <h1 class="title">Thông tin bổ sung</h1>
      <div class="columns">
        <div class="column">
          <div class="control">
            <label class="label">Họ tên diễn giả</label>
            <input class="input" ></input>
          </div>
          <div class="control">
            <label class="label">Địa điểm tổ chức sự kiện</label>
            <input class="input"></input>
          </div>
          <div class="control">
            <label class="label">Chức danh</label>
            <input class="input" ></input>
          </div>
        </div>
        <div class="column">
          <div class="control">
            <label class="label">Thời gian bắt đầu sự kiện</label>
            <Datepicker placeholder="American Format ('m/d/Y')"  :config="{ dateFormat: 'm/d/Y' }"></Datepicker>
          </div>
          <div class="control">
            <label class="label">Thời gian kết thúc sự kiện</label>
            <Datepicker placeholder="American Format ('m/d/Y')"  :config="{ dateFormat: 'm/d/Y' }"></Datepicker>
          </div>
          <div class="control">
            <!-- <label class="label">Địa điểm tổ chức sự kiện</label>
                  <input class="input" :value="editEvent.address"></input> -->
          </div>
        </div>
        <div class="column">
          <div class="control">
            <label class="label">Mô tả ngắn về sự kiện</label>
            <textarea class="textarea" ></textarea>
          </div>
        </div>
      </div>
    </article>
    <article class="tile box">
      <div class="column">
        <div class="control">
            <div class="file-upload-form">
                Upload hình nền:
                <input type="file" @change="previewImage1" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
        </div>
      </div>
      <div class="column">
        <div class="control">
            <div class="file-upload-form">
                Upload ảnh diễn giả:
                <input type="file" @change="previewImage2" accept="image/*">
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
      imageBg: ''
    }
  },
  computed: {
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
}

.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    max-width: 500px;
    max-height: 300px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>
