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
├── public  <-- Chứa file index.html cho cả trang web
│   └── index.html
├── src <-- chứa source code chính
|     ├── assets <-- chứa ảnh
|     ├── components
|     |       ├── login <-- chứa các component của phần login đăng kí
|     |       ├── partials <-- chứa Nav và Footer
|     |       ├── EventCard.vue <-- hiển thị 1 sản phẩm 
|     |       ├── EventListShop.vue <-- hiển thị danh sách sản phẩm trong danh mục Shop
|     |       ├── EventsList.vue <-- hiển thị danh sách sản phẩm đang hot
|     ├── router
|     |      ├──  index.js <-- config router
|     ├── store   
|     |      ├── index.js <-- config store vuex
|     ├── views
|     |      ├── About.vue <-- trang about
|     |      ├── Cart.vue  <-- trang giỏ hàng 
|     |      ├── EventSingle.vue <-- trang hiển thị chi tiết sản phẩm
|     |      ├── Home.vue   <-- trang chủ
|     |      ├── PolicyShipping.vue <-- trang hiển thị chính sách
|     |      ├── Shop.vue   <-- trang hiển thị danh sách sản phẩm 
|     ├── App.vue
|     ├── main.js
