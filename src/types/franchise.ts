export interface FranchiseConceptModel {
  id: 'express' | 'bistro' | 'gastro';
  name: string;
  badge: string;
  tagline: string;
  areaSqm: string;
  seatingCapacity: string;
  investmentRange: string;
  investmentNumericMin: number; // In Million TL
  investmentNumericAvg: number; // In Million TL
  targetPaybackMonths: string;
  avgTicketPrice: number;
  defaultDailyOrders: number;
  profitMarginPercent: number;
  staffCount: string;
  ovenType: string;
  hourlyPizzaCapacity: string;
  idealLocations: string[];
  features: string[];
  image: string;
  recommended?: boolean;
}

export interface TargetExpansionCity {
  city: string;
  region: string;
  status: 'Aktif Merkez' | 'Kurulumda' | 'Öncelikli Hedef' | 'Başvuruya Açık';
  availableQuota: number;
  priorityDistricts: string[];
  demandLevel: 'Çok Yüksek' | 'Yüksek' | 'Büyüyen Pazar';
}

export interface FranchiseFAQItem {
  question: string;
  answer: string;
  category: 'Finansal' | 'Operasyon & Mutfak' | 'Tedarik & Eğitim' | 'Lokasyon & Sözleşme';
}
