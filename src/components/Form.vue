<template>
  <!-- <div class="news table-responsive">
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th>{{ "Dikiş Formu" }}</th>
            <th>{{ translate.t("FORMS.HEADER.TERAPI_NO") }}</th>
            <th>{{ translate.t("FORMS.HEADER.CUSTOMER") }}</th>
            <th>{{ translate.t("FORMS.HEADER.DIAMETER") }}</th>
            <th>{{ translate.t("FORMS.HEADER.ORDER_QUANTITY") }}</th>
            <th>{{ translate.t("FORMS.HEADER.HAIR_HEIGHT") }}</th>
            <th>{{ translate.t("FORMS.HEADER.SKIN_TYPE") }}</th>
            <th>{{ translate.t("FORMS.HEADER.SKIN_QUANTITY") }}</th>
            <th>{{ translate.t("FORMS.HEADER.VELCRO_TYPE") }}</th>
            <th>{{ translate.t("FORMS.HEADER.VELCRO_COLOR") }}</th>
            <th>{{ translate.t("FORMS.HEADER.STITCHED_PAD_QUANTITY") }}</th>
            <th>{{ translate.t("FORMS.HEADER.ATTACHED_PAD_QUANTITY") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="news-table-row" :key="f.recordId" v-for="f in form">
            <td>{{ f.terapiNo }}</td>
            <td>{{ f.musteri }}</td>
            <td>{{ f.cap }}</td>
            <td>{{ f.spAdet }}</td>
            <td>{{ f.tuyYuksekligi }}</td>
            <td>{{ f.deriTuru }}</td>
            <td>{{ f.deriAdet }}</td>
            <td>{{ f.cirtTuru }}</td>
            <td>{{ f.cirtRengi }}</td>
            <td>{{ f.sunger }}</td>
            <td>{{ f.dikilenKeceAdet }}</td>
            <td>{{ f.eklenenParcaAdet }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  <v-row app justify="center">
    <v-data-table
      :key="f.formAdi"
      v-for="f in form"
      :items="form"
      class="elevation-1"
    >
      <!-- <template v-slot:header="props">
    <thead>
      <tr>
        <th colspan="2">{{"Category 1"}}</th>
        <th colspan="3">{{"Category 2"}}</th>
      </tr>
    </thead>
    </template> -->
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Desi - Parça Günlük İmalat Formu</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                rounded
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                >Yeni Üretim</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ form.formAdi }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="form.recordId" required>{{
                        translate.t("FORMS.HEADER.TERAPI_NO")
                      }}</v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="form.isEmri">{{
                        translate.t("FORMS.HEADER.CUSTOMER")
                      }}</v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.musteri"
                        label="Müşteri"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.cap"
                        label="Çap (mm)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.deriTuru"
                        label="Deri Türü"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.deriKalite"
                        label="Deri Kalite"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.lot"
                        label="Lot Numarası"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.desi"
                        label="Desi"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.eklenenParcaAdet"
                        label="Ekli Keçe"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.eldiven"
                        label="Eldiven (A-B)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Kapat</v-btn>
                <v-btn color="blue darken-1" text @click="insertForm"
                  >Kaydet</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template> -->
    </v-data-table>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import i18n from "@/i18n";
import DikisForm from "@/models/DikisForm";
import FormRepo from "@/repositories/FormRepo";

@Component
export default class Form extends Vue {
  form: DikisForm[];
  formAdi: string;

  /**
   * @description Main Data initializing
   */
  constructor() {
    super();
    this.form = [];
  }

  /**
   * @description translate
   */
  get translate() {
    return i18n;
  }

  get headers() {
    return this.translate;
  }

  /**
   * @description mounted lifecycle
   */
  async created() {
    await this.getFormData(this.formAdi);
  }

  /**
   * @description get
   */
  async getFormData(formAdi: string) {
    this.form = [];
    const response: any = await FormRepo.getDikisForm(this.formAdi, false);
    this.form = response.data;
    console.log(response.data);
  }

  /**
   * @description
   */
  // async getAll() {
  //   await FormController.
  // }
}
</script>

<style >
/* .b-table-sticky-header,
.table-responsive,
[class*="table-responsive-"] {
  margin-bottom:0;
} */

/* table{
  border-collapse: collapse;
  width: 100%;
}
th {
  background: #ddd;
}
td,
th {
  padding: 10px;
}

.table-sm th,
.table-sm td {
  padding: 1px 5px;
}

.news-table-row:hover {
  background: #ccc !important;
  cursor: pointer;
} */
</style>
