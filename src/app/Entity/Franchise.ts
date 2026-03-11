import { Document } from "./Document";

export interface Franchise {
  FranchiseId: string;
  Name: string;
  Email: string;
  MobileNo: string;
  Address: string;
  District: string;
  Pin: string;
  Description: string;
  FranchiseVerificationType: string;
  SessionToken: string;
  FranchiseRegistrationDocuments: Document[];
  FranchisePanDocuments: Document[];
}
