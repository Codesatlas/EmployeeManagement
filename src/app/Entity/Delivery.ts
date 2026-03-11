import { Document } from "./Document"

export interface DeliveryBoy {
    DeliveryBoyId: string
    Phone: number
    Name: string
    UserName: string
    Email: string
    DOB: string
    Address: string
    VehicleNo: string
    VehicleType: string
    IdNo: string
    WorkingHours: string
    AvailableDays: string[]
    Experience: number
    BankName: string
    BankAccountNo: string
    BankAccountHolderName: string
    Verification: string
    IdProofDocuments: Document[]
    VehicleRCDocuments: Document[]
    ProfilePictureDocuments: Document[]
    CreateBy: string
    CreateDate: string
    ModifyBy: string
    ModifyDate: string
    Status: string
  }