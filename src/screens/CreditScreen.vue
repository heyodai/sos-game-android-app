<template>
  <div id="credits-screen">
    <v-btn to="/" color="primary" elevation="2">
      <v-icon left dark> mdi-arrow-left </v-icon>
      Back Home
    </v-btn>
    <br /><br />
    <p>Created by <a href="https://github.com/heyodai">Odai Athamneh</a>, 2022</p>
    <p>Many thanks to:
        <ul>
            <li><a href="https://vuejs.org/">Vue</a></li>
            <li><a href="https://vuetifyjs.com/">Vuetify</a></li>
            <li><a href="https://capacitorjs.com/">Capacitor</a></li>
        </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: "CreditScreen",
};
</script>

<style scoped>
#credits-screen {
  margin: 1em;
}
</style>
