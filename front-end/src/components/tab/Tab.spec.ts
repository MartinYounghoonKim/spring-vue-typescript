///<reference path="../../../../node_modules/@types/jest/index.d.ts"/>
// https://vue-test-utils.vuejs.org/kr/
import { mount, Wrapper } from "vue-test-utils";
import { ITabSample } from "./Tab";
import Tab from './Tab.vue';

describe('[Tab]', function () {
  let wrapper: Wrapper<ITabSample>;

  beforeEach(() => {
    wrapper = mount(Tab, {
      data: {
        currentTabIndex: 0,
        tabs: [
          { title: "tab1-title", content: "tab1-content" },
          { title: "tab2-title", content: "tab2-content" },
          { title: "tab3-title", content: "tab3-content" }
        ]
      }
    });
  });

  it("Tab vue.js 인스턴스 확인", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("페이지 로딩완료 시 첫 번째 탭 활성화", () => {
    expect(wrapper.vm.currentTabIndex).toEqual(0);
    expect(wrapper.find('.tab-content').is('div')).toBe(true);
  });

  it("탭버튼 클릭 시 버튼 활성화 컨텐츠 레이어 활성화 변경", () => {
    wrapper
      .findAll('button.tab-title')
      .at(1)
      .trigger('click');
    expect(wrapper.vm.currentTabIndex).toEqual(1);
    expect(wrapper.find('.tab-content').text()).toBe('tab2-content');
  });
});
