import { Document } from "./Document"
export interface Category {
    CategoryId: string
    Name: string
    Slug: string
    Status: string
    Icon:string
    IsNavBar:boolean
    Documents: Document[]
  }