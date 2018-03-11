<template>
    <div id="app">
        <ul class="gnb">
            <li>
                <router-link :to="{ name: 'Hello' }">Index</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'TabSample' }">tabSample</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Todo' }">Todo</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class App extends Vue {
    }
</script>