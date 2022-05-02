<template>
    <v-btn class="back-btn primary">
        <router-link to="/">
            <v-icon left dark> mdi-arrow-left </v-icon>
            Back Home
        </router-link>
    </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "BackHomeBtn",
})
</script>

<style scoped>
    .back-btn a {
        color: white;
        text-decoration: none;
    }
</style>
