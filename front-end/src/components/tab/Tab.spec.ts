/// <reference path="../../../../node_modules/@types/jest/index.d.ts"/>
// https://vue-test-utils.vuejs.org/kr/
import { mount } from "vue-test-utils";
import Tab from './Tab.vue';

describe('[Tab]', function () {
    let cmp: any;

    beforeEach(() => {
        cmp = mount(Tab);
    });

    it("Tab vue.js 인스턴스 확인", () => {
        expect(cmp.isVueInstance()).toBeTruthy();
    });

    it("페이지 로딩완료 시 첫 번째 탭 활성화", () => {
        expect(cmp.vm.currentTabIndex).toEqual(0);
        expect(cmp.find('.tab-content').is('div')).toBe(true);
    });

    it("탭버튼 클릭 시 버튼 활성화 컨텐츠 레이어 활성화 변경", () => {
        cmp
            .findAll('button.tab-title')
            .at(1)
            .trigger('click');
        expect(cmp.vm.currentTabIndex).toEqual(1);
        expect(cmp.find('.tab-content').text()).toBe('tab2-content');
    });
});
