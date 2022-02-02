<template>
  <v-row app justify="center">
    <v-data-table
      class="datatable elevation-1 mt-3 mr-3"
      :headers="mappedItems"
      :items="forms"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{
            translate.t("FORMS.IZ_BASIM.NAME")
          }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="grey"
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
                <span class="headline">{{
                  translate.t("FORMS.IZ_BASIM.NAME")
                }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.recordID"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.RECORD_ID')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.formID"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.FORM_ID')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.formAdi"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.FORM_ADI')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.isEmri"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.İŞ_EMRİ')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.musteri"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.CUSTOMER')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cap"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.DIAMETER')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.spAdet"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.ORDER_QUANTITY')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.tuyYuksekligi"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.HAIR_HEIGHT')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.deriTuru"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.SKIN_TYPE')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.deriAdet"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.SKIN_QUANTITY')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cirtTuru"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.VELCRO_TYPE')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cirtRengi"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.VELCRO_COLOR')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.sicakBaskiAdet"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.SICAK_BASKI_ADET')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.varakBaskiAdet"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.VARAK_BASKI_ADET')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.focusBaskiAdet"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.FOCUS_BASKI_ADET')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.not"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.NOTE')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.onay"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.APPROVAL')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.operatorImza"
                        required
                        :label="translate.t('FORMS.IZ_BASIM.OPERATOR_NAME')"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey" text @click="close">Kapat</v-btn>
                <v-btn color="grey" text @click="insertForm">Kaydet</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="grey" dark @click="initialize">Reset</v-btn>
      </template> -->
    </v-data-table>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import i18n from "@/i18n";
import DesiParcaForm from "@/models/DesiParcaForm";
import FormRepo from "@/repositories/FormRepo";
import IzBasimForm from "@/models/IzBasimForm";
import Definition from "@/models/Definition";
import DefinitionsController from "@/controllers/DefinitionsController";
import ColumnNames from "@/models/ColumnNames";

@Component
export default class IzBasim extends Vue {
  forms: IzBasimForm[];
  formModel: IzBasimForm[];
  formAdi: string;
  definitions: Definition[];
  columnNames: ColumnNames[];
  mappedItems: any;
  recordID: any;
  newForm: any;
  dialog: any;

  /**
   * @description Main Data initializing
   */
  constructor() {
    super();
    this.forms = [];
    this.formModel = [];
    this.columnNames = [];
    this.definitions = [];
    this.formAdi = "dikis_gunluk_imalat_raporu";
    this.mappedItems = [];
    this.recordID = "";
    this.newForm = [{}];
    this.dialog = false;
  }

  /**
   * @description translate
   */
  get translate() {
    return i18n;
  }

  /**
   * @description mounted lifecycle
   */
  async created() {
    await this.getFormData(this.formAdi);
    await this.getHeaders(this.formAdi);
  }

  /**
   * @description get
   */
  async getFormData(formAdi: string) {
    const response: any = await FormRepo.getDikisForm(this.formAdi, false);
    this.forms = response.data;
    console.log("Forms", this.forms);
  }

  async getHeaders(formAdi: string) {
    const response = await FormRepo.getColumnHeaders(this.formAdi);
    this.columnNames = response.data;
    console.log("Col Names", this.columnNames);
    var fColName = [""];
    var columnNamesValue = "";
    this.columnNames.forEach((item) => {
      var strArr = item.column_name.split(" ");

      for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
          var upperCaseFirstLetter =
            strArr[i].substring(0, 1).toLowerCase() + strArr[i].slice(1);

          columnNamesValue += upperCaseFirstLetter;
        } else {
          columnNamesValue += strArr[i];
        }
      }
      this.mappedItems.push({
        text: item.column_name,
        value: columnNamesValue,
      });
      columnNamesValue = "";
    });
  }

  /**
   * @description Insert New Form
   */
  async insertForm() {
    const res = await FormRepo.insertNewForm(this.newForm);
    console.log("New Form", this.newForm);
  }

  close() {
    this.dialog = false;
    // this.$nextTick(() => {
    //   this.editedItem = Object.assign({}, this.defaultItem)
    //   this.editedIndex = -1
    // })
  }

  /**
   * @description
   */
  get allDefinitions() {
    return DefinitionsController.getAllDefinitions();
  }
}
</script>

<style >
.b-table-sticky-header,
.table-responsive,
[class*="table-responsive-"] {
  margin-bottom: 0;
}
.datatable {
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
table {
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
}
</style>
