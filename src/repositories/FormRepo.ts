import HttpService from "../services/HttpService";
import { AxiosResponse } from "axios";
import DikisForm from "@/models/DikisForm";

export class FormRepo {
  /**
   * @description Get All Forms
   * @return {DikisForm[]} orders
   */
  public async getForms(): Promise<AxiosResponse> {
    return await HttpService.get("[api]/orders");
  }

  /**
   * @description Get Forms by Order No
   * @param {number} orderNo: Order No
   */
  public async getByOrderNo(orderNo: string): Promise<AxiosResponse> {
    return await HttpService.get(`[api]/orders/${orderNo}`);
  }

  public async getByClient(client: string): Promise<AxiosResponse> {
    return await HttpService.get(`[api]/orders/${client}`);
  }

  public async getColumns(): Promise<AxiosResponse> {
    return await HttpService.get("[api]/columnNames");
  }

  // /**
  //  * @description Insert New Form By id
  //  * @param {number} formAdi
  //  */
  // public async insertNewForm(newForm: DikisForm): Promise<AxiosResponse> {
  //   return await HttpService.post("[api]/api/insertDikisGunlukImalatRaporu", {
  //     recordId: newForm.recordId,
  //     formID: newForm.formID,
  //     formAdi: newForm.formAdi,
  //     isEmri: newForm.isEmri,
  //     musteri: newForm.musteri,
  //     cap: newForm.cap,
  //     siparisAdet: newForm.siparisAdet,
  //     tuyYuksekligi: newForm.tuyYuksekligi,
  //     deriTuru: newForm.deriTuru,
  //     deriAdet: newForm.deriAdet,
  //     cirtTuru: newForm.cirtTuru,
  //     cirtRengi: newForm.cirtRengi,
  //     dikilenKeceAdet: newForm.dikilenKeceAdet,
  //     eklenenParcaAdet: newForm.eklenenParcaAdet,
  //     not: newForm.not,
  //     onay: newForm.onay,
  //     operatorImza: newForm.operatorImza,
  //     operatorAdi: newForm.operatorAdi,
  //   });
  // }

  // public async updateForm(
  //   newForm: DikisForm,
  //   recordId: number
  // ): Promise<AxiosResponse> {
  //   console.log(recordId);
  //   return await HttpService.put(
  //     `[api]/api/updateDikisGunlukImalatRaporu/${recordId}`,
  //     {
  //       formID: newForm.formID,
  //       formAdi: newForm.formAdi,
  //       isEmri: newForm.isEmri,
  //       musteri: newForm.musteri,
  //       cap: newForm.cap,
  //       siparisAdet: newForm.siparisAdet,
  //       tuyYuksekligi: newForm.tuyYuksekligi,
  //       deriTuru: newForm.deriTuru,
  //       deriAdet: newForm.deriAdet,
  //       cirtTuru: newForm.cirtTuru,
  //       cirtRengi: newForm.cirtRengi,
  //       dikilenKeceAdet: newForm.dikilenKeceAdet,
  //       eklenenParcaAdet: newForm.eklenenParcaAdet,
  //       not: newForm.not,
  //       onay: newForm.onay,
  //       operatorImza: newForm.operatorImza,
  //       operatorAdi: newForm.operatorAdi,
  //     }
  //   );
  // }

  /**
   * @description Delete Form By recordId
   */
  public async deleteForm(
    formAdi: string,
    recordId: number
  ): Promise<AxiosResponse> {
    return await HttpService.put(
      `[api]/api/table/${formAdi}/delete/${recordId}`
    );
  }
}

export default new FormRepo();
