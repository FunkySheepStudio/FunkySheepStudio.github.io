<template>
  <v-container>
    <v-list>
      <v-list-item
          v-for="(maneuver, i) in store.DB.Maneuvers.All"
          :key="i"
          :id="maneuver.id"
          :title="maneuver.name"
        >
        <template v-slot:append>
            <v-icon
                color="blue"
                icon="mdi-pencil"
                @click="EditManeuver(maneuver.id)"
          />
          <v-icon
                color="red"
                icon="mdi-delete"
                @click="DeleteManeuver(maneuver.id)"
          />
        </template>
      </v-list-item>
    </v-list>
    <v-fab
      app="true"
      color="blue"
      location="bottom right"
      text="Add a maneuver"
      @click="AddManeuver()"
      icon="mdi-plus"
    />
  </v-container>
</template>
<script>
module.exports = {
  components: {
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    AddManeuver(maneuver)
    {
      store.DB.Maneuvers.Add(maneuver)
    },
    DeleteManeuver(id)
    {
      store.DB.Maneuvers.Delete(id)
    }
  }
}
</script>