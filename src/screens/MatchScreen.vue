<template>
  <div>
    <v-app-bar color="primary" dense dark app>
      <v-toolbar-title class="app-bar-title">{{ this.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click.stop="exit_dialog = true">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>

      <v-dialog v-model="exit_dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5"> End the match? </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="end_match">
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

      <v-btn icon @click.stop="stats_dialog = true">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-dialog v-model="stats_dialog" max-width="290">
        <v-card>
          <v-card-title>Match Info</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-clock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ this.get_elapsed_time() }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon> mdi-shield-sword </v-icon>
                </v-list-item-icon>
                <v-list-item-content class="app-bar-title">
                  {{ this.title }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>
                    {{
                      this.attrs.red_player.is_human
                        ? "mdi-account"
                        : "mdi-desktop-classic"
                    }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Red player is
                  {{ this.attrs.red_player.is_human ? "human" : "AI" }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>
                    {{
                      this.attrs.blue_player.is_human
                        ? "mdi-account"
                        : "mdi-desktop-classic"
                    }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Blue player is
                  {{ this.attrs.blue_player.is_human ? "human" : "AI" }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green darken-1" text @click="stats_dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
            <strong> Red Player - Score: {{this.attrs.red_player.score}} </strong>
          </v-col>

          <v-col>
            <v-switch
              v-model="attrs.red_player.is_letter_s"
              v-if="this.attrs.red_player.is_human"
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

      <br />

      <v-card>
        <table>
          <tbody>
            <tr v-for="i in attrs.size" :key="i">
              <td v-for="j in attrs.size" :key="j">
                <v-btn
                  color="gray"
                  height="50"
                  width="50"
                  :id="`${i - 1}_${j - 1}`"
                  icon
                  @click="on_square_click"
                >
                  <v-icon dark> {{ attrs.icons[i-1][j-1] }} </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </v-card>

      <br />

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
            <strong> Blue Player - Score: {{this.attrs.blue_player.score}} </strong>
          </v-col>

          <v-col>
            <v-switch
              v-model="attrs.blue_player.is_letter_s"
              v-if="this.attrs.blue_player.is_human"
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
import { GameMode, PlayerColor, Letter } from "@/enums";
import Match from "../classes/Match";

import MoveRequestAi from "../actions/MoveRequestAi"
import MoveProposalHuman from "../actions/MoveProposalHuman"
import Coordinates from "../classes/Coordinates"

export default Vue.extend({
  name: "MatchScreen",

  data() {
    return {
      attrs: {
        red_player: {
          is_human: this.$route.params.red == "human",
          is_letter_s: false,
          is_current_player: true,
          score: 0,
        },
        blue_player: {
          is_human: this.$route.params.blue == "human",
          is_letter_s: false,
          is_current_player: false,
          score: 0,
        },
        mode:
          this.$route.params.mode == "simple"
            ? GameMode.SIMPLE
            : GameMode.GENERAL,
        size: parseInt(this.$route.params.size),
        icons: [
          [ 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', ],
          [ 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', ],
          [ 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', ],
          [ 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', ],
          [ 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', 'mdi-minus', ],
        ],
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
      this.$router.push("/");
    },
    /**
     * Get a string with elapsed time.
     * @return Elapsed time for match, formatted as HH:MM:SS
     */
    get_elapsed_time(): string {
      const current_time = Date.now();
      const diff = Math.floor(current_time - this.start_time);
      return new Date(diff).toISOString().slice(11, 19);
    },
    on_square_click(event: any) {
      const id = event.srcElement.id
      const row: number = id.slice(0, 1)
      const column: number = parseFloat(id.slice(2))
      console.log(row)

      const action = this.build_move_action(row, column)
      const reply = action.is_ai ? this.match.get_ai_move(action) : this.match.check_human_move(action as MoveProposalHuman)
      console.log(reply)

      if (reply.is_accepted) {
        this.attrs.icons[row][column] = reply.letter == Letter.S ? 'mdi-alpha-s' : 'mdi-alpha-o'
        
        if (reply.is_scoring) {
          if (reply.player == PlayerColor.RED) {
            this.attrs.red_player.score += 1
          }
          else {
            this.attrs.blue_player.score += 1
          }
        }

        if (reply.is_winning) {
          alert(`${reply.player == PlayerColor.RED ? 'Red' : 'Blue'} wins!`)
        }
        else {
          this.next_turn()
        }
      }
    },
    build_move_action(row: number, column: number): MoveRequestAi | MoveProposalHuman {
      const player = this.attrs.red_player.is_current_player
        ? PlayerColor.RED
        : PlayerColor.BLUE;

      const is_human = player == PlayerColor.RED
        ? this.attrs.red_player.is_human
        : this.attrs.blue_player.is_human;

      if (is_human) {
        const is_letter_s = player == PlayerColor.RED
          ? this.attrs.red_player.is_letter_s
          : this.attrs.blue_player.is_letter_s;

        const letter = is_letter_s ? Letter.S : Letter.O
        const location = new Coordinates(row, column)

        return new MoveProposalHuman(player, letter, location)
      }
      else {
        return new MoveRequestAi(player)
      }
    },
    next_turn() {
      this.attrs.red_player.is_current_player = !this.attrs.red_player.is_current_player
      this.attrs.blue_player.is_current_player = !this.attrs.blue_player.is_current_player
    },
  },
});
</script>

<style scoped>
.app-bar-title {
  text-transform: capitalize;
}
</style>
