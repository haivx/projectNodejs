<template>
  <tabs animation="slide" :only-fade="false">
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
      <h1>
        This is edited page
      </h1>
    </tab-pane>
  </tabs>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'

export default {
  components: {
    Tabs,
    TabPane
  },
  computed: {
    events () {
      console.log(this.$store.getters.eventDetail)
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
</style>
