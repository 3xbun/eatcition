const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const loggedIn = ref(false);
    const active = ref("signUp");
    const showFood = ref(false);
    let counter = ref(0);

    const username = [
      "@abcdefg",
      "@mgh2022",
      "@deepsleep",
      "@hckth",
      "@wantsomesleep",
      "@sttu123",
    ];

    const User = ref({
      username: "theCosmosTrio",
      gender: "Neutral",
      dob: {
        day: "5",
        month: "June",
        year: "2022",
      },
      allergies: "Seafood",
      preferences: "Fried Chicken",
    });

    const CreatedUser = ref({
      username: "",
      password: "",
      gender: "",
      dob: {
        day: "",
        month: "",
        year: "",
      },
      allergies: "",
      preferences: "",
    });

    const loginForm = ref({
      username: "",
      password: "",
    });

    const signIn = (username, password) => {
      if (username === CreatedUser.value.username) {
        if (password === CreatedUser.value.password) {
          active.value = "foodMatch";
          loggedIn.value = true;
          User.value = CreatedUser.value;
        }
      }
    };

    const signOut = () => {
      CreatedUser.value = {
        username: "",
        password: "",
        gender: "",
        dob: {
          day: "",
          month: "",
          year: "",
        },
        allergies: "",
        preferences: "",
      };

      loginForm.value = {
        username: "",
        password: "",
      };

      active.value = "login";
      loggedIn.value = false;
    };

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
      signIn,
      signOut,
      active,
      showFood,
      recFood,
      counter,
      recommendFood,
      User,
      CreatedUser,
      loginForm,
    };
  },
}).mount("#app");
