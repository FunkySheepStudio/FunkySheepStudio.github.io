<template>
  <v-app>
    <appBar/>
    <mainMenu/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
module.exports = {
  components: {
    'mainMenu': Vue.defineAsyncComponent( () => loadModule('./components/organisms/main_menu.vue', options)),
    'appBar': Vue.defineAsyncComponent( () => loadModule('./components/organisms/app_bar.vue', options)),
  },
  data() {
    return {
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>