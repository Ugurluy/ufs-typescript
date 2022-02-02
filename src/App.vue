<template>
  <v-app app>
    <v-app-bar app color="primary darken-1">
      <v-avatar class="ml-0" color="white darken-3" size="52">UFS</v-avatar>

      <v-spacer></v-spacer>
      
      <!-- <v-responsive class="mr-5" max-width="260">
        <v-text-field
          color="black darken-4"
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive> -->
    </v-app-bar>
    <v-main>
      <v-row class="ml-2 mr-2">        
        <!-- <Filters /> -->
        <v-col cols="12">
          <router-view />
        </v-col>       
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Header from "./components/Header.vue";
// import LeftBar from "./components/LeftBar.vue";
import Filters from "./components/Filters.vue";
import Footer from "./components/Footer.vue";
import Tab from "./components/Tab.vue";

@Component({
  components: { 
    Filters,
    Footer,
    Tab,
   },
})
export default class App extends Vue {}
</script>
