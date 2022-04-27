<template>
  <div>
    <v-text-field label="Sipariş No" v-model="orderNo" outlined></v-text-field>
    <v-text-field label="Müşteri" v-model="client" outlined></v-text-field>
    <DatePicker />
    <v-col class="text-right">
      <v-btn
        class="ml-4 mt-3"
        @click="filterForOrder"
        rounded
        dark
        color="blue darken-3"
      >
        Filtrele
      </v-btn></v-col
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DatePicker from "@/components/DatePicker.vue";
import FormRepo from "@/repositories/FormRepo";
import Forms from "@/models/Forms";

@Component({
  components: { DatePicker },
})
export default class Filters extends Vue {
  @Prop({ required: false }) orderNo: string = "";
  @Prop({ required: false }) client: string = "";

  name: string;
  dates: Date[];
  customers: string[];
  orders: Forms[];

  created() {
    this.filterForOrder();
  }

  async filterForOrder() {
    if (this.orderNo) {
      const response: any = await FormRepo.getByOrderNo(this.orderNo);
      this.orders = response.data;
    }
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