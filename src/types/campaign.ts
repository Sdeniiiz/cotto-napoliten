export interface Campaign {
  id: string;
  title: string;
  description: string;
  badge?: string;
  discountPercent?: number;
  promoCode?: string;
  validUntil?: string;
  isOnlineExclusive?: boolean;
  applicableBranches?: string[];
  itemsIncluded?: string[];
}
