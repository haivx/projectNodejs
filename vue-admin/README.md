<div align="center">
<h1>Vue Admin</h1>

<p>
  <strong>Vue Admin Panel Framework</strong>,
  <a href="https://admin.vuebulma.com">Live Demo</a>
  <p>Edit by Hai Xuan Vo</p>
</p>
</div>

## Notes
  Launch Vue Admin as a desktop application! Please check [Run Project with Electron](https://github.com/vue-bulma/vue-admin/wiki/Guide#run-project-with-electron)

[Live Demo]: https://admin.vuebulma.com/
[Fangdun Cai]: https://twitter.com/_fundon
[Vue]: http://vuejs.org
[Bulma]: http://bulma.io
[Vue-bulma]: https://github.com/vue-bulma

## Work flow

1. Gọi Axios
- Khi gọi Axios đổ data ra trang `allEvent.Vue`
```js
export default {
  computed: {
    products () {
      return this.$store.state.course
    }
  },   
  created () {
    if (this.course.length === 0) {
      this.$store.dispatch('courseDetail')
    }
  }
}
```
>> Khi component được created, nó sẽ kiểm tra state có rỗng không, nếu rỗng thì khởi chạy(`dispatch`)hàm courseDetail. Nếu `course` đã có thì nó sẽ lấy data từ hàm `getter` trong phương thức `computed`<br>
>>Khi `dispatch`, hàm courseDetail trong file `actions` sẽ thực hiện call Axios để trả về data. Trong `actions` sẽ commit một hàm để cập nhật data vào state