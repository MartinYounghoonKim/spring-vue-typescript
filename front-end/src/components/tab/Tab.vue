<template>
  <div>
    <ul>
      <li v-for="(title, index) in tabs.map(tab => tab.title)"
          :key="index">
        <button @click="changeCurrentTabIndex(index)"
                :class="[
                  `tab-title`,
                  `tab-title-${index}`,
                  { 'tab-title-current' : index === currentTabIndex }
                ]">
          {{title}}
        </button>
      </li>
    </ul>
    <div class="tab-content"
         v-if="index === currentTabIndex"
         v-for="(content, index) in tabs.map(tab => tab.content)"
         :key="index">
      {{content}}
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    interface TabSampleInterface {
        currentTabIndex: number;
        tabs: Array<{
            title: string;
            content: string;
        }>;

        changeCurrentTabIndex(index: number): void;
    }

    @Component({})
    export default class TabSample extends Vue implements TabSampleInterface {
        currentTabIndex = 0;
        tabs = [
            {title: "tab1-title", content: "tab1-content"},
            {title: "tab2-title", content: "tab2-content"},
            {title: "tab3-title", content: "tab3-content"}
        ];

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