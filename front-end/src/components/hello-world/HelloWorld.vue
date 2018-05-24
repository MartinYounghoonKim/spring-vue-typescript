<template>
    <div class="hello">
        테스트
        <h1>{{ msg }}</h1>
        <img src="/assets/logo.png">
        <button @click="clickHandler">
            button
        </button>
    </div>
</template>

<script>
    import HelloWorld from './HelloWorld.js';

    export default HelloWorld;
</script>