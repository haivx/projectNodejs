# PROJECT:
The application is implemented as a SPA with the Node.js in back-end and Vuejs in front-end
>> Với mỗi request gửi lên server, server call data từ database Postgres và trả về data dưới dạng JSON qua cổng API. Client Vuejs nhận data và xử lý trước khi render dữ liệu ra màn hình.

 ### Server-side use Express js:
1. Cài đặt các package:
- App dùng `express` để tạo server, call API thông qua `axios`
- Connect Postgres thông qua `pg-promise` và dùng cú pháp `bluebird`
- Authorization dùng `passport-local` kèm theo thư viện `bcrypt` để hash password
2. Cấu trúc thư mục
- File app.js: Khai báo cơ bản server
- File pgp.js: Khai báo thông số của pg-promise
- Folder Models: Nơi chứa các function - lấy dữ liệu từ database postgres
- Folder Passport: Chứa file authorization bằng passport
- Folder routes: Điều hướng request thông qua các routes
- Folder config: Chứa thông số  kết nối với postgres
- Folder public: Chứa file tĩnh - App dùng Vue xử lý front-end nên file tĩnh sẽ được đặt ở folder Client-Vue
3. Start server:
- Truy cập folder và dùng lệnh:
```js
  npm start
```
- Server Express sẽ được chạy ở cổng `localhost:3000`
>Lưu ý: Start Postgres để start database Postgres

 ### Client-side use Vuejs - Vue Cli
1. Cấu trúc thư mục chính:
- Folder Src: Chứa source code
- Folder static: Chứa file tĩnh như `bootstrap, font-awsome, jquery, favicon`
2. Start server:
- Truy cập folder và dùng lệnh:
```js
  npm run dev
```
- Server sẽ chạy ở cổng `localhost:8080`
3. Giải thích một số nội dung chính:
- App.vue: Web-app sẽ render sẵn một số component:
  - mainMenu, header, footer, registerform, iconscroll
- Folder router: Chứa file `index.js` khai báo tất cả router được sử dụng
- Để khi chuyển router, scroll tự động lên đầu trang, khai báo thêm trong router:
```js
scrollBehavior: (to, from, savedPosition) => {
  return {x: 0, y: 0}
}
```
