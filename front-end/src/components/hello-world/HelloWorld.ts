import Vue from "vue";

export interface IHelloWorld extends Vue {
  msg: string;
  clickHandler(): void;
}
