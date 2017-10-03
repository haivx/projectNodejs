<template>
  <tabs animation="slide" :only-fade="false">
    <tab-pane label="Tất cả" selected>
      <template>
        <div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <h4 class="title">Thành viên</h4>
                <div class="table-responsive">
                  <table class="table is-bordered is-striped is-narrow">
                    <thead>
                      <tr>
                        <th >Edit</th>
                        <th>Username</th>
                        <th>Fullname  </th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Profile</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td class="is-icon tick">
                            <a href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        </td>
                        <td>
                          <span>Android</span>
                        </td>
                        <td>
                          2003
                        </td>
                        <td class="is-icon">
                          <span>hongdangtim@gmail.com</span>
                        </td>
                        <td class="is-icon">
                          <span>Admin</span>
                        </td>
                        <td class="is-icon tick">
                          <a href="#">
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="is-icon tick">
                          <a href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        </td>
                        <td>
                          <span>Firefox</span>
                        </td>
                        <td>
                          2003
                        </td>
                        <td class="is-icon ">
                          <span>hongdangtim@gmail.com</span>
                        </td>
                        <td class="is-icon ">
                          <span>Users</span>
                        </td>
                        <td class="is-icon tick">
                          <a href="#">
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                          </a>
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
    <tab-pane label="Administrator">
      Administrator
      <template>
        <div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <h4 class="title">Thành viên</h4>
                <div class="table-responsive">
                  <table class="table is-bordered is-striped is-narrow">
                    <thead>
                      <tr>
                        <th>Edit</th>
                        <th>Username</th>
                        <th>Fullname  </th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Profile</th>
                      </tr>
                    </thead>
                    <!-- <tfoot>
                      <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Fullname  </th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Profile</th>
                      </tr>
                    </tfoot> -->
                    <tbody>
                      <tr>
                        <td class="is-icon tick">
                            <a href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        </td>
                        <td>
                          <span>Android</span>
                        </td>
                        <td>
                          2003
                        </td>
                        <td class="is-icon">
                          <span>hongdangtim@gmail.com</span>
                        </td>
                        <td class="is-icon">
                          <span>Admin</span>
                        </td>
                        <td class="is-icon tick">
                          <a href="#">
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="is-icon tick">
                          <a href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        </td>
                        <td>
                          <span>Firefox</span>
                        </td>
                        <td>
                          2003
                        </td>
                        <td class="is-icon ">
                          <span>hongdangtim@gmail.com</span>
                        </td>
                        <td class="is-icon ">
                          <span>Admin</span>
                        </td>
                        <td class="is-icon tick">
                          <a href="#">
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                          </a>
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
    <tab-pane label="Users" >Users</tab-pane>
    <tab-pane label="Thùng rác" disabled>Document Tab</tab-pane>
  </tabs>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'

export default {
  components: {
    Tabs,
    TabPane
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
