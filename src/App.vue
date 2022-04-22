<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Echo from "./echo.js";

export default {
  name: "App",
  data: () => ({
    foo: "bar",
  }),
  async created() {
    const { value } = await Echo.echo({ value: "Hello World!" });
    this.foo = value;
  },
};
</script>
