<template>
  <v-main>
    <div id="wrapper">
      <back-home-btn />
      <h1>Credits</h1>
      <p>App by Odai Athamneh.</p>
      <p>Many thanks to:</p>
      <ul>
        <li><a href="https://vuejs.org/">Vue</a></li>
        <li><a href="https://vuetifyjs.com/">Vuetify</a></li>
        <li><a href="https://capacitorjs.com/">Capacitor</a></li>
      </ul>
    </div>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import BackHomeBtn from "../components/BackHomeBtn.vue";

export default Vue.extend({
  name: "CreditsScreen",
  components: {
    BackHomeBtn,
  },
});
</script>

<style scoped>
#wrapper {
  margin: 1em;
}
#wrapper h1 {
  margin: 0.5em 0;
}
</style>
