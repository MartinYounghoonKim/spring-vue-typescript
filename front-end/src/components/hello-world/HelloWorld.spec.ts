///<reference path="../../../../node_modules/@types/jest/index.d.ts"/>

import { mount } from "vue-test-utils";
import HelloWorld from './HelloWorld.vue';

describe('[HelloWorld]', function () {
  let cmp: any;

  beforeEach(() => {
    cmp = mount(HelloWorld);
  });

  it("has the expected html structure", () => {
    expect(cmp.isVueInstance()).toBeTruthy();
  });
});
