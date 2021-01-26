<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <h4>Publish an ad</h4>
        <div class="divider"></div>
        <br>
        <div class="row">
          <div class="input-field col s6">
            <select
              v-model="category"
              class="validate"
              :class="{invalid: $v.category.$dirty && !$v.category.required}"
              @blur='$v.category.$touch()'
            >
              <option value="" disabled selected>Choose product category</option>
              <option :value="category.id" v-for="category in allCategories" v-bind:key="category.id">{{
                  category.name
                }}
              </option>
            </select>
            <label>Category*</label>
            <small
              class="helper-text invalid red-text"
              v-if="$v.category.$dirty && !$v.category.required"
            >Please choose product category</small>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="input-field col s6">
              <i class="material-icons prefix">create</i>
              <input
                id="name"
                type="text"
                class="validate"
                data-length="80"
                v-model="productName"
                @blur='$v.productName.$touch()'
                :class="{invalid: ($v.productName.$dirty && !$v.productName.required) || ($v.productName.$dirty && !$v.productName.maxLength)}"
              >
              <label for="name">Product name*</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.productName.$dirty && !$v.productName.required"
              >This field is required</small>
              <small
                class="helper-text invalid red-text"
                v-else-if="$v.productName.$dirty && !$v.productName.maxLength"
              >Product name can not contain more than 80 characters</small>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field col s6">
              <i class="material-icons prefix">description</i>
              <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
              <label for="description">Description</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field col s2">
              <i class="prefix" style="font-size: 35px">₪</i>
              <input
                id="price"
                type="number"
                class="validate"
                v-model.trim="price"
                min="0"
                @blur='$v.price.$touch()'
                :class="{invalid: ($v.price.$dirty && !$v.price.required) || ($v.price.$dirty && !$v.price.maxValue)}"
              >
              <label for="price">Price*</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.price.$dirty && !$v.price.required"
              >This field is required</small>
              <small
                class="helper-text invalid red-text"
                v-else-if="$v.price.$dirty && !$v.price.maxValue"
              >Price can not be more than 99999999 shekels</small>
            </div>
            <div class="input-field col s2">
              <i class="material-icons prefix">date_range</i>
              <input
                v-model="year"
                min="0"
                id="year"
                type="number"
                class="validate"
                @blur='$v.year.$touch()'
                :class="{invalid: $v.year.$dirty && !$v.year.required}"
              >
              <label for="year">Year</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.year.$dirty && !$v.year.required"
              >This field is required</small>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field col s3">
              <select
                v-model="ageRestriction"
                class="validate"
                :class="{invalid: $v.ageRestriction.$dirty && !$v.ageRestriction.required}"
                @blur='$v.ageRestriction.$touch()'
              >
                <option value="" disabled selected>Choose product age restriction</option>
                <option value="0">0+</option>
                <option value="6">6+</option>
                <option value="12">12+</option>
                <option value="16">16+</option>
                <option value="18">18+</option>
              </select>
              <label>Age restriction*</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.ageRestriction.$dirty && !$v.ageRestriction.required"
              >Please choose age restriction</small>
            </div>
          </div>
          <div class="col s12">
            <div class="file-field input-field col s4">
              <blockquote>
                <h6>Main image of your product.</h6>
              </blockquote>
              <div class="btn">
                <span>File</span>
                <input
                  type="file"
                  @change="selectMainImage"
                  @blur='$v.mainImage.$touch()'
                  :class="{invalid: $v.mainImage.$dirty && !$v.mainImage.required}"
                >
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" placeholder="Upload image">
              </div>
              <small
                class="helper-text invalid red-text"
                v-if="$v.mainImage.$dirty && !$v.mainImage.required"
              >Please choose main image of your product</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="file-field input-field col s6">
          <blockquote>
            <h6>You can add additional images of your product (optional).</h6>
          </blockquote>
          <div class="btn">
            <span>File</span>
            <input @change="selectAdditionalImages" type="file" multiple>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" id="additional_images"
                   placeholder="Upload one or more images">
          </div>
        </div>
      </div>
      <p>
        <label>
          <input v-model="isDraw" v-bind:value="true" name="group1" type="radio"/>
          <span>Draw</span>
        </label>
      </p>
      <p>
        <label>
          <input v-model="isDraw" v-bind:value="false" name="group1" type="radio" checked/>
          <span>Advertisement</span>
        </label>
      </p>
      <br>
      <br>
      <button class="btn waves-effect waves-light green" type="submit" name="action">Publish
        <i class="material-icons right">send</i>
      </button>
      <br>
      <br>
      <br>
      <br>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {required, numeric, maxValue, maxLength} from 'vuelidate/lib/validators'
import Vue from "vue";

export default {
  name: "AddItem",
  data() {
    return {
      productName: '',
      description: '',
      price: '',
      year: '',
      ageRestriction: '',
      category: '',
      mainImage: null,
      additionalImages: null,
      isDraw: null
    }
  },
  validations: {
    productName: {required, maxLength: maxLength(80)},
    price: {required, numeric, maxValue: maxValue(99999999)},
    category: {required},
    ageRestriction: {required},
    mainImage: {required},
    year: {required}
  },
  computed: mapGetters(['allCategories']),

  async mounted() {
    await this.fetchProducts();
    await this.fetchCategories();

    $(document).ready(function () {
      $('select').formSelect();
    });

    $(document).ready(function () {
      $('input#name').characterCounter();
    });
  },

  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories']),
    selectMainImage(event) {
      this.mainImage = event.target.files[0]
    },
    selectAdditionalImages(event) {
      this.additionalImages = event.target.files
    },
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const data = {
        name: this.productName,
        description: this.description,
        price: this.price,
        category: this.category,
        year: this.year,
        age_restriction: this.ageRestriction,
        is_draw: this.isDraw
      }

      var fd = new FormData()
      for (var key in data) {
        fd.append(key, data[key]);
      }
      fd.append('main_image', this.mainImage, this.mainImage.name)
      Vue.axios.post('api/product/', fd)
        .then((res) => {
          const id = res.data.id
          for (let i = 0; i <= this.additionalImages.length; i++) {
            var fd = new FormData()
            fd.append('product', id)
            fd.append('image', this.additionalImages[i], this.additionalImages[i].name)
            Vue.axios.post('api/product-image/', fd)
          }
        })
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>
