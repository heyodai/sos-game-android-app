<template>
  <div>
    <AppBar />
    <p>Match Screen</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";

export default {
  name: "MatchScreen",
  components: {
    AppBar,
  },
};
</script>