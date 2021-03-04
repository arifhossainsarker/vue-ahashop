<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/parsials/Header.vue'
import Footer from './components/parsials/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
