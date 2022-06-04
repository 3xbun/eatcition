const { createApp, ref } = Vue;

createApp({
  setup() {
    const loggedIn = ref(true);
    const active = ref("foodMatch");
    const showFood = ref(true);

    return {
      loggedIn,
      active,
      showFood,
    };
  },
}).mount("#app");
