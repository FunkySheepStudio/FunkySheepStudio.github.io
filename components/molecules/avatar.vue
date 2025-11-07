<template>
    <svg
        viewBox='0 0 360 360'
    >           
            <defs>
                <!-- Dégradé radial -->
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" 
                        style="stop-color:#000000; stop-opacity:1" 
                    />
                    <stop offset="25%" 
                        style="stop-color:#000000; stop-opacity:1" 
                    />
                    <stop offset="100%"
                        :style="'stop-color:' + avatar.background.colors[avatar.background.color] +'; stop-opacity:1'" 
                    />
                </radialGradient>
            </defs>

            <rect x="10" y="10" width="345" height="345" rx="50" ry="50" fill="url(#grad1)" stroke="#00000000" stroke-width="10"/>

            <hairs-back
                :selected="avatar.hairs.list[avatar.hairs.index].back"
                :color = avatar.hairs.colors[avatar.hairs.color]
            />
            <skin
                :color = avatar.skin.colors[avatar.skin.color]
            />
            <eyes
                :selected="avatar.eyes.index"
                :color = avatar.eyes.colors[avatar.eyes.color]
            />
            <eyebrows
                :selected="avatar.eyebrows.index"
                :color = avatar.eyebrows.colors[avatar.eyebrows.color]
            />
            <accessories
                :selected="avatar.accessories.index"
                :color = avatar.accessories.colors[avatar.accessories.color]
            />
            <mouth
                :selected="avatar.mouth.index"
                :color = avatar.mouth.colors[avatar.mouth.color]
            />
            <clothes
                :selected="avatar.clothes.index"
                :color = avatar.clothes.colors[avatar.clothes.color]
            />
            <facialHairs
                :selected="avatar.facialHairs.index"
                :color = avatar.facialHairs.colors[avatar.facialHairs.color]
            />
            <glasses
                :selected="avatar.glasses.index"
                :color = avatar.glasses.colors[avatar.glasses.color]
            />
            <hairs-front
                :selected="avatar.hairs.list[avatar.hairs.index].front"
                :color = avatar.hairs.colors[avatar.hairs.color]
            />

            <rect x="10" y="10" width="345" height="345" rx="50" ry="50" fill="#00000000" stroke="#000000" stroke-width="10"/>
    </svg>
    <div
        v-if="editing"
    >
        <div
            class="d-flex flex-wrap justify-center"
        >
            <v-btn
                class="parts"
                @click="selected='skin'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.hairs.index = (avatar.hairs.index + 1) % avatar.hairs.list.length; selected='hairs'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                    viewBox='0 0 360 360'
                    >
                        <hairs-back/>
                        <skin/>
                        <hairs-front/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.eyes.index = (avatar.eyes.index + 1) % avatar.eyes.length; selected='eyes'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <eyes/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.eyebrows.index = (avatar.eyebrows.index + 1) % avatar.eyebrows.length; selected='eyebrows'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <eyebrows/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.glasses.index = (avatar.glasses.index + 1) % avatar.glasses.length; selected='glasses'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <glasses/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.mouth.index = (avatar.mouth.index + 1) % avatar.mouth.length; selected='mouth'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <mouth/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.facialHairs.index = (avatar.facialHairs.index + 1) % avatar.facialHairs.length; selected='facialHairs'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <facialHairs/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.clothes.index = (avatar.clothes.index + 1) % avatar.clothes.length; selected='clothes'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <clothes/>
                    </svg>
                </v-icon>
            </v-btn>
            <v-btn
                class="parts"
                @click="avatar.accessories.index = (avatar.accessories.index + 1) % avatar.accessories.length; selected='accessories'"
                icon
                variant="tonal"
                elevation="4"
            >   
                <v-icon>
                    <svg
                        viewBox='0 0 360 360'
                    >
                        <skin/>
                        <accessories/>
                    </svg>
                </v-icon>
            </v-btn>
        </div>
        <div
            class="d-flex flex-wrap justify-center"
        >
            <v-btn
                v-for="(color, index) in avatar[selected].colors"
                @click="avatar[selected].color = index"
                :color
                icon
            />
        </div>
    </div>
