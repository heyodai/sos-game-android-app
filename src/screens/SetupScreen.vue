<template>
    <v-main>
        <div id="wrapper">
            <back-home-btn />
            <h1>Match Setup</h1>
        </div>
    </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import BackHomeBtn from '../components/BackHomeBtn.vue'

export default Vue.extend({
    name: 'SetupScreen',
    components: {
        BackHomeBtn,
    }
})
</script>

<style scoped>
    #wrapper {
        margin: 1em;
    }
    #wrapper h1 {
        margin: 0.5em 0;
    }
</style>
