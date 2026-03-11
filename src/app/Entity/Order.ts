import { Product } from "./Product";
import { Vendor } from "./Vendor";

export interface OrderProduct {
  OrderProductId: string;
  OrderId: string;
  ProductId: string;
  VendorId: string;
  Amount: number;
  ProductRate: number;
  Quantity: number;
  Product: Product;
  Order: Order;
  Vendor: Vendor;
}
export interface Order {
  OrderId: string;
  CustomerId: string;
  TotalAmount: number;
  TotalQuantity: number;
  InvoiceNo: string;
  InvoiceSerialNo: number;
  PaymentMode: string;
}
export interface OrderStatus {
  Value: string;
  Name: string;
}
