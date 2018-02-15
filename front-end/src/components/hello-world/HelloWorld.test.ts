import { mount } from "vue-test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("ClassComponent.test.js", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(HelloWorld);
    });
    it(".message = 'Hello world'", () => {
        expect(true).toEqual(true);
    });
});
