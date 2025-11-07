<template>
  <div
    class="background"
  ></div>
  <router-view
    class="page"
  />
</template>
<script>
module.exports = {
  components: {
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
.background {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 1vh;
  background-image: url("./images/back.png"), radial-gradient(circle at bottom, #021927, #00DAE5);
  background-position: 50% 150%;
  background-size: contain;
}

.page {
    padding: 1vh;
}
</style>