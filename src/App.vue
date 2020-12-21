<template>
  <div id="app">
    <component v-bind:website="website" :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    layout () {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
}
</script>

<style>
@import "./assets/css/style.css";
</style>
