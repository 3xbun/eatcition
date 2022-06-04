const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const loggedIn = ref(false);
    const active = ref("login");
    const showFood = ref(false);
    let counter = ref(0);

    const User = ref({
      username: "theCosmosTrio",
      gender: "Neutral",
      dob: "5 June 2022",
      allergies: "Seafood",
      preferences: "Fried Chicken",
    });

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
      recommendFood,
      User,
    };
  },
}).mount("#app");
