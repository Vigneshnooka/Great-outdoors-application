export class Order {
    constructor(
      public orderId: number,
      public userId: number,
      public totalPrice: number,
      public totalQuantity: number,
      public deliveryDate: Date,
      public dispatchDate: Date
    ) {}
  }