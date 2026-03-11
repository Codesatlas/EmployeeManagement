export interface Payment {
    PaymentGatewayTransactionId: string
    PaymentMode: string
    Status: string
    TotalAmount: number
    IsPaymentCancel: boolean
    JsonResponse: any
    PaymentGatewayId: string
    Order: OrderItem
  }
  
  export interface OrderItem {
    OrderId: string
    CustomerId: string
    TotalAmount: number
    TotalQuantity: number
    InvoiceNo: string
    InvoiceSerialNo: number
    PaymentMode: string
  }
  