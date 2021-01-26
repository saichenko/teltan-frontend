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
          <li><a class="dropdown-trigger big-font" ref="dropdown1" data-target="dropdown1">
            {{ getUser.username }}&nbsp<img class="circle responsive-img"
                                            :src="'http://localhost:8000' + getUser.profile.picture" width="40"></a>
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

    <footer class="page-footer grey darken-2">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
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
      constrainWidth: false
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
