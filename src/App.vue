<template>
  <v-app>
    <AppBar />
    <v-main> </v-main>
  </v-app>
</template>

<script>
import AppBar from "./layout/AppBar.vue";

export default {
  name: "App",

  components: {
    AppBar,
  },
};
</script>
