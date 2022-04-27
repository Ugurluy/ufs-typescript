<template>
  <v-row app>
    <v-col class="mt-3" cols="2">
      <v-text-field
        label="Sipariş No"
        v-model="orderNo"
        outlined
      ></v-text-field>
      <v-text-field label="Müşteri" v-model="client" outlined></v-text-field>
      <DatePicker />
      <v-col class="text-right">
        <v-btn
          class="ml-4 mt-3"
          @click="getFormData"
          rounded
          dark
          color="blue darken-3"
        >
          Filtrele
        </v-btn></v-col
      >
    </v-col>
    <v-col cols="10">
      <v-data-table
        v-if="isReady"
        class="datatable elevation-1 mt-3 ml-4"
        :headers="mappedItems"
        :items="orders"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar dark color="blue darken-3">
            <v-toolbar-title>{{ getFormName() }}</v-toolbar-title>
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
                  color="blue darken-3"
                  rounded
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                  @click="insertNewForm"
                  >{{ translate.t("FORMS.NEW_PRODUCTION") }}</v-btn
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
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.recordId"
                        required
                        :label="translate.t('FORMS.DIKIS.RECORD_ID')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.formID"
                        required
                        :label="translate.t('FORMS.DIKIS.FORM_ID')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.formAdi"
                        required
                        :label="translate.t('FORMS.DIKIS.FORM_ADI')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.isEmri"
                        required
                        :label="translate.t('FORMS.DIKIS.İŞ_EMRİ')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.musteri"
                        required
                        :label="translate.t('FORMS.DIKIS.CUSTOMER')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cap"
                        required
                        :label="translate.t('FORMS.DIKIS.DIAMETER')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.siparisAdet"
                        required
                        :label="translate.t('FORMS.DIKIS.ORDER_QUANTITY')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.tuyYuksekligi"
                        required
                        :label="translate.t('FORMS.DIKIS.HAIR_HEIGHT')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.deriTuru"
                        required
                        :label="translate.t('FORMS.DIKIS.SKIN_TYPE')"
                      ></v-text-field>
                    </v-col> -->
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="newForm.SkinQuantity"
                          required
                          :label="translate.t('FORMS.DIKIS.SKIN_QUANTITY')"
                        ></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cirtTuru"
                        required
                        :label="translate.t('FORMS.DIKIS.VELCRO_TYPE')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.cirtRengi"
                        required
                        :label="translate.t('FORMS.DIKIS.VELCRO_COLOR')"
                      ></v-text-field>
                    </v-col> -->
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="newForm.StitchedPadQuantity"
                          required
                          :label="
                            translate.t('FORMS.DIKIS.STITCHED_PAD_QUANTITY')
                          "
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="newForm.AttachedPieceQuantity"
                          required
                          :label="
                            translate.t('FORMS.DIKIS.ATTACHED_PAD_QUANTITY')
                          "
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="newForm.Note"
                          required
                          :label="translate.t('FORMS.DIKIS.NOTE')"
                        ></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.onay"
                        required
                        :label="translate.t('FORMS.DIKIS.APPROVAL')"
                      ></v-text-field>
                    </v-col> -->
                      <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="newForm.operatorImza"
                        required
                        :label="translate.t('FORMS.DIKIS.OPERATOR_NAME')"
                      ></v-text-field>
                    </v-col> -->
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
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <!-- <template v-slot:no-data>
        <v-btn color="grey" dark @click="initialize">Reset</v-btn>
      </template>  -->
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import i18n from "@/i18n";
import DikisForm from "@/models/DikisForm";
import Forms from "@/models/Forms";
import FormRepo from "@/repositories/FormRepo";
import DatePicker from "@/components/DatePicker.vue";

@Component({
  components: { DatePicker },
})
export default class Form extends Vue {
  @Prop({ required: true, type: String }) private formName!: string;

