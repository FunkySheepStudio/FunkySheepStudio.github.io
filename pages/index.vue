<template>
    <div>
        <div
            class="menu boats"
        >
            <div
                class="title"
            >
                La Duchesse
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center"
                >
                    <v-btn
                        class="button"
                        icon="mdi-plus"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-card-bulleted-outline"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-image-multiple-outline"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-delete"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
                <div
                    class="content"
                >
                    content
                </div>
                <div
                    class="next overlay d-flex flex-column align-center justify-space-around"
                >
                    <v-btn
                        class="button"
                        icon="mdi-menu-right"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
            </div>
        </div>
        <div
            class="menu crew"
        >
            <div
                class="title"
            >
                Equipe
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center"
                >
                    <v-btn
                        class="button"
                        icon="mdi-plus"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-account-box-plus-outline"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-delete"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
                <div
                    class="content d-flex flex-column"
                    style="overflow: auto;"
                >
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="menu maneuvers"
        >
            <div
                class="title"
            >
                Manoeuvres
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center"
                >
                    <v-btn
                        class="button"
                        icon="mdi-plus"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-delete"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
                <div
                    class="content"
                >
                    content
                </div>
                <div
                    class="next overlay d-flex flex-column align-center justify-space-around"
                >
                    <v-btn
                        class="button"
                        icon="mdi-menu-right"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
            </div>
        </div>
        <div
            class="menu maintenance"
        >
            <div
                class="title"
            >
                Maintenance
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center"
                >
                    <v-btn
                        class="button"
                        icon="mdi-plus"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                    <v-btn
                        class="button"
                        icon="mdi-delete"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
                <div
                    class="content"
                >
                    content
                </div>
                <div
                    class="next overlay d-flex flex-column align-center justify-space-around"
                >
                    <v-btn
                        class="button"
                        icon="mdi-menu-right"
                        variant="tonal"
                        size="x-small"
                        elevation="4"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
  components: {
    'user': Vue.defineAsyncComponent( () => loadModule('./components/organisms/user.vue', options))
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
    .overlay {
        background: rgb(23, 0, 108);
    }

    .menu {
        height: 23vh;
        border-radius: 1vh;
        background-color:hsl(180, 100%, 82%);
        margin-bottom: 2vh;
    }

    .menu-left {
        width: 10vw;
        border-radius: 1vh;
        background: radial-gradient(circle at bottom, #021a28, hsl(180, 100%, 82%));
    }

    .button {
        margin: 3px;
        color: rgba(255, 255, 255);
        border: 2px;
    }

    .content
    {
        height: 20vh;
        width: 86vw;
    }

    .next {
        height: 20vh;
        border-radius: 1vh;
        background: radial-gradient(circle at bottom, #021a28, hsl(180, 100%, 82%));
    }

    .member {
        min-height: 9vh;
        max-width: 81vw;
        margin: 0.5vh;
        background-color: #021a2855;
        border-radius: 1vh;
    }

    .title {
        height: 3vh;
        text-align: center;
        font-size: 2vh;
        font-weight: bold;
        text-transform: uppercase;
        color: #021a28;
        font-family: 'Times New Roman', serif;
    }
</style>