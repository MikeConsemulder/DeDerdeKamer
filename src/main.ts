import { createApp, h, provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";
import { apolloClient } from "./infrastructure/ApolloClient";
import "./styles/app.scss";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.mount("#app");