  orders: Forms[] = [];
  orderNo: string = "";
  client: string = "";
  isReady: boolean = false;
  mappedItems: any = [
    { text: "Sipariş No", value: "OrderNo" },
    { text: "Müşteri", value: "Client" },
    { text: "Sipariş Detay", value: "ItemName" },
    { text: "Adet", value: "PackingAmount" },
    { text: "Tüy Yüksekliği", value: "SkinFeather" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Rengi", value: "VelcroColor" },
  ];

  newForm: DikisForm[] = [];
  desiParca: any[] = [
    { text: "Çap", value: "Radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Lot", value: "Lot" },
    { text: "Desi", value: "Desi" },
    { text: "Ekli Keçe Adet", value: "AttachedPieceQuantity" },
    { text: "Eldiven", value: "GloveQuantity" },
  ];

  dikis: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Dikiş Keçe Adet", value: "StitchedPadQuantity" },
    { text: "Ekli Keçe Adet", value: "AttachedPieceQuantity" },
  ];

  ekliKece: any[] = [
    { text: "Çap", value: "Radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Parça Adet", value: "PartQuantity" },
    { text: "İskelet Adet", value: "SkinFrameQuantity" },
    { text: "Kesim", value: "CutQuantity" },
    { text: "Birleşim", value: "AddedQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
  ];

  haritalama: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Deri Kalitesi", value: "SkinQuality" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
  ];

