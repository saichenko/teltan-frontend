<template>
  <div>
    <section class="banner">
      <div class="banner__row">
        <div class="banner__info info-banner">
          <div class="info-banner__percent">95%</div>
          <div class="info-banner__time"><img src="@/assets/images/icons/clock.svg"> time left</div>
        </div>
        <div class="banner__image">
          <VueSlickCarousel v-bind="settings">
            <div v-for="product in sortedProducts" v-key:="product.id" class="banner__slider">
              <div class="banner__slide">
                <!--                <img :src="product.main_image" width="15%">-->
                <img :src="product.main_image" width="25%">
              </div>
            </div>
          </VueSlickCarousel>
          <a href="#noMoney" class="banner__button btn pl"><span>Become a sponsor</span></a>
        </div>
      </div>
    </section>

    <main class="main">
      <div class="container">
        <h3 class="center"><b>Products</b></h3>
        <div class="main__content">
          <div class="main__item item-main" v-for="product in allProducts" v-bind:key="product.id">
            <div class="item-main__wrap">
              <div class="item-main__content">
                <div class="item-main__image">
                  <div class="item-main__user"><img :src="product.user.profile.picture" :alt="product.user.username">
                  </div>
                  <div class="item-main__rating">
                    <img src="@/assets/images/icons/star.svg">
                    <img src="@/assets/images/icons/star.svg">
                    <img src="@/assets/images/icons/star.svg">
                    <img src="@/assets/images/icons/star.svg">
                  </div>
                  <img :src="product.main_image">
                </div>
                <div class="item-main__text"><p class="flow-text">{{ product.name }}</p></div>
              </div>
              <div class="item-main__control">
                <div class="item-main__percent">84% time left</div>
                <p class="center-align">
                  <router-link :to="`/product/${product.id}`" class="waves-effect waves-light btn"><span>View</span>
                  </router-link>
                  <br>
                  <br>
                  <a href="#sponsor" class="item-main__button btn pl"><span>Become a sponsor</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div class="popup popup-noMoney">
      <div class="popup-table table">
        <div class="cell">
          <div class="popup-content noMoney-popup">
            <div class="noMoney-popup__body">
              <div class="noMoney-popup__title">не достаточно средств</div>
              <div class="noMoney-popup__control">
                <div class="noMoney-popup__button">
                  <a href="#" class="btn popup-close"><span>обратно</span></a>
                </div>
                <div class="noMoney-popup__button">
                  <a href="#sponsorQuantity" class="btn pl"><span>пополнить coins</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup popup-sponsorQuantity">
      <div class="popup-table table">
        <div class="cell">
          <div class="popup-content sponsorQuantity-popup">
            <div class="sponsorQuantity-popup__title">введите количество:</div>
            <div class="sponsorQuantity-popup__body">
              <div class="sponsorQuantity-popup__input-block">
                <label for="" class="sponsorQuantity-popup__label">ввод количества coins</label>
                <input type="text" class="sponsorQuantity-popup__input" placeholder="123 coins">
              </div>
              <div class="sponsorQuantity-popup__arrow"><img src="@/assets/images/icons/arrow-next.svg" alt="">
              </div>
              <div class="sponsorQuantity-popup__input-block">
                <label for="" class="sponsorQuantity-popup__label">конвертер в NIS</label>
                <input type="text" class="sponsorQuantity-popup__input" placeholder="123 &#8362;">
              </div>
            </div>
            <a href="#" class="sponsorQuantity-popup__button btn popup-close"><span>продолжить</span></a>
          </div>
        </div>
      </div>
    </div>

    <div class="popup popup-declaration">
      <div class="popup-table table">
        <div class="cell">
          <div class="popup-content declaration-popup">
            <div class="declaration-popup__body">
              <div class="declaration-popup__button">
                <a href="#agreement" class="btn pl"><span>Разыграть</span></a>
              </div>
              <div class="declaration-popup__button">
                <a href="#agreement" class="btn pl"><span>Продам</span></a>
              </div>
              <div class="declaration-popup__button">
                <a href="#agreement" class="btn pl"><span>Куплю</span></a>
              </div>
              <div class="declaration-popup__button">
                <a href="#agreement" class="btn pl"><span>Услуга</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup popup-agreement">
      <div class="popup-table table">
        <div class="cell">
          <div class="popup-content agreement-popup">
            <div class="agreement-popup__text">Пользовательское солашение <br>(розыгрыши товаров и услуг)</div>
            <div class="agreement-popup__control">
              <a href="#donate" class="agreement-popup__button btn pl"><span>Принять</span></a>
              <a href="#donate" class="agreement-popup__button btn popup__close"><span>Отказаться</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup popup-donate">
      <div class="popup-table table">
        <div class="cell">
          <div class="popup-content donate-popup">
            <div class="donate-popup__input-block">
              <label for="min-sum" class="donate-popup__label">укажите минимальную сумму донатов</label>
              <input name="min-sum" id="min-sum" type="text" class="donate-popup__input">
            </div>
            <div class="donate-popup__input-block">
              <label for="des-sum" class="donate-popup__label">укажите желаемую сумму донатов</label>
              <input name="des-sum" id="des-sum" type="text" class="donate-popup__input">
            </div>
            <div class="donate-popup__input-block">
              <label for="sum" class="donate-popup__label">сумма с учетом комиссии (10%), <br>(она же и будет
                выведена)</label>
              <input name="sum" id="sum" type="text" class="donate-popup__input">
            </div>
            <a href="#form" class="donate-popup__button btn pl"><span>Далее</span></a>
          </div>
        </div>
      </div>
    </div>

    <div class="popup popup-form">
      <div class="popup-table table">
        <div class="cell">
          <div class="popup-content form-popup">
            <form action="#" class="form-popup__form">
              <div class="form-popup__input-block">
                <label for="section" class="form-popup__label">Раздел:</label>
                <input name="section" id="section" type="text" class="form-popup__input">
              </div>
              <div class="form-popup__input-block">
                <label for="title" class="form-popup__label">Заголовок:</label>
                <input name="title" id="title" type="text" class="form-popup__input">
              </div>
              <div class="form-popup__input-block">
                <label for="adres" class="form-popup__label">Местонахождение:</label>
                <input name="adres" id="adres" type="text" class="form-popup__input">
              </div>
              <div class="form-popup__input-block">
                <label for="text" class="form-popup__label">Подробно опишите товар или услугу:</label>
                <textarea name="text" id="text" class="form-popup__input"></textarea>
              </div>
              <div class="form-popup__input-block">
                <label for="description" class="form-popup__label">Краткое описание:</label>
                <input name="description" id="description" type="text" class="form-popup__input">
              </div>
              <div class="form-popup__input-block">
                <label for="cost" class="form-popup__label">Цена:</label>
                <input name="cost" id="cost" type="text" class="form-popup__input">
              </div>
              <div class="form-popup__input-block">
                <label for="file" class="form-popup__label form-popup__label-file">Загрузить
                  изображение:</label>
                <input name="file" id="file" type="file" class="form-popup__input">
              </div>
              <button class="form-popup__button btn popup-close">добавить объявление</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  props: ['website'],
  components: {
    VueSlickCarousel,
  },
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

<style scoped>
</style>
