<template>
  <v-container>
    <takePicture
      v-if="showTakePicture"
      :show="showTakePicture"
      @close-event="showTakePicture = false"
      @add-img="AddImg"
    />
    <v-row no-gutters justify="center">
      <v-col
          v-for="(boat, i) in store.DB.Boats.All"
          :key="i"
          cols="12"
          lg="6"
          md="6"
        >
          <v-card
            class="ma-2 pa-2"
            color="#00CED1"
            variant="outlined"
          >
            <v-card-item>
              <v-card-title>
                <v-text-field
                    hint="Enter the name of your boat"
                    label="Name of the boat"
                    v-model="boat.name"
                    @update:modelValue="AddBoat(boat)"
                    density="compact"
                />
              </v-card-title>
            </v-card-item>
            <v-carousel
              v-model="boat.selectedImg"
              transition-duration="400"
              crossfade
              height="50vmin"
              hide-delimiters
            >
              <template v-slot:prev="{ props }">
                <v-btn
                  color="black"
                  variant="outlined"
                  icon="mdi-arrow-left-thick"
                  size="small"
                  style="opacity: 50%; position: absolute; left: 5%;"
                  @click="props.onClick"
                  />
              </template>
              <template v-slot:next="{ props }">
                <v-btn
                  color="black"
                  variant="outlined"
                  icon="mdi-arrow-right-thick"
                  size="small"
                  style="opacity: 50%; position: absolute; right: 5%;"
                  @click="props.onClick"
                />
              </template>
              <v-carousel-item
                v-for="(img, i) in boat.imgs"
                :key="i"
              >
                  <v-img
                    :src="img"
                  ></v-img>
              </v-carousel-item>
            </v-carousel>
            <template v-slot:actions>
              <v-btn
                :color="store.DB.Boats.currentID === boat.id ? 'green' : 'black'"
                icon="mdi-check-bold"
                @click="store.DB.Boats.currentID = boat.id"
              />
              <v-btn
                color="blue"
                icon="mdi-camera"
                @click="ShowPictureModal(boat.id)"
              />
                <v-btn
                color="red"
                icon="mdi-delete"
                @click="DeleteBoat(boat.id)"
              />
            </template>
          </v-card>
      </v-col>
    </v-row>
    <v-fab
      app="true"
      color="blue"
      location="bottom right"
      text="Add a boat"
      @click="AddBoat()"
      icon="mdi-plus"
    />
  </v-container>
</template>
<script>
module.exports = {
  components: {
    'takePicture': Vue.defineAsyncComponent( () => loadModule('./components/organisms/take_picture.vue', options)),
  },
  data() {
    return {
      store,
      showTakePicture: false,
      currentBoat: 0
    }
  },
  methods: {
    AddBoat(boat)
    {
      store.DB.Boats.Add(boat)
    },
    DeleteBoat(id)
    {
      store.DB.Boats.Delete(id)
    },
    AddImg(event)
    {
      store.DB.Boats.AddImg(this.currentBoat, event)
      this.showTakePicture = false
    },
    ShowPictureModal(boatId)
    {
      this.currentBoat=boatId
      this.showTakePicture = true
    }
  }
}
</script>