export class CouponRequestModel {
  CouponId?: string;
  SubCategoryId?: string;
  Discount?: number;
  Code?: number;
  Upto?: number;
  StartDate?: string;
  EndDate?: string;
  Status?: string;
}
export class GetCouponRequestModel {
  CouponId?: string;
}
export class CouponCustomerRequestModel {
  CouponId: string;
  Customers: CouponCustomer[];
}

export class CouponCustomer {
  CustomerId: string;
}
