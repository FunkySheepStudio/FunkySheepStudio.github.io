<template>
    <v-app>
        <v-main>
          <router-view />
        </v-main>
      </v-app>
      <tour/>
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
  body {
    font-family: Fira Sans, sans-serif;
  }
  </style>