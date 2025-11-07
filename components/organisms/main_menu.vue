<template>
    <v-bottom-navigation>
      <v-btn
        value="boats"
        @click="$router.push('myboats')"
      >
          <v-icon
            color="#00CED1"
          >
            mdi-sail-boat
          </v-icon>
          <span>Boats</span>
      </v-btn>

      <v-btn
        value="maneuvers"
        @click="$router.push('maneuvers')"
      >
          <v-icon
            color="#1E90FF"
          >
            mdi-ship-wheel
          </v-icon>
          <span>Maneuvers</span>
      </v-btn>
      <v-btn value="friends">
        <v-icon
          color="#00BFFF"
        >
          mdi-crowd
        </v-icon>
          <span>Friends</span>
      </v-btn>
      <v-btn value="maintenance">
          <v-icon
            color="#20B2AA"
          >
            mdi-pier-crane
          </v-icon>
          <span>Maintenance</span>
      </v-btn>
    </v-bottom-navigation>
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
</style>