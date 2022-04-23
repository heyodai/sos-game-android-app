<template>
  <div id="home-screen">
    <h1>Welcome!</h1>
    <br />
    <v-btn to="/setup" color="primary" elevation="2">
      New Game
      <v-icon right dark> mdi-power </v-icon>
    </v-btn>
    <br /><br />
    <v-btn to="/replay" color="primary" elevation="2" disabled>
      Saved Games
      <v-icon right dark> mdi-content-save </v-icon>
    </v-btn>
    <br /><br />
    <v-btn to="/credits" color="primary" elevation="2">
      Credits
      <v-icon right dark> mdi-github </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
};
</script>

<style scoped>
#home-screen {
  margin: 1em;
}
</style>
