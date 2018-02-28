<template>
<div>
  <ul>
    <li 
      v-for="(title, index) in tabs.map(tab => tab.title)"
      v-bind:key="index">
      <button 
        @click="changeCurrentTabIndex(index)"
        v-bind:class="[
            `tab-title`,
            `tab-title-${index}`,
            { 'tab-title-current' : index === currentTabIndex }
          ]">
        {{title}}
      </button>
    </li>
  </ul>
  <div
    class="tab-content"
    v-if="index === currentTabIndex"
    v-for="(content, index) in tabs.map(tab => tab.content)"
    v-bind:key="index">
    {{content}}
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {ITabSample} from './Tab'

@Component({})
export default class TabSample extends Vue<ITabSample> {
  currentTabIndex = 0;
  tabs = [];
  changeCurrentTabIndex(index: number) {
    this.currentTabIndex = index;
  }
}
</script>

<style>
.tab-title-current {
  background-color: orange;
}
</style>