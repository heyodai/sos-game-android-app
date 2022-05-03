<template>
  <div>
    <v-app-bar color="primary" dense dark app>
      <v-toolbar-title id="app-bar-title">{{ this.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click.stop="exit_dialog = true">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>

      <v-dialog v-model="exit_dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5"> End the match? </v-card-title>

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

    <v-main app>
      <v-card>
        <v-row>
          <v-col>
            <v-icon>
              {{
                this.attrs.red_player.is_human
                  ? "mdi-account"
                  : "mdi-desktop-classic"
              }}
            </v-icon>
            <strong> Red Player </strong>
          </v-col>

          <v-col>
            <v-switch
              v-model="attrs.red_player.is_letter_s"
              color="primary"
              inset
              :label="`${attrs.red_player.is_letter_s ? 'S' : 'O'}`"
            ></v-switch>
          </v-col>

          <v-col>
            {{ this.attrs.red_player.is_current_player ? "Your Turn" : "" }}
          </v-col>
        </v-row>
      </v-card>

      <v-card>
        <table>
          <tbody>
            <tr v-for="i in attrs.size" :key="i">
              <td v-for="i in attrs.size" :key="i">
                <v-btn color="gray" height="50" width="50">
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </v-card>

      <v-card>
        <v-row>
          <v-col>
            <v-icon>
              {{
                this.attrs.blue_player.is_human
                  ? "mdi-account"
                  : "mdi-desktop-classic"
              }}
            </v-icon>
            <strong> Blue Player </strong>
          </v-col>

          <v-col>
            <v-switch
              v-model="attrs.blue_player.is_letter_s"
              color="primary"
              inset
              :label="`${attrs.blue_player.is_letter_s ? 'S' : 'O'}`"
            ></v-switch>
          </v-col>

          <v-col>
            {{ this.attrs.blue_player.is_current_player ? "Your Turn" : "" }}
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GameMode, PlayerColor } from "@/enums";
import Match from "../classes/Match";

export default Vue.extend({
  name: "MatchScreen",

  data() {
    return {
      attrs: {
        red_player: {
          is_human: this.$route.params.red == "human",
          is_letter_s: false,
          is_current_player: true,
        },
        blue_player: {
          is_human: this.$route.params.blue == "human",
          is_letter_s: false,
          is_current_player: false,
        },
        mode:
          this.$route.params.mode == "simple"
            ? GameMode.SIMPLE
            : GameMode.GENERAL,
        size: parseInt(this.$route.params.size),
      },
      start_time: 0,
      title: `${this.$route.params.mode} Match`,
      exit_dialog: false,
      stats_dialog: false,
      match: new Match(GameMode.SIMPLE, 0, true, true),
    };
  },

  async created() {
    this.start_time = Date.now();
    this.match = this.start_match();
  },

  methods: {
    start_match(): Match {
      return new Match(
        this.attrs.mode,
        this.attrs.size,
        this.attrs.red_player.is_human,
        this.attrs.blue_player.is_human
      );
    },
    end_match() {
      console.log("It works!");
    },
    get_elapsed_time() {
      return 0;
    },
  },
});
</script>

<style scoped>
#app-bar-title {
  text-transform: capitalize;
}
</style>
