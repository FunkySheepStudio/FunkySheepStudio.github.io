<template>
  <div
    style="padding-top: 0.7vh; padding-left: 0.5vh;"
  >
    <avatar/>
  </div>
</template>
<script>
module.exports = {
  components: {
    'avatar': Vue.defineAsyncComponent( () => loadModule('./components/molecules/avatar.vue', options))
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