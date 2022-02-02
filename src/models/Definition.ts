export default class Definition {
    // Same Definitions for All Forms
    public terapiNo: number;
    public customer: string;
    public diameter: number;
    public orderQuantity: number;
    public hairHeight: number;
    public skinType: string;
    public skinQuantity: number;
    public velcroType: string;
    public velcroColor: string;
    public sponge: number;
    public basePad: string;

    // Desi-Parça Form
    public lotNo: number;
    public deciMeter: number;
    public attachedPadQuantity: number;
    public gloves: string;

    // Dikiş Form
    public stitchedPadQuantity: number;
    public attachedPartQuantity: number;

    // Ekli Keçe Form
    public partQuantity: number;
    public cutQuantity: number;
    public jointQuantity: number;
    //public attachedPadQuantity: string;

    //Haritalama Form
    public skinQuality: string;

    // Hook & Loop Form
    public moldQuantity: number;

    //Iskarta Form
    public rejectReason: string;
    public rejectedQuantity: number;
    public tornQuantity: number;

    //Iz Basım Form
    public hotPressQuantity: number;
    public laminaPressQuantity: number;
    public focusCirclesQuantity: number;

    //Kalite Kontrol Form
    public combedQuantity: number;
    public qualityControlledQuantity: number;
    public solventCombQuantity: number;   // Sorulacak

    //Kesim Form
    public skinCutQuantityBegining: number;
    public skinFrameCut: number;
    public skinPartCut: number;
    public skinCutQuantityEnd: number;

    //Kırpım Form   Form'a tekrar bakılacak.
    

    //Stok Ambalaj
    public packagingType: string;
    public packagingQuantity: number;
    public sentQuantity: number;
    public stockQuantityEntered: number;
    public stockQuantityLeft: number;

    //Yapıştırma
    public adhesive: string;
  //  public attachedPadQuantity: number;
   // public attachedPartQuantity: number;
    public tapedQuantity: number;          // Sorulacak
    public focusQuantity: number;

    constructor(myObj: any) {
        Object.assign(this, myObj);
    }
}