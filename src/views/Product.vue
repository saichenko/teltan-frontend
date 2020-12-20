<template>
  <div>
    <section class="profile">
      <div class="container">
        <div class="profile__row">

          <div class="profile__column user-profile">
            <div class="user-profile__name">User</div>
            <div class="user-profile__image"><img src="@/assets/images/user-photo.jpg" alt="user photo"></div>
            <div class="user-profile__status">online <span></span></div>
            <a href="#" class="user-profile__button btn"><span>message</span></a>
          </div>

          <div class="profile__column user-content">
            <div class="user-content__title">Sollicitant homines non sunt</div>
            <div class="user-content__score">7800 &#8362;</div>
            <div class="user-content__galerey">
              <div class="user-content__image"><img src="@/assets/images/image-item.jpg" alt=""></div>
              <div class="user-content__image"><img src="@/assets/images/image-item.jpg" alt=""></div>
              <div class="user-content__image"><img src="@/assets/images/image-item.jpg" alt=""></div>
              <div class="user-content__image"><img src="@/assets/images/image-item.jpg" alt=""></div>
            </div>
            <div class="user-content__text">Opus igitur est dicere possit dura omni specie. "Tu autem in specie, non
              videntur, nec omnimo res est." Et examine ab eis praecepta eius quae habes, et primo et principaliter
              consistit in hoc, utrum sit de rebus, quae sunt in nostra potestate, vel non sunt quam illi: et, si agatur
              de
            </div>
          </div>

          <div class="profile__column user-result">
            <div class="user-result__column">
              <div class="user-result__column-off"><span>87%</span></div>
              <div class="user-result__column-on"></div>
            </div>
            <a href="#" class="user-result__button btn btn-d"><span>become a sponsor</span></a>
          </div>

        </div>

      </div>
    </section>

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
export default {
  name: 'Profile'
}
</script>

<style scoped>

</style>
