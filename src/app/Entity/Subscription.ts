import { Document } from "./Document";
import { SubscriptionPackage } from "./SubscriptionPackage";

export interface Subscription {
  SubscriptionId: string;
  SubscriptionPackageId: string;
  Name: string;
  Amount: string;
  DiscountBadge: string;
  Status: string;
  Term: string;
  SubscriptionPackage: SubscriptionPackage;
  Documents: Document[];
  CreateBy: string;
  CreateDate: string;
  ModifyBy: string;
  ModifyDate: string;
}
