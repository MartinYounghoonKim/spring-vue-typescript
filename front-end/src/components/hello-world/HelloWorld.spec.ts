///<reference path="../../../../node_modules/@types/jest/index.d.ts"/>
// https://vue-test-utils.vuejs.org/kr/s
import { mount } from "vue-test-utils";
import HelloWorld from './HelloWorld.vue';

describe('[HelloWorld]', function () {
  let cmp: any;

  beforeEach(() => {
    cmp = mount(HelloWorld);
  });

  it("hello vue.js 인스턴스 확인", () => {
    expect(cmp.isVueInstance()).toBeTruthy();
  });

  it("msg는 Hello!! 이다.", () => {
    expect(cmp.vm.msg).toEqual('Hello!!');
  });
});
