<template>
  <v-container fluid class="fill-height background-gradient-pro">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card
          class="elevation-12 rounded-lg"
          :class="$vuetify.theme.dark ? 'bg-dark-card' : 'bg-light-card'"
        >
          <v-card-title class="text-center text-h4 font-weight-bold my-4">
            Welcome
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent>
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                required
                outlined
                dense
                color="primary"
                class="mb-4"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                type="password"
                required
                outlined
                dense
                color="primary"
                class="mb-4"
              ></v-text-field>
              <v-btn
                color="primary"
                class="mb-4"
                @click="handleSignUp"
                block
                large
                elevation="2"
                rounded
              >
                <v-icon left>mdi-account-plus</v-icon>
                Sign Up
              </v-btn>
              <v-btn
                color="success"
                class="mb-4"
                @click="handleLogin"
                block
                large
                elevation="2"
                rounded
              >
                <v-icon left>mdi-login</v-icon>
                Log In
              </v-btn>
              <v-btn
                color="error"
                @click="handleLogout"
                block
                large
                elevation="2"
                rounded
              >
                <v-icon left>mdi-logout</v-icon>
                Log Out
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { signUp, login, logout } from "../supabase";
export default {
  name: "AuthView",
  setup() {
    const email = ref("");
    const password = ref("");
    const handleSignUp = async () => {
      const { data, error } = await signUp(email.value, password.value);
      if (error) {
        alert(`Sign Up Error: ${error.message}`);
      } else {
        alert("Sign Up Successful", data);
      }
    };
    const handleLogin = async () => {
      const { data, error } = await login(email.value, password.value);
      if (error) {
        alert(`Login Error: ${error.message}`);
      } else {
        alert("Login Successful", data);
      }
    };
    const handleLogout = async () => {
      const { error } = await logout();
      if (error) {
        alert(`Logout Error: ${error.message}`);
      } else {
        alert("Logged Out Successfully");
      }
    };
    return { email, password, handleSignUp, handleLogin, handleLogout };
  },
};
</script>

<style>
.v-btn {
  text-transform: none;
  font-weight: 500;
}
.background-gradient-pro {
  background: linear-gradient(135deg, #6c757d 0%, #343a40 100%);
}
.bg-light-card {
  background-color: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
}
.bg-dark-card {
  background-color: rgba(30, 30, 30, 0.9) !important;
  backdrop-filter: blur(10px);
}
</style>
