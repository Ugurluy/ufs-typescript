<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Yeni Hesap</h1>
      </v-card-title>
      <v-card-text>
        <ValidationObserver ref="refSignup" v-slot="{ handleSubmit }">
          <v-form id="signup-form" @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              style="color:red"
              name="İsim"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="userSignupForm.name"
                label="Adı"
                prepend-icon="mdi-account-circle"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              style="color:red"
              name="Soyadı"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="userSignupForm.surname"
                label="Soyadı"
                prepend-icon="mdi-account-circle"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              style="color:red"
              name="Email"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="userSignupForm.email"
                label="Email"
                prepend-icon="mdi-account-circle"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              style="color:red"
              name="Yetki"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="userSignupForm.role"
                label="Yetki"
                prepend-icon="mdi-account-circle"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              style="color:red"
              name="Şifre"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                required
                v-model="userSignupForm.password"
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
        <v-btn type="submit" text rounded form="signup-form">Giriş Yap</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthRepo from "../repositories/AuthRepo";
import User from "../models/User";

@Component
export default class Signup extends Vue {
  showPassword: boolean;
  userSignupForm: User;

  constructor() {
    super();
    this.showPassword = false;
    this.userSignupForm = new User({
      name: "",
      surname: "",
      email: "",
      role: "",
      password: ""
    });
  }

  onSubmit(): void {
    this.$refs.refSignup["validate"]().then(success => {
      if (success) {
        this.onRegister();
      }
    });
  }

  public async onRegister() {
    try {
      await AuthRepo.register(this.userSignupForm);
    } catch (err) {
      console.log(err);
    }
  }
}
</script>
