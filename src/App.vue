<template>
  <div id="app">
    <component v-bind:website="website" :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  methods: mapActions(['fetchProducts']),
  async mounted() {
    await this.fetchProducts();
  },
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
}
</script>

<style>
@import './assets/css/style.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';
</style>
