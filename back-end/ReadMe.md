Cấu trúc project:
├── connect  <-- connect.go kết nối với database
│   └── connect.go
├── controllers <-- chứa các controllers cho các entity
├── middlewares <-- check authenticated
├── models <-- chứ các struct tương ứng với các ctable trong database
├── routes <-- config api
├── util <-- chứa file util cho jwt
├── app.go <-- file chính
