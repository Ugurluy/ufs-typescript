<template>
  <v-app-bar app color="blue darken-3">
    <v-container>
      <v-btn class="ml-0" to="/" fab color="white" size="52"> UFS </v-btn>
      <!-- <v-avatar class="ml-0" color="white darken-3" size="52">UFS</v-avatar> -->

      <!-- <v-btn v-for="link in links" :key="link" text>
      {{ link }}
    </v-btn> -->

      <v-spacer></v-spacer>

      <!-- <v-responsive max-width="260">
        <v-text-field
          color="white"
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive> -->
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Filters from "../components/Filters.vue";

@Component
export default class Header extends Vue {
  // constructor() {
  //   super();
  // }
}
</script>