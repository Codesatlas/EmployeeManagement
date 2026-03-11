import { Document } from "./Document"

export interface Ads {
    AdsPostId: string
    CustomerId: string
    CategoryId: string
    SubCategoryId: string
    Title: string
    Description: string
    Price: number
    MobileNo: string
    City: string
    Address: any
    Latitude: any
    Longitude: any
    OpenJson: string
    EndDate: string
    Verification: any
    Status: string
    Documents: Document[]
  }