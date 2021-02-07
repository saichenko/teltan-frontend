<template>
  <div>
    <section class="banner">
      <div class="banner__row">
        <div class="banner__info info-banner">
          <div class="info-banner__percent">95%</div>
          <div class="info-banner__time"><img src="@/assets/images/icons/clock.svg"> time left</div>
        </div>
        <div class="banner__image">

          <a href="#noMoney" class="banner__button btn pl"><span>Become a sponsor</span></a>
        </div>
      </div>
    </section>

    <main class="main">
      <div class="container">
        <div class="main__content">
          <div class="main__item item-main" v-for="product in allProducts" v-bind:key="product.id">
            <div class="item-main__wrap">
              <div class="item-main__content">
                <div class="item-main__image">
                  <div class="item-main__user">
                    <img :src="product.user.profile.picture" :alt="product.user.username">
                  </div>
                  <div class="item-main__rating">
                    <img src="@/assets/images/icons/star.svg">
                    <img src="@/assets/images/icons/star.svg">
                    <img src="@/assets/images/icons/star.svg">
                    <img src="@/assets/images/icons/star.svg">
                  </div>
                  <img :src="product.main_image">
                </div>
                <router-link :to="`/product/${product.id}`" class="black-text">
                  <div class="item-main__text"><p class="flow-text">{{ product.name }}</p></div>
                </router-link>
              </div>
              <div class="item-main__control">
                <div v-if="product.is_draw" class="item-main__percent">Draw • {{ product.redemption_percent }}%
                  Redeemed
                </div>
                <div v-else="product.is_draw" class="item-main__percent">Advertisment</div>

                <hr>
                <p class="center-align">
                  <router-link :to="`/product/${product.id}`" class="waves-effect waves-light btn"><span>View</span>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  props: ['website'],
  components: {},
  computed: mapGetters(['allProducts']),
  data() {
    return {
      sortedProducts: undefined,
      settings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        'dragable': false,
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        'autoplay': true,
      }
    }
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
  async mounted() {
    await this.fetchProducts()
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>
