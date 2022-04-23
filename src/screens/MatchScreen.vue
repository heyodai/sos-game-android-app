<template>
  <div>
    <AppBar />
    <table>
      <tbody>
        <tr v-for="i in size" :key="i">
          <td v-for="i in size" :key="i">
            <v-btn color="primary" height="50" width="50" :row="test">
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";

export default {
  name: "MatchScreen",
  components: {
    AppBar,
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