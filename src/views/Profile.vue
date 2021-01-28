<template>
  <div class="container">
    <p class="flow-text teal-text">
      <router-link to="/">Home</router-link>
      <i class="material-icons" style="vertical-align: -4px;">keyboard_arrow_right</i> My Profile</p>
    <div class="row">
      <div class="col s12 m4 l6 xl5">
        <div class="card" style="width:300px">
          <div class="card-image">
            <img :src="'http://localhost:8000' + getUser.profile.picture">
          </div>
          <div class="card-action">
            <h5><b>{{ getUser.first_name }} {{ getUser.last_name }}</b></h5>
            <a href="#">Profile settings</a>
          </div>
        </div>
        <div class="card blue-grey darken-1" style="width:300px">
          <div class="card-content white-text">
                    <span class="card-title">
                        <b>Your balance {{ getBalance }}₪</b>
                    </span>
            <p>You can spend this money on buying items and taking part in draws.</p>
          </div>
          <div class="card-action">
            <a href="#">Add money</a>
            <a href="#">Transactions</a>
          </div>
        </div>
      </div>
      <div class="col s12 m12 l12 xl6">
        <div class="row">
          <div class="col s12 l12">
            <ul class="tabs">
              <li class="tab col s4"><a class="active" href="#test1">My Posts</a></li>
              <li class="tab col s4"><a href="#test2">Participating Now</a></li>
              <li class="tab col s4"><a href="#test3">Hello</a></li>
            </ul>
          </div>
          <div class="row" id="test1">
            <ul class="collection" v-if="userPosts">
              <li class="collection-item avatar" v-for="product in userPosts">
                <img :src="product.main_image" class="circle">
                <span class="title"><router-link :to="`/product/${product.id}`"><b>{{ product.name }}</b></router-link> <i class="green-text">• {{ product.price }}</i></span>
                <p v-if="product.is_draw">Redeemed {{product.redemption_percent}}%</p>
                <p v-else>Advertisment</p>
              </li>
            </ul>
            <p class="flow-text" v-else>You have not created any posts yet</p>
          </div>
          <div class="row" id="test2"></div>
          <div class="row" id="test3"></div>
          <p>{{userPosts}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Vue from "vue";

export default {
  name: "Profile",
  data() {
    return {
      userPosts: undefined
    }
  },
  computed: mapGetters(['getUser', 'getBalance']),
  methods: {
    ...mapActions(['fetchBalance'])
  },
  async mounted() {
    Vue.axios.get('api/product/?user=' + this.getUser.id)
      .then((resp) => {
        this.userPosts = resp.data.results
      })

    $(document).ready(function () {
      $('.tabs').tabs({swipeable: true});
    });

    await this.fetchBalance()
  },
}
</script>

<style scoped>
/*div {*/
/*  border: 1px solid #000000;*/
/*}*/
.tabs .tab a {
  color: teal;
}

.tabs .tab a:focus, .tabs .tab a:focus.active {
  background-color: #e2f6f6;
  outline: none;
}

.tabs .tab a:hover, tabs .tab a:active, .tabs .tab a.active {
  background-color: transparent;
  color: #008080;
}

.tabs .tab.disabled a, .tabs .tab.disabled a:hover {
  color: rgba(102, 147, 153, 0.7);
}

.tabs .indicator {
  background-color: teal;
}
/*i {*/
/*  vertical-align: -4px;*/
/*}*/
</style>
