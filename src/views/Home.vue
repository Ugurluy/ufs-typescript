<template>
<v-container fluid>
  <v-row dense>
    <v-col v-for="f in forms" :key="f" :cols="f.flex">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <!-- <div class="overline mb-4">
          OVERLINE
        </div> -->
            <v-list-item-title class="headline mb-1">
              {{ f.text }}
            </v-list-item-title>
            <v-list-item-subtitle
              ></v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="primary darken-1"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn to="/dikis" outlined rounded text> {{"Form'a Git"}} </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import i18n from "@/i18n";

@Component
export default class Home extends Vue {
  forms: any;

  constructor() {
    super();
    this.forms = [
      { text: "Dikiş Formu", value: "1", flex: 4 },
      { text: "Desi Parça Formu", value: "2", flex: 4 },
      { text: "Ekli Keçe Formu", value: "3", flex: 4 },
      { text: "Haritalama Formu", value: "4", flex: 4 },
      { text: "Hook/Loop Formu", value: "5", flex: 4 },
      { text: "Iskarta Takip Formu", value: "6", flex: 4 },
      { text: "İz Basım Formu", value: "7", flex: 4 },
      { text: "Kalite Kontrol Formu", value: "8", flex: 4 },
      { text: "Kesim Formu", value: "9", flex: 4 },
      { text: "Kırpım/Ütü Formu", value: "10", flex: 4 },
      { text: "Stok/Ambalaj Formu", value: "11", flex: 4 },
      { text: "Yapıştırma Formu", value: "12", flex: 4 },
    ];
  }
}
</script>