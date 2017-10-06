<template>

  <tabs animation="slide" :only-fade="true">
    <tab-pane label="Tất cả">

      <template>
        <div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <h4 class="title">Tất cả bài đăng</h4>
                <div class="table-responsive">
                  <table class="table is-bordered is-narrow">
                    <thead>
                      <tr>
                        <th class="is-2"> STT</th>
                        <th>Tiêu đề</th>
                        <th>Ngày đăng  </th>
                        <th class="is-2">Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody v-for="(item,index) in events" :key="item.index">
                      <tr>
                        <td class="is-icon tick">
                          {{index + 1}}
                        </td>
                        <td>
                          <span>{{item.title}}</span>
                        </td>
                        <td>
                          {{item.date_post}}
                        </td>
                        <td class="is-icon">
                          <router-link :to="{path:`/edit/${item.title}`}"><i class="fa fa-pencil" aria-hidden="true"></i></router-link>
                        </td>
                        <td class="is-icon">
                           <i class="fa fa-trash-o" aria-hidden="true" @click="triggerTF(index = item.id)"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </div>
</template>
    </tab-pane>
    <tab-pane label="Đã đăng">
      <template>
        <div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <h4 class="title"  >Tất cả bài đăng</h4>
                <div class="table-responsive">
                  <table class="table is-bordered is-narrow">
                    <thead>
                      <tr>
                        <th class="is-2"> STT</th>
                        <th>Tiêu đề</th>
                        <th>Ngày đăng  </th>
                        <th class="is-2">Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in events" :key="item.index">
                        <td class="is-icon tick">
                        </td>
                        <td>
                          <span>{{item.title}}</span>
                        </td>
                        <td>
                          2003
                        </td>
                        <td class="is-icon">
                            <a href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        </td>
                        <td class="is-icon">
                          <a href=""> <i class="fa fa-trash-o" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </div>
</template>
      </tab-pane>
    <tab-pane label="Bản nháp" >
    <ul v-for="item in events">
      <li> {{item.title}}</li>
    </ul>
    </tab-pane>
    <tab-pane label="Sửa sự kiện">
      <h1 >
        This is edited page
      </h1>
      <button @click="triggerTF">123</button>
    </tab-pane>
  <div>
    <modal :visible="activated" transition="roll" @close="close">
      <div id="modal123">
        <p> Are you sure to delete this event?</p>
        <button class="button is-primary" @click="deleteEvent()">Delelte</button>
      </div>
    </modal>
  </div>
  </tabs>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import { Modal } from 'vue-bulma-modal'
export default {
  components: {
    Tabs,
    TabPane,
    Modal
  },
  data () {
    return {
      activated: false,
      indexDelete: ''
    }
  },
  methods: {
    triggerTF (index) {
      this.indexDelete = index
      this.activated = true
    },
    close () {
      this.$emit('close')
      this.activated = false
    },
    deleteEvent () {
      let payload = this.indexDelete
      // console.log('Bo delete thang index nha', payload)
      this.$store.dispatch('removeEvent', payload)
      this.activated = false
    }
  },
  computed: {
    events () {
      // console.log(this.$store.getters.eventDetail)
      return this.$store.getters.eventDetail
    }
  },
  created () {
    if (this.events.length === 0) {
      this.$store.dispatch('eventDetail')
    }
  }
}
</script>
<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
.tick {
  text-align: center
}
thead  > tr > th{
  font-size: 2 rem;
}
.table th {
    text-align: center
}
#modal123 {
  background:white;
  padding: 30px;
}
#modal123 p {
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: bold
}
i.fa-trash-o {
  color: #00d1b2;
  cursor: pointer;
}
</style>
