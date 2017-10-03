<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Danh sách contact</h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ tên</th>
                  <th>Điện thoại </th>
                  <th>Email</th>
                  <th>Năm sinh</th>
                  <th>Nơi công tác</th>
                  <th>Chương trình học quan tâm</th>
                  <th>Ngày đăng ký</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="is-icon tick">
                    <a href="">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                  </td>
                  <td>
                    <span>Nguyen Hong Dang</span>
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
                  <td>
                    <p>Tieng anh giao tiep 0 dong</p>
                  </td>
                  <td>
                    <p>2017/08/05</p>
                  </td>
                </tr>
                <tr>
                  <td class="is-icon tick">
                    <a href="">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                  </td>
                  <td>
                    <span>Le Hoang Anh</span>
                  </td>
                  <td>
                    098983889
                  </td>
                  <td class="is-icon ">
                    <span>hongdangtim@gmail.com</span>
                  </td>
                  <td class="is-icon ">
                    <span>Cong ty TNHH mot thanh vien Hoang Gia</span>
                  </td>
                  <td class="is-icon tick">
                    <a href="#">
                      <i class="fa fa-address-book" aria-hidden="true"></i>
                    </a>
                  </td>
                  <td>
                    <p>Tieng anh giao tiep 0 dong</p>
                  </td>
                  <td>
                    <p>2017/08/05</p>
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
                  <th>Fullname </th>
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
                    <a href="">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
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
                    <a href="">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
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

thead>tr>th { 
  font-size: 2 rem;
}

.table th {
  text-align: center
}
</style>
