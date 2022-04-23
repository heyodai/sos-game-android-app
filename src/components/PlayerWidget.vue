<template>
  <v-card>
    <v-icon>mdi-account</v-icon>
    <strong>{{ this.name }}</strong>
  </v-card>
</template>

<script>
export default {
  name: "PlayerWidget",
  data() {
    return {
      name: "name",
    };
  },
  props: {
    is_blue: Boolean,
  },
  created() {
    this.name = this.is_blue ? "Blue Player" : "Red Player";
  },
};
</script>