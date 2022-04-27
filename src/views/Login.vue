<template>
  <v-sheet class="grey darken-2">
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Giriş</h1>
      </v-card-title>
      <v-card-text>
        <ValidationObserver ref="refLogin" v-slot="{ handleSubmit }">
          <v-form id="login-form" @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              style="color: red"
              name="Name"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="name"
                label="Kullanıcı Adı"
                prepend-icon="mdi-account-circle"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              style="color: red"
              name="Password"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Şifre"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </v-form>
        </ValidationObserver>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn type="submit" text rounded form="login-form">Giriş Yap</v-btn>
        <v-spacer></v-spacer>
        <v-btn text rounded to="/register">Yeni Hesap</v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthRepo from "../repositories/AuthRepo";
import store from "../store/index";

@Component
export default class Login extends Vue {
  name: string;
  password: string;
  showPassword: boolean;

  /**
   * @description Main data initializing
   */
  constructor() {
    super();
    this.showPassword = false;
    this.name = "";
    this.password = "";
  }

  onSubmit(): void {
    // this.$refs.refLogin["validate"]().then((success) => {
    //   if (success) {
    //     this.onLogin();
    //   }
    // });
  }

  async onLogin() {
    try {
      const loginResponse = await AuthRepo.login(this.name, this.password);
      store.commit("setUser", loginResponse.data.user);
      store.commit("setToken", loginResponse.data.token);
    } catch (err) {
      console.log(err);
    }
  }
}
</script>
