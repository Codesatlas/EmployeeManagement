import { Category } from "./Category";
import { Document } from "./Document";

export interface Subcategory {
  SubCategoryId: string;
  CategoryId: string;
  Name: string;
  Status: string;
  Category: Category;
  Slug: string;
  CustomDataFieldSubCategoryMappings: any[];
  IsSelected: boolean;
  Documents: Document[];
}
