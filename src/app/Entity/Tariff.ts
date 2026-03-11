import { Document } from "./Document";

export interface Tariff {
  TariffId: string;
  TariffPackageId: string;
  Name: string;
  Amount: string;
  Status: string;
  ProductLimit: number;
  Term: string;
  GSTAmount: string;
  GSTType: string;
  TariffPackage: TariffPackage;
  Documents: Document[];
  CreateBy: string;
  CreateDate: string;
  ModifyBy: string;
  ModifyDate: string;
  PersonalisedPage: string;
  BannerHourLimit: number;
  DiscountBadge: string;
}
export interface TariffPackage {
  TariffPackageId: string;
  Name: string;
  Status: string;
  CreateBy: string;
  ProductLimit: number;

  CreateDate: string;
  ModifyBy: string;
  ModifyDate: string;
}
export interface TariffTerm {
  Value: string;
  Name: string;
}
