<template>
  <v-main>
    <div id="wrapper">
      <back-home-btn />
      <h1>Match Setup</h1>
      <h2><v-icon> mdi-bulletin-board</v-icon> Board Size</h2>
      <v-slider
        v-model="board_size"
        step="1"
        min="3"
        max="5"
        thumb-label
        ticks
      ></v-slider>

      <h2><v-icon> mdi-shield-sword-outline </v-icon> Game Mode</h2>
      <v-radio-group v-model="is_simple_game" column>
        <v-radio
          label="Simple - First point wins"
          :value="true"
          checked
        ></v-radio>
        <v-radio
          label="General - Play until board is filled"
          :value="false"
        ></v-radio>
      </v-radio-group>

      <h2><v-icon> mdi-account-multiple-outline </v-icon> Players</h2>
      <v-checkbox
        v-model="is_red_human"
        :label="`Red player is ${is_red_human ? 'human' : 'AI'}`"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="is_blue_human"
        :label="`Blue player is ${is_blue_human ? 'human' : 'AI'}`"
        hide-details
      ></v-checkbox>

      <v-btn id="start-btn" class="primary">
        <v-icon dark left> mdi-sword-cross </v-icon>
        Start Match
      </v-btn>
    </div>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import BackHomeBtn from "../components/BackHomeBtn.vue";

export default Vue.extend({
  name: "SetupScreen",
  components: {
    BackHomeBtn,
  },
  data() {
    return {
      board_size: 3,
      is_simple_game: true,
      is_red_human: true,
      is_blue_human: true,
    };
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
#start-btn {
    margin-top: 3em;
}
</style>
