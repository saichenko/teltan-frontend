<template>
  <div id="app">
    <component v-bind:website="website" :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  methods: mapActions(['fetchProducts', 'fetchCategories']),
  async mounted() {
    await this.fetchProducts();
    await this.fetchCategories();
  },
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';
</style>
