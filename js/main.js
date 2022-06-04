const { createApp, ref } = Vue;

createApp({
  setup() {
    const loggedIn = ref(true);
    const active = ref("foodMatch");
    const showFood = ref(false);

    return {
      loggedIn,
      active,
      showFood,
    };
  },
}).mount("#app");
