<template>
  <v-main v-if="isReady" class="home">
    <v-container>
      <v-row>
        <v-col v-for="f in forms" :key="f" cols="3">
          <v-card class="mx-auto" width="330" height="200" outlined>
            <!-- <v-list-item-title class="headline mt-10 text-center">
              {{ f.text }}
            </v-list-item-title> -->
            <p class="mt-2 logo-wrapper" v-html="f.svg"></p>
            <v-card-actions class="justify-center">
              <v-btn class="ma-1" outlined :to="{ path: getSymbolUrl(f) }">
                {{ f.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-row dentse>
      <v-col v-for="f in forms" :key="f" :cols="f.flex">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ f.text }}
              </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="primary darken-1"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn to="/dikis" outlined rounded text>
              {{ "Form'a Git" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SewingSvg from "../../public/sewing-white.svg";

@Component({
  components: {
    SewingSvg,
  },
})
// eslint-disable
export default class Home extends Vue {
  isReady: boolean = false;
  forms: any = [
    {
      text: "Dikiş",
      value: "1",
      flex: 4,
      path: "/dikis",
      svg: "<img svg-inline class='logo' src='../../public/sewing-white.svg' />",
    },
    {
      text: "Desi & Parça",
      value: "2",
      flex: 4,
      path: "/desiparca",
      svg: "<img svg-inline class='logo' src='../../public/measure.svg' />",
    },
    {
      text: "Ekli Keçe",
      value: "3",
      flex: 4,
      path: "/eklikece",
      svg: "<img svg-inline class='logo' src='../../public/circles.svg' />",
    },
    {
      text: "Haritalama",
      value: "4",
      flex: 4,
      path: "/haritalama",
      svg: "<img svg-inline class='logo' src='../../public/leather.svg' />",
    },
    {
      text: "Hook/Loop",
      value: "5",
      flex: 4,
      path: "/hookandloop",
      svg: "<img svg-inline class='logo' src='../../public/roller.svg' />",
    },
    {
      text: "Iskarta Takip",
      value: "6",
      flex: 4,
      path: "/iskartatakip",
      svg: "<img svg-inline class='logo' src='../../public/recycle.svg' />",
    },
    {
      text: "İz Basım",
      value: "7",
      flex: 4,
      path: "/izbasim",
      svg: "<img svg-inline class='logo' src='../../public/machine-press.svg' />",
    },
    {
      text: "Kalite Kontrol",
      value: "8",
      flex: 4,
      path: "/kalitekontrol",
      svg: "<img svg-inline class='logo' src='../../public/quality-control.svg' />",
    },
    {
      text: "Kesim",
      value: "9",
      flex: 4,
      path: "/kesim",
      svg: "<img svg-inline class='logo' src='../../public/cutting.svg' />",
    },
    {
      text: "Kırpım/Ütü",
      value: "10",
      flex: 4,
      path: "/kirpimutu",
      svg: "<img svg-inline class='logo' src='../../public/ironing.svg' />",
    },
    {
      text: "Stok/Ambalaj",
      value: "11",
      flex: 4,
      path: "/stokambalaj",
      svg: "<img svg-inline class='logo' src='../../public/package.svg' />",
    },
    {
      text: "Yapıştırma",
      value: "12",
      flex: 4,
      path: "/yapistirma",
      svg: "<img svg-inline class='logo' src='../../public/hot-glue.svg' />",
    },
  ];

  created() {
    this.isReady = true;
  }

  getSymbolUrl(form: any) {
    return form.path;
  }
}
</script>
<style scoped>
.logo-wrapper {
  width: 112px;
  height: 112px;
  display: block;
  margin: auto;
}
/* .btn {
  width: 112px;
  height: 112px;
  margin-right: 10px;
  display: block;
  margin: auto;
} */
</style>