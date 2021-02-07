<template>
  <div class="container">
    <v-dialog
      :adaptive="true"
      :width="400"
      :height="400"
    />

    <form @submit.prevent="handleSubmit">
      <div class="row">
        <h4>Update
          <router-link :to="{name: 'Product', id:product.id}">product</router-link>
        </h4>
        <div class="divider"></div>
        <br>
        <div class="row">
          <div class="input-field col s6">
            <select
              v-model="product.category"
              class="validate"
            >
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
                v-model="product.name"
                @blur='$v.productName.$touch()'
                :class="{invalid: $v.productName.$dirty && !$v.productName.maxLength}"
              >
              <label for="name">Product name*</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.productName.$dirty && !$v.productName.maxLength"
              >Product name can not contain more than 80 characters</small>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field col s6">
              <i class="material-icons prefix">description</i>
              <textarea v-model="product.description" id="description" class="materialize-textarea"></textarea>
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
                v-model.trim="product.price"
                min="0"
                @blur='$v.price.$touch()'
                :class="{invalid: $v.price.$dirty && !$v.price.maxValue}"
              >
              <label for="price" class="active">Price*</label>
              <small
                class="helper-text invalid red-text"
                v-if="$v.price.$dirty && !$v.price.maxValue"
              >Price can not be more than 99999999 shekels</small>
            </div>
            <div class="input-field col s2">
              <i class="material-icons prefix">date_range</i>
              <input
                v-model="product.year"
                min="0"
                id="year"
                type="number"
                class="validate"
                @blur='$v.year.$touch()'
              >
              <label for="year">Year</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field col s3">
              <select
                v-model="product.age_restriction"
                class="validate"
              >
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
                >
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" placeholder="Upload image">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col l6">
          <uploader
            v-model="additionalImages"
            limit="10"
            :autoUpload="false"
            title="Upload images of your product"
          ></uploader>
        </div>
      </div>
      <br>
      <br>
      <button type="button" v-on:click="deleteProduct" v-if="!product.is_draw" class="btn red"><i
        class="material-icons right">delete</i>Delete
      </button>
      &nbsp
      <button type="button" v-on:click="handleDeactivate" v-if="!product.is_draw && product.is_active" class="btn">
        deactivate
      </button>
      <button type="button" v-on:click="handleActivate" v-else-if="!product.is_draw && !product.is_active" class="btn">
        Activate
      </button>
      &nbsp
      <button class="btn waves-effect waves-light green" type="submit" name="action">Update
        <i class="material-icons right">cached</i>
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
import Uploader from "vux-uploader-component";

export default {
  name: 'UpdateItem',
  components: {
    Uploader
  },
  data() {
    return {
      product: null,
      mainImage: null,
      category: null,
      additionalImages: [],
      fetchedImages: []
    }
  },
  validations: {
    productName: {maxLength: maxLength(80)},
    price: {numeric, maxValue: maxValue(99999999)},
  },
  computed: mapGetters(['allCategories']),

  async mounted() {
    await this.fetchCategories();

    await Vue.axios.get('api/product/' + this.$route.params.id)
      .then((resp) => {
        this.product = resp.data
      })

    await Vue.axios.get('api/product-image/?product=' + this.$route.params.id)
      .then(resp => {
        const objects = resp.data.results
        for (let i = 0; i < objects.length; i++) {
          const obj = {url: objects[i].image, id: objects[i].id}
          this.additionalImages.push(obj)
          this.fetchedImages.push(obj)
        }
      })

    await $(document).ready(function () {
      $('select').formSelect();
    })

    await $(document).ready(function () {
      $('input#name').characterCounter();
    })

    await $(document).ready(function () {
      M.updateTextFields();
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

      var fd = new FormData()
      delete this.product.main_image
      for (var key in this.product) {
        fd.append(key, this.product[key]);
      }

      if (this.mainImage != null) {
        fd.append('main_image', this.mainImage, this.mainImage.name)
      }

      await Vue.axios.patch(`api/product/${this.product.id}/`, fd)
        .then((res) => {
          const id = this.product.id

          for (let i = 0; i < this.additionalImages.length; i++) {
            if (this.fetchedImages.some(e => e === this.additionalImages[i])) {
              continue
            }
            var fd = new FormData()
            fd.append('product', id)
            fd.append('image', this.additionalImages[i].blob)
            Vue.axios.post('api/product-image/', fd)
          }

          for (let i = 0; i < this.fetchedImages.length; i++) {
            if (!this.additionalImages.some(e => e === this.fetchedImages[i])) {
              console.log(`api/product-image/${this.fetchedImages[i].id}/`)
              Vue.axios.delete(`api/product-image/${this.fetchedImages[i].id}/`)
            }
          }

          this.$router.back();
        })
      await this.fetchProducts()
    },
    async deleteProduct() {
      await this.$modal.show('dialog', {
        title: 'Are you sure to delete this product?',
        text: 'This action completely deletes the product. If you want to hide this from other people you can deactivate this.',
        buttons: [
          {
            title: 'CANCEL',
            class: 'btn',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Delete',
            class: 'btn red darken-2',
            handler: () => {
              Vue.axios.delete(`api/product/${this.product.id}/`)
              this.$router.push('/')
              this.fetchProducts()
            }
          },
        ]
      })
    },
    async handleDeactivate() {
      await Vue.axios.patch(`api/product/${this.product.id}/`, {is_active: false})
      await this.$router.back()
    },
    async handleActivate() {
      await Vue.axios.patch(`api/product/${this.product.id}/`, {is_active: true})
      await this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
