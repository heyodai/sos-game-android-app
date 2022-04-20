<template>
  <v-app>
    <NavDrawer />

    
      <AppBar />
    

    <!-- Sizes your content based upon application components -->
    <!-- <v-main> -->
      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid> test </v-container>
    </v-main> -->
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import AppBar from "./layout/AppBar.vue";
import NavDrawer from "./layout/NavDrawer.vue";

export default {
  name: "App",

  components: {
    AppBar,
    NavDrawer,
  },

  data: () => ({
    //
  }),
};
</script>
