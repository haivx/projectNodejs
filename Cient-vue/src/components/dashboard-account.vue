<template>
  <div>
    <div class="wrapper">
      <h3>Thành viên</h3>

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-expanded="true">All users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-expanded="true">Administrator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-profile-tab2" data-toggle="pill" href="#pills-profile2" role="tab" aria-controls="pills-profile2" aria-expanded="true">Users</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="btn-group">
            <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect1">
              <option selected>Action</option>
              <option value="11">Delete</option>
            </select>
            <button type="button" class="btn ">Apply</button>
            <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
              <option selected>Change Role</option>
              <option value="1">Administrator</option>
              <option value="2">Moderator</option>
              <option value="3">Users</option>
            </select>
            <button type="button" class="btn ">Change</button>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox"></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"></th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"></th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore. Accusamus numquam unde aliquam nostrum soluta nisi id voluptate ipsam!</p>
                  <div class="btn-group">
            <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect1">
              <option selected>Action</option>
              <option value="11">Delete</option>
            </select>
            <button type="button" class="btn ">Apply</button>
            <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
              <option selected>Change Role</option>
              <option value="1">Administrator</option>
              <option value="2">Moderator</option>
              <option value="3">Users</option>
            </select>
            <button type="button" class="btn ">Change</button>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox"></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"></th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"></th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">...
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore. Accusamus numquam unde aliquam nostrum soluta nisi id voluptate ipsam!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-group button {
  margin-left: 3px;
  background:#30b08f;
  color: white;
  cursor: pointer;
}
#inlineFormCustomSelect{
  margin-left: 5px
}
.wrapper {
  margin: 20px
}

.wrapper ul li {
  margin: 5px;
}

.wrapper ul li a:hover {
  text-decoration: none
}

.wrapper .nav-pills li a.active {
  background: #324157
}

#action select {
  background: white;
  padding: 2px;
  margin-bottom: 8px;
}

#action button {
  padding: 2px;
  margin: 8px;
}
</style>
