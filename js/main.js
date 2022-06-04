const { createApp, ref } = Vue;

createApp({
  setup() {
    const loggedIn = ref(true);
    const active = ref("main");

    return {
      loggedIn,
      active,
    };
  },
}).mount("#app");
