<template>
  <v-app-bar color="green accent-4" dark app>
    <v-toolbar-title>SOS Game</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-information-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
