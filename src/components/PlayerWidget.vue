<template>
  <v-card>
    <v-icon>mdi-account</v-icon>
    <strong>{{ this.name }}</strong>
    <v-switch
      v-model="is_letter_s"
      color="primary"
      inset
      :label="`${is_letter_s ? 'S' : 'O'}`"
    ></v-switch>
  </v-card>
</template>

<script>
export default {
  name: "PlayerWidget",
  data() {
    return {
      name: "name",
      is_letter_s: false,
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