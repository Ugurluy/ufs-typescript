<template>
  <v-app class="app">
    <Header />
    <v-main>
      <v-container>
        <router-view></router-view>
        <!-- <HomeComp /> -->
      </v-container>
    </v-main>
  </v-app>
  <!-- <v-app app>
    <v-app-bar app color="primary darken-1">
      <v-avatar class="ml-0" color="white darken-3" size="52">UFS</v-avatar>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-row class="ml-2 mr-2">
        <v-col cols="12">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <Footer />
  </v-app> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
// import LeftBar from "./components/LeftBar.vue";
import Filters from "./components/Filters.vue";
import Footer from "./components/Footer.vue";
import Tab from "./components/Tab.vue";
import Form from "./components/Form.vue";
import HomeComp from "./components/HomeComp.vue";

@Component({
  components: {
    Header,
    Filters,
    Footer,
    Tab,
    Form,
    HomeComp,
  },
})
export default class App extends Vue {}
</script>
