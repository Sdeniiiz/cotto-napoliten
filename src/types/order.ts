export interface OrderModifier {
  id: string;
  name: string;
  extraPrice: number;
}

export interface CartItem {
  id: string;
  productSlug: string;
  name: string;
  pastaType: string;
  portionGrams: number;
  unitPrice: number;
  quantity: number;
  modifiers: OrderModifier[];
  specialInstructions?: string;
  totalItemPrice: number;
}

export interface Cart {
  branchId: string;
  branchSlug: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discountAmount: number;
  appliedCampaignId?: string;
  total: number;
}

export type OrderType = 'takeaway_pickup' | 'delivery' | 'dine_in';
export type PaymentMethod = 'online_credit_card' | 'pay_at_door_card' | 'pay_at_door_cash';
export type OrderStatus = 'pending_payment' | 'received' | 'in_kitchen' | 'ready_for_pickup' | 'on_courier' | 'delivered' | 'cancelled';

export interface CustomerNAP {
  fullName: string;
  phone: string;
  email?: string;
}

export interface DeliveryAddress {
  addressLine: string;
  buildingNo: string;
  floorNo?: string;
  apartmentNo?: string;
  district: string;
  city: string;
  addressNote?: string;
}

export interface CheckoutPayload {
  branchId: string;
  orderType: OrderType;
  customer: CustomerNAP;
  deliveryAddress?: DeliveryAddress;
  pickupTimeEstimated?: string;
  paymentMethod: PaymentMethod;
  items: CartItem[];
  campaignCode?: string;
  notes?: string;
}

export interface OrderContract {
  orderId: string;
  orderNumber: string;
  branchId: string;
  branchName: string;
  status: OrderStatus;
  orderType: OrderType;
  paymentMethod: PaymentMethod;
  isPaid: boolean;
  customer: CustomerNAP;
  deliveryAddress?: DeliveryAddress;
  items: CartItem[];
  pricing: {
    subtotal: number;
    deliveryFee: number;
    discount: number;
    total: number;
  };
  createdAt: string;
  estimatedReadyAt: string;
}
