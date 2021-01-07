<template>
  <div>
    <nav>
      <div class="nav-wrapper teal lighten-3">
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <router-link to="/profile">My Profile</router-link>
          </li>
          <li>
            <router-link to="/additem">Publish an ad</router-link>
          </li>
          <li><a href="#!">History</a></li>
          <li class="divider"></li>
          <li><a v-on:click="logout">Logout</a></li>
        </ul>

        <router-link to="/"><img class="brand-logo left nav-logo" src="@/assets/images/logo.png" width="250px">
        </router-link>
        <ul class="hide-on-med-and-down" style="margin-left: 30%">
          <li>
            <router-link to="/" class="big-font">Home</router-link>
          </li>
          <li>
            <router-link to="/catalog" class="big-font">Catalog</router-link>
          </li>
          <li>
            <router-link to="/about" class="big-font">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="big-font">Contact</router-link>
          </li>
          <li v-if="getUser">
            <router-link to="/additem" class="big-font">Publish an ad</router-link>
          </li>
        </ul>
        <ul class="right hide-on-med-and-down" v-if="getUser">
          <li>
            <router-link to="/messages"><i class="material-icons" style="font-size: 35px; vertical-align:middle;">account_balance_wallet</i>
            </router-link>
          </li>
          <li>
            <router-link to="/cart"><i class="material-icons"
                                           style="font-size: 35px; vertical-align:middle;">shopping_cart</i>
            </router-link>
          </li>
          <li><a class="dropdown-trigger" ref="dropdown1" data-target="dropdown1"><p class="big-font">
            {{ getUser.username }}&nbsp<img class="circle responsive-img"
                                            :src="'http://localhost:8000' + getUser.profile.picture" width="40"></p></a>
          </li>
        </ul>
        <ul v-else class="right hide-on-med-and-down">
          <li>
            <router-link to="/login" class="big-font">Login</router-link>
          </li>
          <li>
            <router-link to="/register" class="big-font">Sign up</router-link>
          </li>
        </ul>
        <a href="#" data-target="mobile-demo" class="right sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul>

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
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'main',
  computed: mapGetters(['getUser']),
  methods: {
    ...mapActions(['logout'])
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdown1, {
      coverTrigger: false,
    })
  }
}
</script>

<style scoped>
.big-font {
  font-weight: bold;
  font-size: 20px;
}

.nav-logo {
  padding: 6px;
  margin-left: 2px;
}

</style>
