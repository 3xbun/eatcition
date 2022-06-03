const { createApp } = Vue;

createApp({
  setup() {
    const loggedIn = true;
    const active = "profile";

    return {
      loggedIn,
      active,
    };
  },
}).mount("#app");
