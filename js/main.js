const { createApp } = Vue;

createApp({
  setup() {
    const loggedIn = true;
    const title = "Food Matching";

    return {
      loggedIn,
      title,
    };
  },
}).mount("#app");
