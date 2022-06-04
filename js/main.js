const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const loggedIn = ref(true);
    const active = ref("foodMatch");
    const showFood = ref(true);
    let counter = ref(0);

    const recFood = computed(() => {
      if (counter.value >= recommendFood.length) {
        counter.value = 0;
      }

      if (counter.value < 0) {
        counter.value = recommendFood.length - 1;
      }

      return recommendFood[counter.value];
    });

    return {
      loggedIn,
      active,
      showFood,
      recFood,
      counter,
    };
  },
}).mount("#app");
