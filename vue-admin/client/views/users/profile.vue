<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Thông tin cá nhân</h1>
          <div class="block">
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
            <label class="label">Username</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small">
                <i class="fa fa-check"></i>
              </span>
              <span class="help is-success">This username is available</span>
            </p>
            <label class="label">Điện thoại</label>
            <p class="control">
              <input class="input" type="text" placeholder="telephone">
            </p>
            <label class="label">Mật khẩu</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-success" type="password" placeholder="password " value="password">
              <span class="icon is-small">
                <i class="fa fa-check"></i>
              </span>
            </p>            
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
              <span class="icon is-small">
                <i class="fa fa-warning"></i>
              </span>
              <span class="help is-danger">This email is invalid</span>
            </p>
            <p class="control">
              <button class="button is-primary">Cập nhật hồ sơ</button>
              <button class="button is-link">Cancel</button>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.cn'

export default {
  components: {
    Cleave
  },

  data () {
    return {
      demo: {
        value: '',
        rawValue: ''
      }
    }
  },

  methods: {
    onRawValueChanged (newVal) {
      this.demo.rawValue = newVal
    }
  },

  watch: {
    'demo.value' (newVal, oldVal) {
      console.log('value: new ->', newVal, 'old ->', oldVal)
    },
    'demo.rawValue' (newVal, oldVal) {
      console.log('rawValue: new ->', newVal, 'old ->', oldVal)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}

.control.has-addons {
  @include mobile() {
    input {
      width: 100%;
    }

    input.is-expanded {
      flex-shrink: 1;
    }
  }
}
.is-ancestor {
    justify-content: center;
}
</style>
