<template>
  <v-row app justify="center">
    <v-data-table
      class="datatable elevation-1 mt-3 mr-3"
      :headers="mappedItems"
      :items="forms"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat color="primary">
          <v-toolbar-title>{{
            translate.t("FORMS.DIKIS.NAME")
          }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Ara"
            single-line
            hide-details
          ></v-text-field>
          <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
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
                @click="insertNewForm"
                >Yeni Üretim</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{
                  translate.t("FORMS.DIKIS.NAME")
                }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.recordId"
                        required
                        :label="translate.t('FORMS.DIKIS.RECORD_ID')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.formID"
                        required
                        :label="translate.t('FORMS.DIKIS.FORM_ID')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.formAdi"
                        required
                        :label="translate.t('FORMS.DIKIS.FORM_ADI')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.isEmri"
                        required
                        :label="translate.t('FORMS.DIKIS.İŞ_EMRİ')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.musteri"
                        required
                        :label="translate.t('FORMS.DIKIS.CUSTOMER')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cap"
                        required
                        :label="translate.t('FORMS.DIKIS.DIAMETER')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.siparisAdet"
                        required
                        :label="translate.t('FORMS.DIKIS.ORDER_QUANTITY')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.tuyYuksekligi"
                        required
                        :label="translate.t('FORMS.DIKIS.HAIR_HEIGHT')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.deriTuru"
                        required
                        :label="translate.t('FORMS.DIKIS.SKIN_TYPE')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.deriAdet"
                        required
                        :label="translate.t('FORMS.DIKIS.SKIN_QUANTITY')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cirtTuru"
                        required
                        :label="translate.t('FORMS.DIKIS.VELCRO_TYPE')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cirtRengi"
                        required
                        :label="translate.t('FORMS.DIKIS.VELCRO_COLOR')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.dikilenKeceAdet"
                        required
                        :label="
                          translate.t('FORMS.DIKIS.STITCHED_PAD_QUANTITY')
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.eklenenParcaAdet"
                        required
                        :label="
                          translate.t('FORMS.DIKIS.ATTACHED_PAD_QUANTITY')
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.not"
                        required
                        :label="translate.t('FORMS.DIKIS.NOTE')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.onay"
                        required
                        :label="translate.t('FORMS.DIKIS.APPROVAL')"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.operatorImza"
                        required
                        :label="translate.t('FORMS.DIKIS.OPERATOR_NAME')"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey" text @click="close">Kapat</v-btn>
                <v-btn color="grey" text @click="submitForm">Kaydet</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="grey" dark @click="initialize">Reset</v-btn>
      </template>  -->
    </v-data-table>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import i18n from "@/i18n";
import DikisForm from "@/models/DikisForm";
import FormRepo from "@/repositories/FormRepo";
import Definition from "@/models/Definition";
import DefinitionsController from "@/controllers/DefinitionsController";
import ColumnNames from "@/models/ColumnNames";

@Component
export default class Dikis extends Vue {
  forms: DikisForm[] = [];
  formModel: DikisForm[] = [];
  formAdi: string = "Dikis_Gunluk_Imalat_Raporu";
  definitions: Definition[] = [];
  columnNames: ColumnNames[] = [];
  mappedItems: any[] = [];
  newForm: any = [{}];
  dialog: boolean = false;
  dialogDelete: any;
  search: string = "";
  editedIndex: number = -1;
  item: any;
  isDeleted: boolean = false;
  tableAdi: string = "dikis_gunluk_imalat_raporu";
  deleteId: any;
  deleteIndex: any;
  eventInsert: any;
  eventUpdate: any;
  eventAction: any;

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
    await this.getFormData();
    await this.getHeaders();

    window.addEventListener("clicked-on", (event) => {
      console.log("Event", event);
    });
  }

  /**
   * @description get
   */
  async getFormData() {
    const response: any = await FormRepo.getDikisForm(
      this.formAdi,
      this.isDeleted
    );
    this.forms = response.data;
    console.log("Forms", this.forms);
  }

  async getHeaders() {
    const response = await FormRepo.getColumnHeaders(this.tableAdi);
    console.log("Resp", response);
    this.columnNames = response.data;
    var columnNamesValue = "";
    this.columnNames.forEach((item) => {
      /* TODO : delete some column name 
      if (item.column_name === "isDeleted") {
          continue;
       }
       */

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
    this.mappedItems.push({
      text: "Düzenle",
      value: "actions",
    });
  }

  /**
   * @description Insert New Form
   */
  async insertForm() {
    const res = await FormRepo.insertNewForm(this.newForm);
    this.newForm = res.data;
  }

  close() {
    this.dialog = false;
  }

  closeDelete() {
    this.dialogDelete = false;
  }

  async editItem(item) {
    this.eventAction = new CustomEvent("clicked-on", {
      detail: { method: "Update" },
    });
    window.dispatchEvent(this.eventAction);

    this.editedIndex = this.forms.indexOf(item);
    this.newForm = Object.assign({}, item);
    this.dialog = true;
  }

  /**
   * @description
   */
  async insertNewForm() {
    this.eventAction = new CustomEvent("clicked-on", {
      detail: { method: "Insert" },
    });
    window.dispatchEvent(this.eventAction);
  }

  /**
   * @description Control for Delete Form
   */
  async deleteItem(item) {
    this.deleteIndex = this.forms.indexOf(item);
    this.deleteId = this.forms[this.deleteIndex].recordId;
    console.log(this.deleteId);
    this.newForm = Object.assign({}, item);
    this.dialogDelete = true;
  }

  /**
   * @description Delete a form (flag isDeleted: true)
   */
  async deleteItemConfirm() {
    console.log(this.deleteId);
    this.forms.splice(this.editedIndex, 1);
    const res = await FormRepo.deleteForm(this.formAdi, this.deleteId);
    this.getFormData();
  }

  /**
   * @description Submit and Save a Form
   */
  async submitForm() {
    if (this.eventAction.detail.method === "Insert") {
      const res = await FormRepo.insertNewForm(this.newForm);
      this.newForm = res.data;
    } else if (this.eventAction.detail.method === "Update") {
      const res = await FormRepo.updateForm(
        this.newForm,
        this.newForm.recordId
      );
      this.newForm = res.data;
    }
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
  max-width: 100%;
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
