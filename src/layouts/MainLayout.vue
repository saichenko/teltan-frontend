<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__body">
          <router-link to="/" class="header__logo">
            <img src="@/assets/images/logo.png" alt="Teltan">
          </router-link>
          <nav class="header__menu">
            <router-link to="/" class="header__link">Home</router-link>
            <router-link to="/catalog" class="header__link">Catalog</router-link>
            <a href="#" class="header__link">Contact</a>
            <a href="#" class="header__link">About</a>
          </nav>
          <div class="header__content">
            <div class="header__item item-user">
              <img src="@/assets/images/icons/user-avatar.svg" alt="User">
              <div class="item-user__block">
                <div class="item-user__header">
                  <div class="item-user__icon"><img src="@/assets/images/icons/user.svg" alt="User avatar"></div>
                  <div class="item-user__name">User-name</div>
                </div>
                <a href="profile.html" class="item-user__link">Profile</a>
                <a href="#" class="item-user__link">History</a>
                <a href="#" class="item-user__link">sign out</a>
              </div>
            </div>
            <div class="header__item item-balance">
              <img src="@/assets/images/icons/wallet.svg" alt="Balance">
              <div class="item-balance__block">
                <div class="item-balance__title">balance: <img src="@/assets/images/icons/coins.svg" alt=""> 10.0</div>
                <div class="item-balance__text">Tenete ergo quod si servitus quae natura liber, et aliena
                  tua tunc impedilur. Dolebis, et turbabuntur
                </div>
                <div class="item-balance__block-control">
                  <a href="#" class="item-balance__link btn"><span>add</span></a>
                  <div class="item-balance__rate">1 <img src="@/assets/images/icons/coins-icon.svg" alt=""> = 1$</div>
                  <a href="#" class="item-balance__link btn"><span>withdraw</span></a>
                </div>
              </div>
            </div>
            <a href="#declaration" class="header__item pl"><img src="@/assets/images/icons/basket.svg" alt="Basket"></a>
            <a href="#" class="header__item"><img src="@/assets/images/icons/email.svg" alt="Email"></a>
          </div>
          <div class="icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>

    <router-view/>

    <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming
              programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code
              wants to be simple. We will help programmers build up concepts in different programming languages that
              include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
              <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
<!--    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>-->

  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<style scoped>

</style>
