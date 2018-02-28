import Vue from "vue";

export interface ITabSample extends Vue {
  currentTabIndex: number;
  tabs: Array<{
    title: string;
    content: string;
  }>;
  changeCurrentTabIndex(index: number): void;
}
