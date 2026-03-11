export interface CustomDataField{
        CustomDataFieldId:string
        Label: string
        CustomDataFieldSubCategoryMappings: CustomDataFieldSubCategoryMapping[]
        Type: string
        Name: string[]
}

export interface CustomDataFieldSubCategoryMapping{
        SubCategoryId:string;
        CustomDataFieldId:string;
        CustomDataFieldSubCategoryMappingId : string;
}