</template>
<script>
module.exports = {
  components: {
    'hairs-back': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/hairs-back.vue', options)),
    'hairs-front': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/hairs-front.vue', options)),
    'skin': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/skin.vue', options)),
    'accessories': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/accessories.vue', options)),
    'eyes': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/eyes.vue', options)),
    'eyebrows': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/eyebrows.vue', options)),
    'mouth': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/mouth.vue', options)),
    'clothes': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/clothes.vue', options)),
    'facialHairs': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/facialHairs.vue', options)),
    'glasses': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/glasses.vue', options))
  },
  props: {
        editing: {
            type: Boolean,
            default() {
                return false
            }
        }
  },
  data() {
    return {
        selected: 'skin',
        avatar: {
            background: {
                color: 0,
                colors: ["#F2FF49","#FFADAD","#FF4242","#FA9EFA", "#817CDE", "#C9EE96"]
            },
            skin: {
                color: 0,
                colors: ["#c58c85","#ecbcb4","#d1a3a4","#a1665e","#503335","#592f2a"]
            },
            eyes: {
                index: 8,
                length: 12,
                color: 0,
                colors: ["#046d8b", "#0190ba", "#99dfbd", "#4e2031", "#f4eeee",
                    "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9", "#000000"
                ]
            },
            eyebrows: {
                index: 0,
                length: 10,
                color: 0,
                colors: ["#000000", "#046d8b", "#0190ba", "#99dfbd", "#4e2031", "#f4eeee",
                    "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            },
            accessories: {
                index: 0,
                length: 4,
                color: 0,
                colors: ["#abb1b6", "#57636d", "#2e3d49", "#ffe1ad",
                    "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            },
            mouth: {
                index: 3,
                length: 11,
                color: 0,
                colors: ["#abb1b6", "#57636d", "#2e3d49", "#ffe1ad",
                    "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            },
            clothes: {
                index: 0,
                length: 5,
                color: 0,
                colors: ["#abb1b6", "#57636d", "#2e3d49", "#ffe1ad",
                    "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            },
            facialHairs: {
                index: 0,
                length: 4,
                color: 0,
                colors: ["#000000", "#aa8866", "#debe99", "#241c11", "#4f1a00", "#9a3300",
                        "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            },
            glasses: {
                index: 0,
                length: 7,
                color: 0,
                colors: ["#abb1b6", "#57636d", "#2e3d49", "#ffe1ad",
                    "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            },
            hairs: {
                index: 0,
                list : [
                    {
                        back: 0,
                        front: 0
                    },
                    {
                        back: 0,
                        front: 1
                    },
                    {
                        back: 0,
                        front: 6
                    },
                    {
                        back: 0,
                        front: 7
                    },
                    {
                        back: 0,
                        front: 9
                    },
                    {
                        back: 0,
                        front: 10
                    },
                    {
                        back: 1,
                        front: 0
                    },
                    {
                        back: 1,
                        front: 1
                    },
                    {
                        back: 1,
                        front: 3
                    },
                    {
                        back: 1,
                        front: 4
                    },
                    {
                        back: 1,
                        front: 6
                    },
                    {
                        back: 1,
                        front: 7
                    },
                    {
                        back: 1,
                        front: 9
                    },
                    {
                        back: 1,
                        front: 10
                    },
                    {
                        back: 1,
                        front: 16
                    },
                    {
                        back: 2,
                        front: 0
                    },
                    {
                        back: 2,
                        front: 1
                    },
                    {
                        back: 2,
                        front: 3
                    },
                    {
                        back: 2,
                        front: 4
                    },
                    {
                        back: 2,
                        front: 6
                    },
                    {
                        back: 2,
                        front: 7
                    },
                    {
                        back: 2,
                        front: 9
                    },
                    {
                        back: 2,
                        front: 10
                    },
                    {
                        back: 2,
                        front: 16
                    },
                    {
                        back: 3,
                        front: 3
                    },
                    {
                        back: 3,
                        front: 4
                    },
                    {
                        back: 3,
                        front: 6
                    },
                    {
                        back: 3,
                        front: 7
                    },
                    {
                        back: 3,
                        front: 9
                    },
                    {
                        back: 3,
                        front: 10
                    },
                    {
                        back: 4,
                        front: 3
                    },
                    {
                        back: 4,
                        front: 4
                    },
                    {
                        back: 4,
                        front: 6
                    },
                    {
                        back: 4,
                        front: 7
                    },
                    {
                        back: 4,
                        front: 9
                    },
                    {
                        back: 4,
                        front: 10
                    },
                    {
                        back: 5,
                        front: 3
                    },
                    {
                        back: 5,
                        front: 4
                    },
                    {
                        back: 5,
                        front: 6
                    },
                    {
                        back: 5,
                        front: 9
                    },
                    {
                        back: 5,
                        front: 10
                    },
                    {
                        back: 6,
                        front: 3
                    },
                    {
                        back: 6,
                        front: 6
                    },
                    {
                        back: 6,
                        front: 9
                    },
                    {
                        back: 6,
                        front: 10
                    },
                    {
                        back: 7,
                        front: 3
                    },
                    {
                        back: 7,
                        front: 6
                    },
                    {
                        back: 7,
                        front: 9
                    },
                    {
                        back: 7,
                        front: 10
                    },
                    {
                        back: 8,
                        front: 0
                    },
                    {
                        back: 8,
                        front: 1
                    },
                    {
                        back: 8,
                        front: 2
                    },
                    {
                        back: 8,
                        front: 3
                    },
                    {
                        back: 8,
                        front: 4
                    },
                    {
                        back: 8,
                        front: 5
                    },
                    {
                        back: 8,
                        front: 6
                    },
                    {
                        back: 8,
                        front: 7
                    },
                    {
                        back: 8,
                        front: 8
                    },
                    {
                        back: 8,
                        front: 9
                    },
                    {
                        back: 8,
                        front: 10
                    },
                    {
                        back: 8,
                        front: 11
                    },
                    {
                        back: 8,
                        front: 12
                    },
                    {
                        back: 8,
                        front: 13
                    },
                    {
                        back: 8,
                        front: 14
                    },
                    {
                        back: 8,
                        front: 15
                    },
                    {
                        back: 8,
                        front: 16
                    },
                    {
                        back: 8,
                        front: 17
                    },
                    {
                        back: 8,
                        front: 18
                    },
                    {
                        back: 8,
                        front: 19
                    }
                ],
                color: 0,
                colors: ["#000000", "#aa8866", "#debe99", "#241c11", "#4f1a00", "#9a3300",
                        "#9ec1e4", "#e78ec7", "#a1f263", "#f46666", "#bd69b9"
                ]
            }
        }
    }
  },
  mounted () {
    this.avatar.background.color = Math.floor(Math.random() * this.avatar.background.colors.length)
    this.avatar.hairs.index = Math.floor(Math.random() * this.avatar.hairs.list.length)
    this.avatar.hairs.color = Math.floor(Math.random() * this.avatar.hairs.colors.length)
    this.avatar.skin.color = Math.floor(Math.random() * this.avatar.skin.colors.length)
    this.avatar.eyes.index = Math.floor(Math.random() * this.avatar.eyes.length)
    this.avatar.eyes.color = Math.floor(Math.random() * this.avatar.eyes.colors.length)
    this.avatar.eyebrows.index = Math.floor(Math.random() * this.avatar.eyebrows.length)
    this.avatar.eyebrows.color = Math.floor(Math.random() * this.avatar.eyebrows.colors.length)
    this.avatar.accessories.index = Math.floor(Math.random() * this.avatar.accessories.length)
    this.avatar.accessories.color = Math.floor(Math.random() * this.avatar.accessories.colors.length)
    this.avatar.mouth.index = Math.floor(Math.random() * this.avatar.mouth.length)
    this.avatar.mouth.color = Math.floor(Math.random() * this.avatar.mouth.colors.length)
    this.avatar.clothes.index = Math.floor(Math.random() * this.avatar.clothes.length)
    this.avatar.clothes.color = Math.floor(Math.random() * this.avatar.clothes.colors.length)
    this.avatar.facialHairs.index = Math.floor(Math.random() * this.avatar.facialHairs.length)
    this.avatar.facialHairs.color = Math.floor(Math.random() * this.avatar.facialHairs.colors.length)
    this.avatar.glasses.index = Math.floor(Math.random() * this.avatar.glasses.length)
    this.avatar.glasses.color = Math.floor(Math.random() * this.avatar.glasses.colors.length)
  },
  methods: {
    NextHairs()
    {
        this.hairsIndex = (this.hairsIndex + 1) % this.hairsList.length
    },
  }
}
</script>
<style>
.parts {
    margin: 1px;
}

.parts .v-icon
{
    transform: scale(1.5);
}
</style>