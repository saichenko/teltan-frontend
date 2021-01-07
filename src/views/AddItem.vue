<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <h2>Publish an ad</h2>
        <div class="divider"></div>
        <br>
        <div class="row">
          <div class="input-field col s6">
            <select v-model="category">
              <option value="" disabled selected>Choose product category</option>
              <option :value="category.id" v-for="category in allCategories" v-bind:key="category.id">{{
                  category.name
                }}
              </option>
            </select>
            <label>Category*</label>
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
              <textarea id="description" class="materialize-textarea"></textarea>
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
                <input v-model="year" min="0" id="year" type="number" class="validate">
                <label for="year">Year</label>
              </div>
            </div>
            <div class="col s12">
              <div class="input-field col s3">
                <select v-model="age_restriction">
                  <option value="" disabled selected>Choose product age restriction</option>
                  <option value="0">0+</option>
                  <option value="6">6+</option>
                  <option value="12">12+</option>
                  <option value="16">16+</option>
                  <option value="18">18+</option>
                </select>
                <label>Age restriction*</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="file-field input-field col s6">
            <div class="btn">
              <span>File</span>
              <input type="file" multiple>
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text"
                     placeholder="Upload one or more images of your product">
            </div>
          </div>
        </div>
        <p>
          <label>
            <input name="group1" type="radio"/>
            <span>Draw</span>
          </label>
        </p>
        <br>
        <p>
          <label>
            <input name="group1" type="radio" checked/>
            <span>Advertisement</span>
          </label>
        </p>
        <br>
        <br>
        <button class="btn waves-effect waves-light" type="submit" name="action">Publish
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
import {mapGetters} from 'vuex'
import {required, email, alpha, numeric, sameAs, maxValue, maxLength} from 'vuelidate/lib/validators'

export default {
  name: "AddItem",
  data() {
    return {
      productName: '',
      description: '',
      price: '',
      year: '',
      age_restriction: '',
      category: '',
    }
  },
  validations: {
    productName: {required, maxLength: maxLength(80)},
    price: {required, numeric, maxValue: maxValue(99999999)},
  },
  computed: mapGetters(['allCategories']),
  mounted() {
    $(document).ready(function () {
      $('select').formSelect();
    });

    $(document).ready(function () {
      $('input#name').characterCounter();
    });
  },
  methods: {
    handleSubmit() {
      console.log(this.age_restriction)
      console.log(this.category)
    }
  }
}
</script>

<style scoped>

</style>
