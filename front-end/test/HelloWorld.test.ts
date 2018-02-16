import { mount } from "vue-test-utils";
// import HelloWorld from "../src/components/hello-world/HelloWorld.vue";
import HelloWorld from "../src/components/HelloWorld.vue";

describe("ClassComponent.test.js", () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(HelloWorld, {
            data: {
                msg: "Hello world"
            }
        });
    });
    it('test', () => {
        expect(true).toEqual(true);
    })
});
