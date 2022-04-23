<template>
  <div>
    <AppBar />
    <PlayerWidget :is_blue=true />
    <table id="game-board-table">
      <tbody>
        <tr v-for="i in size" :key="i">
          <td v-for="i in size" :key="i">
            <v-btn color="primary" height="45" width="45">
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <PlayerWidget :is_blue=false />
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import PlayerWidget from "../components/PlayerWidget.vue";

export default {
  name: "MatchScreen",
  components: {
    AppBar,
    PlayerWidget,
  },
  data() {
    return {
      size: 0,
      mode: "",
    };
  },
  created() {
    this.mode = this.$route.params.mode;
    this.size = parseInt(this.$route.params.size);
  },
};
</script>
