import { reactive, computed, watch, nextTick } from "vue";

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

export function useCounter() {
  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      if (newCount === 20) {
        alert("You touch the maximum");
      }
    }
  );

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";
    else return "odd";
  });

  const increaseCounter = async (amount) => {
    counterData.count += amount;
    await nextTick(() => {
      console.log("Do something when increase counter is updated in dom");
    });
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
