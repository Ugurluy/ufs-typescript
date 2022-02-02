<template>
  <v-col cols="3" sm="12" md="3">
    <v-list color="transparent">
      <v-text-field
        :items="customers"
        v-model="customer.title"
        placeholder="Terapi Numarası"
        outlined
        rounded
      ></v-text-field>

      <v-text-field
        :items="customers"
        v-model="customer.title"
        placeholder="Müşteri"
        outlined
        rounded
      ></v-text-field>
    
      <v-date-picker
        color="grey darken-1"
        v-model="dates"
        range
      ></v-date-picker>

      <v-text-field
        v-model="dateRangeText"
        label="Date range"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
    
      
    </v-list>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Filters extends Vue {
  name: string;
  dates: Date[];
  customer: string;
  customers: string[];

  constructor() {
    super();
    this.name = "Tarih";
    this.dates = [];
    this.customer = "";
    this.customers = ["Fiat", "Ford", "Mercedes", "Mirka", "Car-System"];
  }

  // /**
  //  * @description multiple date selection
  //  * @param {any} dates: date to select
  //  * @returns {any}
  //  */
  // dateRangeText(): string {
  //   return new Date().getTime().toString();
  // }
}
</script>