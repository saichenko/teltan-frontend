<template>
  <section class="catalog">
    <div class="container">
      <h2 class="catalog__title">Catalog</h2>

      <nav class="catalog__menu">

      </nav>
      <div class="catalog__section section">
        <h3 class="section__title">Электроника</h3>
        <table class="section__table table-section">
          <tr v-for="product in allProducts" v-bind:key="product.id">
            <td class="table-section__user"><img :src="product.main_image" alt=""></td>
            <td class="table-section__text"><router-link :to="`/product/${product.id}`">{{product.name}}</router-link></td>
            <td class="table-section__value"><span>80%</span></td>
            <td class="table-section__image"><img :src="product.user.profile.picture" alt=""></td>
          </tr>
        </table>
      </div>

    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'


export default {
  name: 'Catalog',
  props: ['website'],
  components: {
  },
  computed: mapGetters(['allProducts']),
  data () {
    return {
      products: undefined,
      categories: undefined,
      settings: {
        "dots": true,
        'arrows': true,
        'autoplay': true,
        "infinite": false,
        'draggable': true,
        'adaptiveHeight': true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
  },
  mounted () {
    Vue.axios.get(this.website + 'api/category/')
      .then((resp) => {
        console.log(resp.data.results)
        this.categories = resp.data.results
      })
  },
}
</script>

<style scoped>

</style>
