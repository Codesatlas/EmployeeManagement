export interface Document {
  DocumentId: string
  Name: string
  Type: string
  EntityType: number
  DocumentUrl: any
  Ordinal: number
  Size: number
  Status: string
  EntityId: string
  CreateBy: string
  CreateDate: string
  ModifyBy: string
  ModifyDate: string
  File: File;
  }

  export interface ImageModels{
    DocumentId: string
    Size: number
    Name: string
  }