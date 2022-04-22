<template>
  <v-app-bar app color="deep-purple accent-4" dense dark>
    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-exit-run</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-undo-variant</v-icon>
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