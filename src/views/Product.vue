<template>
  <div>
    <section class="profile">
      <div class="container">
        <div class="profile__row">

          <div class="profile__column user-profile">
            <div class="user-profile__name">{{ product.user.username }}</div>
            <div class="user-profile__image"><img :src="product.user.profile.picture" alt="user photo"></div>
            <a href="#" class="user-profile__button btn"><span>Message</span></a>
          </div>

          <div class="profile__column user-content">
            <div v-if="redemption" class="user-content__title" align="center"><h4><b>Drawing</b></h4></div>
            <div v-else class="user-content__title" align="center"><h4><b>Advertisement</b></h4></div>
            <hr>
            <div class="user-content__title">{{ product.name }}</div>
            <div class="user-content__score"><p>{{ product.price }} &#8362;</p></div>
            <div class="user-content__galerey">

              <div v-for="productImage in productImages" v-bind:key="productImage.id" class="user-content__image">
                <img class="materialboxed" :src="productImage.image">
              </div>
            </div>
            <div class="user-content__text">{{ product.description }}</div>
          </div>

          <div v-if="redemption" class="profile__column user-result">
            <div class="user-result__column">
              <div class="user-result__column-off"><span>{{ redemption.percent }}%</span></div>
              <div class="user-result__column-on"></div>
            </div>
            <a href="#" class="user-result__button btn btn-d"><span>Become a sponsor</span></a>
          </div>

        </div>
      </div>
    </section>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

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
              <label for="sum" class="donate-popup__label">сумма с учетом комиссии (10%), <br>(она же и будет выведена)</label>
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
                <label for="file" class="form-popup__label form-popup__label-file">Загрузить изображение:</label>
                <input name="file" id="file" type="file" class="form-popup__input">
              </div>
              <button class="form-popup__button btn popup-close">добавить объявление</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>-->
    <!--    <script src="js/script.js"></script>-->
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, options);
    });

    console.log(this.website + 'api/product/' + this.$route.params.id)
    Vue.axios.get(this.website + 'api/product/' + this.$route.params.id)
      .then((resp) => {
        this.product = resp.data
      })
    Vue.axios.get(this.website + 'api/product-image/?product=' + this.$route.params.id)
      .then((resp) => {
        this.productImages = resp.data.results
      })

    Vue.axios.get(this.website + 'drawings/api/get-tickets-redemption-amount/' + this.$route.params.id)
      .then((resp) => {
        this.redemption = resp.data
      })
  },
}
</script>

<style scoped>

</style>
