<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default{
  name: "App",
  components: {
    Header
  }
}
</script>
