<template>
  <v-app>
    <v-main>
      <AuthView />
    </v-main>
  </v-app>
</template>

<script>
import AuthView from "./views/auth.vue";

export default {
  name: "App",

  components: {
    AuthView,
  },

  data: () => ({
    //
  }),
};
</script>
