<template>
  <v-app-bar app color="primary accent-4" dense dark>
    <v-toolbar-title>Match</v-toolbar-title>

    <v-spacer></v-spacer>

<router-link to="/">
    <v-btn icon>
      
      <v-icon>mdi-exit-run</v-icon>
      
    </v-btn>
</router-link>

    <v-btn icon disabled>
      <v-icon>mdi-undo-variant</v-icon>
    </v-btn>

    <v-btn icon disabled>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>