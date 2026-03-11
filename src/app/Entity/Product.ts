import { Category } from "./Category";
import { Subcategory } from "./Subcategory";

export interface Product {
  ProductId: string;
  SubCategoryId: string;
  CategoryId: string;
  VendorId: string;
  Name: string;
  Price: number;
  Specs: string;
  Description: string;
  Features: string;
  Status: string;
  Documents: Document[];
  Category: Category;
  SubCategory: Subcategory;
}
export interface Specs {
  SpecificationName: string;
  Value: string;
}
