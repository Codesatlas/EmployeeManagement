import { Document } from "./Document"

export interface GiftCard {
    GiftCardId: string
    Name: string
    Description: string
    Amount: number
    Code: string
    Status: string
    Documents: Document[]
  }
  