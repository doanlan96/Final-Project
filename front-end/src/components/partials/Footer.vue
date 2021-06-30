<template>
<!-- <footer class="footer">
  <div class="policy">
       <router-link to="/policy" class="footer-item">Policy and Shipping</router-link>
  </div>
  <div class="boCongthuong"> 
      <a href="http://online.gov.vn/Home/WebDetails/70262">
      <img width="600" height="227" src="https://goldievietnam.com/wp-content/uploads/2020/09/logoSaleNoti.png" class="attachment-large size-large perfmatters-lazy loaded" alt="" data-src="https://goldievietnam.com/wp-content/uploads/2020/09/logoSaleNoti.png" loading="lazy" data-was-processed="true">
      </a>
  </div>
  <div class="content has-text-centered">
    <p>
        Copyright © 2020 GOLDIE Studio. Powered by Sapo
    </p>
  </div>
</footer> -->
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Shop</h3>
                        <ul>
                            <li><router-link to="/shop" class="footer-item">Shop now</router-link></li>
                            <li><router-link to="/about" class="footer-item">About us</router-link></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Policy</h3>
                        <ul>
                            <li><router-link to="/policy" class="footer-item"><a href="#">Policy and Shipping</a></router-link></li>
                            <li><router-link to="/policy" class="footer-item">Policy and Shipping</router-link></li>
                            <li><router-link to="/policy" class="footer-item">Policy and Shipping</router-link></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>
                            <a href="http://online.gov.vn/Home/WebDetails/70262">
                            <img width="150" height="22" src="https://goldievietnam.com/wp-content/uploads/2020/09/logoSaleNoti.png" 
                            alt="" data-src="https://goldievietnam.com/wp-content/uploads/2020/09/logoSaleNoti.png" loading="lazy" 
                            data-was-processed="true">
                            </a>
                        </h3>
                        <p>Công ty TNHH Goldie Việt Nam GPKD số 0109285681 do Sở KH và ĐT – TP Hà Nội cấp ngày 28/07/2020 GĐ/Sở hữu website Lê Thế Hoàng Linh Địa Chỉ: Số 78, Kim Ngưu, Phường Thanh Nhàn, Quận Hai Bà Trưng, Thành Phố Hà Nội, Việt Nam.</p>
                    </div>
                    <div class="col item social"><a href="https://www.facebook.com/goldievietnam"><i class="icon ion-social-facebook"></i></a><a href="https://www.instagram.com/goldievietnam/"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright1">GOLDIE Vietnam © 2020</p>
            </div>
        </footer>
    </div>

</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
    // .footer {
    //     // margin-top: auto;
    //     // padding-bottom: auto;
    // margin-top: 50px;
    // }
.footer-dark {
  margin-top: 50px;
  padding:50px 0;
  color: black;
  background-color:beige;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:black;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

 .copyright1 {
  text-align:center;
  color: black;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}
</style>