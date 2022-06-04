const { createApp, ref } = Vue;

createApp({
  setup() {
    const loggedIn = ref(true);
    const active = ref("foodMatch");

    return {
      loggedIn,
      active,
    };
  },
}).mount("#app");
