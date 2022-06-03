const { createApp, ref } = Vue;

createApp({
  setup() {
    const loggedIn = ref(true);
    const active = ref("contact");

    return {
      loggedIn,
      active,
    };
  },
}).mount("#app");
