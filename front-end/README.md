# front-end

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Cấu trúc project:
-public: + index.hml
-src: - assets - chứa ảnh của trang web
      - components - login - ForgotPassword.vue
                           - Login.vue
                           - Signup.vue
                   - partials - Nav.vue
                              - Footer.vue
                   - EventCard.vue : hiển thị 1 sản phẩm
                   - EventListShop.vue: hiển thị danh sách sản phâm trong view Shop
                   - EventsList.vue: hiển thị danh sách best seller trên view Home
       - router - index.js - config router
       - store - index.js - config vueX store
       - views - About.vue - trang about
               - Cart.vue - trang giỏ hàng
               - EventSingle.vue - trang hiển thị detail sản phẩm
               - Home.vue - trang chủ
               - PolicyShipping.vue - trang hiển thị thêm thông tin về chính sách
               - Shop.vue - trang shopping
        - App.vue
        - main.js

