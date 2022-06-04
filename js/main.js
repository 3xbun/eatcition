const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const loggedIn = ref(false);
    const active = ref("login");
    let counter = ref(0);
    const one = ref("");
    const two = ref("");
    const showFood = ref(false);
    const showLog = ref(false);
    const showFriend = ref(false);
    const username = ref("");
    const res = ref("");
    const selectedFood = ref("");
    const data = ref({});

    const Authorication =
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MG9RYTN4NUcyVnJrM0ZScGZnU0lVVjhlQmt0ZzhtZ2RFZmZYX1R6UlE0In0.eyJleHAiOjE2NTQ3OTU1NzIsImlhdCI6MTY1NDM2MzU3MiwianRpIjoiNWRmNjIzYjMtNWNiNy00OWVkLWI5ZjAtNGYxYjFlODE1YjkyIiwiaXNzIjoiaHR0cHM6Ly9pYW0tc3RhZ2luZy5tYWdpY2JveHNvbHV0aW9uLmNvbS9hdXRoL3JlYWxtcy9tYnMiLCJhdWQiOlsicmVhbG0tbWFuYWdlbWVudCIsImFjY291bnQiXSwic3ViIjoiYTRjZGY3NDgtNzJiZi00YzRjLTgwZjgtYTY4ZTE1OTRiZGYxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWFnaWNoYWNrIiwic2Vzc2lvbl9zdGF0ZSI6IjdmOTU3MWE5LTVlZjQtNGUzNi1hZTAyLWFkMTg0MTNlOWFkYSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsibWJzX3RlY2huaWNpYW4iLCJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbWJzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCB1c2VyX2luZm9ybWF0aW9uIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiVmVsdmEgR29sZG5lciIsInByZWZlcnJlZF91c2VybmFtZSI6InZlbHZhODhAbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVmVsdmEiLCJmYW1pbHlfbmFtZSI6IkdvbGRuZXIiLCJtYnNDbGllbnRJZCI6ImY2NGJiYTgzLWU5Y2UtNGIyMy04YWRlLTA4Njg3YTFkNDQwNiIsImVtYWlsIjoidmVsdmE4OEBtYWlsLmNvbSJ9.PJU7riWk1HRzLOuvWaLdcXcFiX4misEbFSKcF-wmlk_mZLzcW4O8BxyIIuSadKzQsot6yO0HVQpVBhITLyd3wqUWzTr7WMCp4fUgLnxQI41CAcFSwquxvhm7safy8vUUWexokdQytxjBuFP5-r5fkA1ZSD-Gr6dAZ60o0Qw8XtIeThPWK1BjEOaaQ96AABPPjeI1FqZThLtiQ0Ljgv4kdGfry3pZVGiiQNVNU_e3BIJnzuJIYBqidDWnE6z6y3nsgP8rxm4V1zvqxpTsHmq9ZVoqHc9Xw7dm1OqD7JP__oTaAEXGFG_tLL-9_dzrpIem_1sK4mC_MQuTUmwnqLLruw";

    const getData = async () => {
      const config = {
        method: "get",
        url: "https://api-staging.magicboxsolution.com/address/v1/address/districts?limit=998",
        headers: {
          Authorication: Authorication,
        },
      };
      try {
        const payload = await axios(config);

        console.log(payload.data);
        data.value = payload;
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    const selectedPrefer = ref([]);
    const preferences = ref({
      nationalities: [
        "Chinese",
        "Mexican",
        "Italian",
        "Japanese",
        "Greek",
        "French",
        "Thai",
        "Spanish",
        "Indian",
        "Mediterranean",
        "Korean",
        "Vietnamese",
      ],
      tof: [
        "Non-Diary",
        "Seafood",
        "Clean",
        "Organic",
        "Fast-Food",
        "Vegetarian",
        "Spicy",
        "Halal",
        "Gluten-Free",
        "Raw",
        "Rice",
        "Noodle",
      ],
      price: [
        "lower than 100฿",
        "100-150฿",
        "150-500฿",
        "more than 500฿",
        "more than 1000฿",
      ],
    });
    const friendList = [
      "@abcdefg",
      "@mgh2022",
      "@deepsleep",
      "@hckth",
      "@wantsomesleep",
      "@sttu123",
    ];

    const selectedFriend = ref([]);

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

    const filterRecFood = computed(() => {
      return recommendFood.filter((food) => {
        return food.name.startsWith(res.value);
      });
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
      preferences,
      selectedPrefer,
      selectedFood,
      showFriend,
      username,
      friendList,
      loggedIn,
      signIn,
      signOut,
      active,
      showFood,
      recFood,
      counter,
      one,
      two,
      recommendFood,
      User,
      CreatedUser,
      loginForm,
      res,
      filterRecFood,
      showLog,
      selectedFriend,
      data,
    };
  },
}).mount("#app");
