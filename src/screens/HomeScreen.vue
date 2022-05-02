<template>
  <v-main>
    <div id="wrapper">
      <h1>SOS Game!</h1>
      <v-btn class="app-btn primary">
          <router-link to="/setup">
            New Game 
            <v-icon right dark> mdi-power </v-icon>
          </router-link>
      </v-btn>
      <v-btn class="app-btn primary">
          <router-link to="/replay">
            Saved Games
            <v-icon right dark> mdi-content-save </v-icon>
          </router-link>
      </v-btn>
      <v-btn class="app-btn primary">
          <router-link to="/credits">
            Credits
            <v-icon right dark> mdi-github </v-icon>
          </router-link>
      </v-btn>
    </div>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HomeScreen",
});
</script>

<style scoped>
    h1 {
        margin: 0.5em;
    }
    .app-btn {
        display: block;
        margin: 1em;
    }
    .app-btn a {
        color: white;
        text-decoration: none;
    }
</style>
