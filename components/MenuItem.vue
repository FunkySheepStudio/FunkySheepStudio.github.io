<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        <v-icon
          dark
          left
        >
          {{ menu.icon }}
        </v-icon>
        {{ menu.title }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in menu.items"
        :key="index"
        :to="item.to"
        router
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => {
        return {
          title: 'None',
          icon: 'mdi-cloud-upload',
          items: []
        }
      }
    }
  }
}
</script>
