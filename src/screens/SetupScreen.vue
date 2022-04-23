<template>
  <div id="setup-screen">
    <v-btn to="/" color="primary" elevation="2">
      <v-icon left dark> mdi-arrow-left </v-icon>
      Back Home
    </v-btn>
    <br /><br />

    <h1>New Game</h1>
    <br /><br />

    <v-slider
      label="Board Size"
      v-model="board_size"
      min="3"
      max="8"
      step="1"
      thumb-label
      ticks
    ></v-slider>
    <br />

    <v-container fluid>
      <p>Game Mode</p>
      <v-radio-group v-model="game_mode" mandatory>
        <template v-slot:label>
          <div>When does the game end?</div>
        </template>
        <v-radio label="Simple - first score" value="simple"></v-radio>
        <v-radio label="General - when board is full" value="general"></v-radio>
      </v-radio-group>
    </v-container>
    <br />

    <v-btn @click.native="init_match()" color="primary" elevation="2">
      <v-icon left dark> mdi-fencing </v-icon>
      Start Match
    </v-btn>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "SetupScreen",
  data() {
    return {
      board_size: 0,
      game_mode: "",
    };
  },
  methods: {
    async init_match() {
      this.$router.push(`/match/${this.board_size}/${this.game_mode}`)
    }
  }
};
</script>

<style scoped>
#setup-screen {
  margin: 1em;
}
</style>
