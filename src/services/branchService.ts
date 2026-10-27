import { branches } from '../data/branches';
import { menuItems, type MenuItem } from '../data/menu';
import type { BranchAggregate } from '../types/branch';
import type { CheckoutPayload, OrderContract } from '../types/order';

export function getAllBranches(): BranchAggregate[] {
  return branches;
}

export function getBranchBySlug(slug: string): BranchAggregate | undefined {
  return branches.find(b => b.slug === slug || b.entity.slug === slug);
}

export function getBranchById(id: string): BranchAggregate | undefined {
  return branches.find(b => b.id === id || b.entity.id === id);
}

export function getBranchMenu(branchSlugOrId: string): (MenuItem & { isAvailable: boolean; isOutOfStockToday: boolean; branchPrice: number })[] {
  const branch = branches.find(b => b.slug === branchSlugOrId || b.id === branchSlugOrId);
  
  return menuItems.map(item => {
    let branchPrice = item.price;
    let isAvailable = true;
    let isOutOfStockToday = false;

    if (branch) {
      if (branch.pricing?.priceOverrides && branch.pricing.priceOverrides[item.slug]) {
        branchPrice = branch.pricing.priceOverrides[item.slug];
      }

      if (branch.availability) {
        if (branch.availability.availableProductSlugs && !branch.availability.availableProductSlugs.includes(item.slug)) {
          isAvailable = false;
        }
        if (branch.availability.outOfStockSlugs && branch.availability.outOfStockSlugs.includes(item.slug)) {
          isOutOfStockToday = true;
        }
      }
    }

    return {
      ...item,
      price: branchPrice,
      branchPrice,
      isAvailable,
      isOutOfStockToday
    };
  });
}

export function createOrderContract(payload: CheckoutPayload): OrderContract {
  const branch = getBranchById(payload.branchId);
  const now = new Date();
  const subtotal = payload.items.reduce((acc, it) => acc + it.totalItemPrice, 0);
  const deliveryFee = payload.orderType === 'delivery' ? (branch?.orderSettings.deliveryFee || 0) : 0;
  const discount = 0;
  const total = subtotal + deliveryFee - discount;

  const estimatedMinutes = payload.orderType === 'delivery' 
    ? (branch?.orderSettings.estimatedDeliveryMinutes || 25) 
    : (branch?.orderSettings.estimatedPickupMinutes || 10);

  const readyTime = new Date(now.getTime() + estimatedMinutes * 60000);

  return {
    orderId: `ord_${Math.random().toString(36).substring(2, 9)}`,
    orderNumber: `COTTO-${branch?.entity.branchCode.split('-')[1] || 'CRS'}-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${Math.floor(100 + Math.random() * 900)}`,
    branchId: payload.branchId,
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
