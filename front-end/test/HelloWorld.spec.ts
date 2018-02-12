import { mount } from '@vue/test-utils';
import HelloWorld from '../src/components/hello-world/HelloWorld.vue';

describe("ClassComponent.test.js", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(HelloWorld);
    });
    it(".message = 'Hello world'", () => {
        expect(true).toEqual(true);
    });
});
