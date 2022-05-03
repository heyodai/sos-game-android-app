<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-toolbar-title id="app-bar-title">{{ this.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click.stop="exit_dialog = true">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>

      <v-dialog v-model="exit_dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            End the match?
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              End Match
            </v-btn>

            <v-btn color="green darken-1" text @click="exit_dialog = false">
              Stay Here
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn icon>
        <v-icon>mdi-undo-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MatchScreen",

  data() {
    return {
      start_time: 0,
      title: `${this.$route.params.mode} Match`,
      exit_dialog: false,
      stats_dialog: false,
      is_red_human: (this.$route.params.red == "human"),
      is_blue_human: (this.$route.params.blue == "human"),
    };
  },

  async created() {
    this.start_time = Date.now()
  },

  methods: {
    start_match() {
        return null
    },
    end_match() {
      console.log("It works!");
    },
    get_elapsed_time() {
        return 0
    },
  },
});
</script>

<style scoped>
#app-bar-title {
  text-transform: capitalize;
}
</style>
