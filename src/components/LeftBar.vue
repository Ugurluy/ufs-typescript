<template>
  <v-col app>
    <v-text-field
      :items="customers"
      v-model="customer.title"
      placeholder="İsim"
    ></v-text-field>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class LeftBar extends Vue {
    customer: any;
    title: string;
    customers: Array<string>;

    constructor() {
        super();
        this.title = "";
        this.customer = this.title;
        this.customers = ["Fiat", "Ford", "Mercedes", "Mirka", "Car System", "Buff and Shine"];

    }
}
</script>