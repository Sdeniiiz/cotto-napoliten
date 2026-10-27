export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'pizza' | 'burger' | 'baslangic' | 'tatli' | 'icecek' | string;
  categoryName: string;
  price: number;
  basePrice?: number;
  shortDescription: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  portionGrams: number;
  calories: number;
  prepTimeMinutes: number;
  spicyLevel: 0 | 1 | 2 | 3;
  isVegetarian: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  isDailySpecial?: boolean;
  dailySpecialBadge?: string;
  badge?: string;
  image: string;
  sauceDetails: string;
  pastaType: string; // Used as Hamur / Pişirme Tekniği (e.g. "72 Saat Soğuk Fermantasyon • 450°C Özel Napoliten Fırın" or "Tereyağlı Brioche")
  pairingRecommendation: string;
  status?: 'active' | 'archived' | 'draft';
}

export interface BranchProduct extends Product {
  branchPrice: number;
  isAvailable: boolean;
  isOutOfStockToday: boolean;
  branchBadge?: string;
}
