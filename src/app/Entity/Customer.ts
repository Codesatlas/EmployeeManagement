import { Document } from "./Document";
import { Subscription } from "./Subscription";

export interface Customer {
  CustomerId: string;
  Name: string;
  Username: string;
  Email: string;
  Website: string;
  About: string;
  MobileNo: string;
  Address: string;
  IsPaidSubscriber: boolean;
  SessionToken: string;
  Status: string;
  CustomerSubscription: CustomerSubscription;
  Documents: Document[];
  CreateBy: string;
  CreateDate: string;
  ModifyBy: string;
  ModifyDate: string;
}
export interface CustomerSubscription {
  CustomerSubscriptionMappingId: string;
  CustomerId: string;
  SubscriptionId: string;
  Customer: string;
  Subscription: Subscription;
  Package: string;
  StartDate: string;
  EndDate: string;
  Status: string;
  CreateBy: string;
  CreateDate: string;
  ModifyBy: string;
  ModifyDate: string;
}
