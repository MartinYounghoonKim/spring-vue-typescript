<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <img src="/assets/logo.png">
    <button @click="clickHandler">
      button
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { IHelloWorld } from './HelloWorld';

@Component({})
export default class HelloWorld extends Vue<IHelloWorld> {
  msg = "Hello!!";
  clickHandler() {
    window.alert(this.msg);
  }
}
</script>