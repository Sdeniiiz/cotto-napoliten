import { menuItems } from '../data/menu';
import { categories } from '../data/categories';
import { getBranchBySlug } from './branchService';
import type { Product, BranchProduct } from '../types/product';
import type { Category } from '../types/category';

export function getAllProducts(): Product[] {
  return menuItems;
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getProductsByBranch(branchSlugOrId: string): BranchProduct[] {
  return getBranchProducts(branchSlugOrId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return menuItems.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === 'tumu') return menuItems;
  return menuItems.filter(p => p.category === category);
}

export function getBranchProducts(branchSlugOrId: string): BranchProduct[] {
  const branch = getBranchBySlug(branchSlugOrId);

  return menuItems.map(item => {
    let branchPrice = item.price;
    let isAvailable = true;
    let isOutOfStockToday = false;

    if (branch) {
      if (branch.pricing?.priceOverrides && branch.pricing.priceOverrides[item.slug] !== undefined) {
        branchPrice = branch.pricing.priceOverrides[item.slug];
      }

      if (branch.availability?.availableProductSlugs && branch.availability.availableProductSlugs.length > 0) {
        if (!branch.availability.availableProductSlugs.includes(item.slug)) {
          isAvailable = false;
        }
      }

      if (branch.availability?.outOfStockSlugs && branch.availability.outOfStockSlugs.includes(item.slug)) {
        isOutOfStockToday = true;
      }
    }

    return {
      ...item,
      basePrice: item.price,
      price: branchPrice,
      branchPrice,
      isAvailable,
      isOutOfStockToday,
      branchBadge: branch?.pricing?.priceOverrides && branch.pricing.priceOverrides[item.slug] !== undefined
        ? 'Şube Özel Fiyatı'
        : item.badge
    };
  });
}
