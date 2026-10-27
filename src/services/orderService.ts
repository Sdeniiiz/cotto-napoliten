import { getBranchById, getBranchBySlug } from './branchService';
import type { CheckoutPayload, OrderContract } from '../types/order';

export function createBranchOrderContract(payload: CheckoutPayload): OrderContract {
  const branch = getBranchById(payload.branchId) || getBranchBySlug(payload.branchId);
  const now = new Date();
  const subtotal = payload.items.reduce((acc, it) => acc + it.totalItemPrice, 0);
  const deliveryFee = payload.orderType === 'delivery' ? (branch?.orderSettings?.deliveryFee || 0) : 0;
  const discount = 0;
  const total = subtotal + deliveryFee - discount;

  const estimatedMinutes = payload.orderType === 'delivery' 
    ? (branch?.orderSettings?.estimatedDeliveryMinutes || 25) 
    : (branch?.orderSettings?.estimatedPickupMinutes || 10);

  const readyTime = new Date(now.getTime() + estimatedMinutes * 60000);

  return {
    orderId: `ord_${Math.random().toString(36).substring(2, 9)}`,
    orderNumber: `COTTO-${branch?.entity?.branchCode?.split('-')[1] || 'CRS'}-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${Math.floor(100 + Math.random() * 900)}`,
    branchId: branch?.id || payload.branchId,
    branchName: branch?.name || 'Cotto Napoliten',
    status: 'received',
    orderType: payload.orderType,
    paymentMethod: payload.paymentMethod,
    isPaid: payload.paymentMethod === 'online_credit_card',
    customer: payload.customer,
    deliveryAddress: payload.deliveryAddress,
    items: payload.items,
    pricing: {
      subtotal,
      deliveryFee,
      discount,
      total
    },
    createdAt: now.toISOString(),
    estimatedReadyAt: readyTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  };
}

export function isBranchOpenForOrdering(branchSlugOrId: string, orderType: 'pickup' | 'delivery'): boolean {
  const branch = getBranchById(branchSlugOrId) || getBranchBySlug(branchSlugOrId);
  if (!branch || branch.entity.status !== 'active') return false;

  if (orderType === 'pickup') {
    return !!branch.orderSettings.pickupEnabled;
  }
  return !!branch.orderSettings.deliveryEnabled;
}

export function getSampleOrderContract(): OrderContract {
  return createBranchOrderContract({
    branchId: 'sube-carsamba-merkez',
    orderType: 'delivery',
    paymentMethod: 'online_credit_card',
    customer: {
      fullName: 'Örnek Müşteri',
      phone: '+905458344090'
    },
    items: [
      {
        productId: 'cotto-p01',
        productName: 'Margherita Napoliten Pizza',
        quantity: 1,
        unitPrice: 400,
        totalItemPrice: 400
      }
    ]
  });
}
