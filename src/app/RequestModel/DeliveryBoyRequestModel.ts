export class DeliveryBoyRequestModel {
  DeliveryBoyId?: string;
}
export class DeliveryBoyUpdateRequestModel {
  DeliveryBoyId?: string;
  Verification?: string;
}
export class DeliveryBoyPincodeRequestModel {
  DeliveryBoyId?: string;
  DeliverablePincodes: number [] = [];
}
 export class PincondeRequestModel{
  Pincode:string[]=[]
 }