  hookandloop: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Sünger", value: "Sponge" },
    { text: "Taban", value: "Base" },
    { text: "Kalıp Adet", value: "Mould" },
  ];

  iskartaTakip: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Iskarta Sebep", value: "RejectReason" },
    { text: "Iskarta Adet", value: "RejectQuantity" },
    { text: "Yırtık Adet", value: "TornQuantity" },
  ];

  izBasim: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Sıcak Baskı Adet", value: "HotPressureQuantity" },
    { text: "Varak Baskı Adet", value: "LaminaQuantity" },
    { text: "Focus Baskı Adet", value: "FocusPressQuantity" },
  ];

  kaliteKontrol: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Tarama Adet", value: "CombQuantity" },
    { text: "Kalite Kontrol Adet", value: "QualityControlQuantity" },
    { text: "İlaç", value: "ChemicalQuantity" },
  ];

  kesim: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Kesime Giren Adet", value: "CutEntryQuantity" },
    { text: "Kesilen İskelet Adet", value: "CutFrameQuantity" },
    { text: "Kesilen Adet", value: "CutQuantity" },
  ];

  kirpimUtu: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Kırpılan Adet", value: "TrimQuantity" },
    { text: "Kırpılan Kalite", value: "TrimQuality" },
    { text: "Kırpım Dönen", value: "ReturnFromTrimQuantity" },
    { text: "Kırpım Kontrol", value: "TrimQualityControl" },
    { text: "Islatma Adet", value: "SoakingQuantity" },
    { text: "Ütü Adet", value: "IroningQuantity" },
    { text: "Ütü Kontrol", value: "IroningQualityControlQuantity" },
  ];

  stokAmbalaj: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Ambalaj", value: "Packaging" },
    { text: "Ambalaj Adet", value: "PackagingQuantity" },
    { text: "Sevk Edilen", value: "ShippedQuantity" },
    { text: "Stokta", value: "StockInQuantity" },
    { text: "Stok Dışı", value: "StockOutQuantity" },
  ];

  yapistirma: any[] = [
    { text: "Çap", value: "radius" },
    { text: "Deri Adet", value: "SkinQuantity" },
    { text: "Tüy Yüksekliği", value: "HairHeight" },
    { text: "Deri Türü", value: "SkinType" },
    { text: "Cırt Türü", value: "VelcroType" },
    { text: "Sünger", value: "Sponge" },
    { text: "Taban", value: "Base" },
    { text: "Yapıştırıcı", value: "Adhesive" },
    { text: "Yapıştırıcı", value: "Adhesive" },
    { text: "Parça Adet", value: "PartQuantity" },
    { text: "Ekli Keçe Adet", value: "AttachedPieceQuantity" },
    { text: "Şerit Adet", value: "TapeQuantity" },
    { text: "Focus Adet", value: "FocusQuantity" },
  ];

  dialog: boolean = false;
  dialogDelete: any = false;
  search: string = "";
  editedIndex: number = -1;
  item: any;
  isDeleted: boolean = false;
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

  get headers() {
    return this.translate;
  }

  /**
   * @description mounted lifecycle
   */
  created() {
    this.formController();
  }

  formController() {
    if (this.formName === "DESIPARCA") {
      this.mappedItems.push.apply(this.mappedItems, this.desiParca);
    } else if (this.formName === "DIKIS") {
      this.mappedItems.push.apply(this.mappedItems, this.dikis);
    } else if (this.formName === "EKLIKECE") {
      this.mappedItems.push.apply(this.mappedItems, this.dikis);
    } else if (this.formName === "HARITALAMA") {
      this.mappedItems.push.apply(this.mappedItems, this.haritalama);
    } else if (this.formName === "HOOK_AND_LOOP") {
      this.mappedItems.push.apply(this.mappedItems, this.hookandloop);
    } else if (this.formName === "ISKARTA_TAKIP") {
      this.mappedItems.push.apply(this.mappedItems, this.iskartaTakip);
    } else if (this.formName === "IZ_BASIM") {
      this.mappedItems.push.apply(this.mappedItems, this.izBasim);
    } else if (this.formName === "KALITE_KONTROL") {
      this.mappedItems.push.apply(this.mappedItems, this.kaliteKontrol);
    } else if (this.formName === "KESIM") {
      this.mappedItems.push.apply(this.mappedItems, this.kesim);
    } else if (this.formName === "KIRPIM_UTU") {
      this.mappedItems.push.apply(this.mappedItems, this.kirpimUtu);
    } else if (this.formName === "STOK_AMBALAJ") {
      this.mappedItems.push.apply(this.mappedItems, this.stokAmbalaj);
    } else if (this.formName === "YAPISTIRMA") {
      this.mappedItems.push.apply(this.mappedItems, this.yapistirma);
    }
  }

  /**
   * @description Get Order Forms, Control with Form Name and Append Relevant Columns
   */
  async getFormData() {
    if (this.orderNo !== "") {
      const response: any = await FormRepo.getByOrderNo(this.orderNo);
      if (response) {
        this.orders = response.data;
        console.log("ORDERS", this.orders);
        this.isReady = true;
      }
    } else if (this.client !== "") {
      const response: any = await FormRepo.getForms();
      if (response) {
        this.orders = response.data[0];
        this.isReady = true;
      }
    }
  }

  getFormName() {
    return this.$i18n.t(`FORMS.${this.formName}.NAME`);
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

    this.editedIndex = this.orders.indexOf(item);
    // this.newForm = Object.assign({}, item);
    // this.dialog = true;
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
  // async deleteItem(item) {
  //   this.deleteIndex = this.forms.indexOf(item);
  //   this.deleteId = this.forms[this.deleteIndex].recordId;
  //   console.log(this.deleteId);
  //   this.newForm = Object.assign({}, item);
  //   this.dialogDelete = true;
  // }

  /**
   * @description Delete a form (flag isDeleted: true)
   */
  async deleteItemConfirm() {
    console.log(this.deleteId);
    this.orders.splice(this.editedIndex, 1);
    const res = await FormRepo.deleteForm(this.formName, this.deleteId);
    this.getFormData();
  }

  /**
   * @description Submit and Save a Form
   */
  async submitForm() {
    if (this.eventAction.detail.method === "Insert") {
      // const res = await FormRepo.insertNewForm(this.newForm);
      // this.newForm = res.data;
    } else if (this.eventAction.detail.method === "Update") {
      // const res = await FormRepo.updateForm(
      //   this.newForm,
      //   this.newForm.recordId
      // );
      // this.newForm = res.data;
    }
  }
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
