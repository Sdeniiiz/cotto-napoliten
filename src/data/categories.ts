import type { Category } from '../types/category';

export const categories: Category[] = [
  {
    id: 'pizza',
    name: 'Napoliten Pizzalar',
    slug: 'napoliten-pizzalar',
    description: '72 saat soğuk fermantasyon hamuru, San Marzano domates sosu ve 450°C özel Napoliten fırında 90 saniyede leopar benekli pişirim.',
    icon: '🍕',
    displayOrder: 1,
  },
  {
    id: 'burger',
    name: 'Gurme & Calzone Burgerler',
    slug: 'gurme-burgerler',
    description: 'Günlük çekim %100 dana kaburga köftesi, özel Napoliten fırında Calzone Burger ve özel Cotto imza sosları.',
    icon: '🍔',
    displayOrder: 2,
  },
  {
    id: 'yan-urun',
    name: 'Menüler & Yan Ürünler',
    slug: 'menuler-yan-urunler',
    description: 'Avantajlı 2’li Pizza Menüsü, çıtır parmak patates kızartması, soğan halkası ve soğuk içecekler.',
    icon: '🍟',
    displayOrder: 3,
  }
];
