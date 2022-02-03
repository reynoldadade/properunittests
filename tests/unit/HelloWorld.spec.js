import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  test("increment should increase count", () => {
    const wrapper = mount(HelloWorld);
    wrapper.vm.increment();
    expect(wrapper.vm.count).toBe(1);
  });

  test("decrement should decrease count", () => {
    const wrapper = mount(HelloWorld);
    wrapper.vm.decrement();
    expect(wrapper.vm.count).toBe(-1);
  });

  test("increment button should increase count", async () => {
    const wrapper = mount(HelloWorld);
    const button = wrapper.find("[data-testid='incrementButton']");
    button.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find("[data-testid='countValue']").text()).toBe("1");
    // expect(wrapper.vm.count).toBe(1);
  });

  test("decrement button should decrease count", async () => {
    const wrapper = mount(HelloWorld);
    const button = wrapper.find("[data-testid='decrementButton']");
    button.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find("[data-testid='countValue']").text()).toBe("-1");
  });
});
