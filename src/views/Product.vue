<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <div class="col l12">
          <h4> {{ product.name }} <i class="green-text">• {{ product.price }}₪</i></h4>
          <small style="font-size: 22px"><i
            class="material-icons prefix">remove_red_eye</i> {{ product.viewed }} &nbsp&nbsp&nbsp<i
            class="material-icons prefix">date_range
          </i> {{ product.created|formatDate }}&nbsp&nbsp&nbsp<b>ID:</b> {{ product.id }}</small>
        </div>
      </div>
      <div class="col l8 m12 s12">
        <hr>
        <div class="row">
          <div class="col l12 m12 s12">
            <div class="fill">
              <img :src="product.main_image" style="max-width: 630px; max-height: 630px">
            </div>
          </div>
        </div>
        <div class="row" v-if="product.is_draw">
          <hr>
          <div class="col l12 s12">
            <p class="flow-text center">Redeemed {{ product.redemption_percent }}%</p>
            <div class="progress z-depth-2" style="height: 23px; padding: 0;">
              <div class="determinate" v-bind:style="{'width': product.redemption_percent + '%'}"></div>
            </div>
          </div>
          <div class="row">
            <div class="col l12 s12">
              <div class="col s4 l4 center">Tickets amount: {{ product.tickets_amount }}</div>
              <div class="col s4 l4 center">You bought: 0 (0%)</div>
              <div class="col s4 l4 center">Tickets bought: {{ product.tickets_bought }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col l4 m6 s6 center offset-m3 offset-l4 offset-s3">
              <button class="waves-effect btn green z-depth-1">Become a sponsor</button>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col l12">
            <p style="font-size: 20px">{{ product.description }}</p>
          </div>
        </div>
      </div>
      <div class="col l4 s12 m12">
        <div class="row">
          <div class="col offset-m4 offset-l2 offset-s3">
            <div>
              <img :src="product.user.profile.picture" class="circle responsive-img" width="210">
            </div>
            <div class="center">
              <p class="flow-text">{{ product.user.username }}</p>
              <button class="btn waves-effect waves-light btn-" type="submit" name="action">
                CONTACT USER
              </button>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col l12 m12 s12 center">
            <h2 class="green-text" v-if="product.is_draw"><b>Draw</b></h2>
            <h4 class="green-text" v-else><b>Advertisement</b></h4>
            <ul style="font-size: 22px;">
              <li><b>ID:</b> {{ product.id }}</li>
              <li><b>Price:</b> {{ product.price }}&#8362;</li>
              <li><b>Year:</b> {{ product.year }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})
Vue.use(VueAxios, axios)

export default {
  name: 'Profile',
  props: ['website'],
  data() {
    return {
      product: undefined,
      productImages: undefined,
      user: undefined,
      redemption: undefined,
    }
  },
  created() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
  },
  mounted() {
    Vue.axios.get(this.website + 'api/product/' + this.$route.params.id)
      .then((resp) => {
        this.product = resp.data
      })
    Vue.axios.get(this.website + 'api/product-image/?product=' + this.$route.params.id)
      .then((resp) => {
        this.productImages = resp.data.results
      })
  },
  computed: {
    formatted() {
      return Vue.filter('date')(this.value)
    }
  },
  methods: {
    testClick: function () {
      console.log('Testklick-Call');
      $('#modal1').modal('open');
    },
    init() {
      $(document).ready(() => {
        let elem = document.querySelector(`#modal1`);
        this.instance = M.Modal.init(elem, {
          onOpenStart: () => {
            this.show();
          },
          onCloseEnd: () => {
            this.resetForm();
          }
        });
      });
    }
  }
}
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: content-box;
}

.fill {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}

.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%
}

/*div {*/
/*  border: 1px solid #000000;*/
/*}*/

i {
  vertical-align: -4px;
}

</style>
