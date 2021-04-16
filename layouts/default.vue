<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <LogoHead />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <MenuItem
        v-for="(menu, i) in menus"
        :key="i"
        :menu="menu"
      />
      <v-btn
        fab
        small
        color="primary"
      >
        <v-icon dark>
          mdi-github
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import LogoHead from '~/components/LogoHead.vue'
import MenuItem from '~/components/MenuItem.vue'
export default {
  components: {
    MenuItem,
    LogoHead
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      menus: [
        {
          icon: 'mdi-apps',
          title: 'Studio',
          items: [
            {
              title: 'About Us',
              to: '/'
            }
          ]
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Framework',
          items: [
            {
              title: 'Description',
              to: '/framework'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Funky Sheep Studio'
    }
  }
}
</script>
