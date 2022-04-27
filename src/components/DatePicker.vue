<template>
  <v-date-picker color="blue darken-3" v-model="dates"></v-date-picker>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// import ColumnNames from "@/models/ColumnNames";
@Component
export default class DatePicker extends Vue {
  dates: string = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  menu: boolean = false;
}
//   export default {
//     data: () => ({
//       dates: ['2018-09-15', '2018-09-20'],
//       menu: false,
//     }),
//   }
</script>