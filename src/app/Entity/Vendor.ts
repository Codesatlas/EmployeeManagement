import { Document } from "./Document"

export interface Vendor {
    VendorId: string
    Name: string
    BusinessName: string
    Phone: string
    BusinessAddress: string
    Email: string
    BusinessPanNo: string
    GSTNo: string
    PinCode: number
    City: string
    Status: string
    VendorVerification: string
    TradeLicenseDocuments: Document[]
    PanDocuments: Document[]
    ProfilePictureDocuments: Document[]
  }