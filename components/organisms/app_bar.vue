<template>
  <v-app-bar
    density="compact"
  >
    <div
      v-if="store.DB.Boats.Current()"
    >
      <v-icon
        color="blue"
      >
        mdi-sail-boat
      </v-icon>
      <b>{{ store.DB.Boats.Current().name }}</b>
    </div>
    <template v-slot:append>
      <v-icon
        v-show="!store.Server.online"
        color="red"
      >
        mdi-wifi-alert
      </v-icon>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
module.exports = {
  components: {
  },
  data() {
    return {
      store
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>