import type { Campaign } from '../types/campaign';

export const campaigns: Campaign[] = [
  {
    id: 'cmp-carsamba-ikili-pizza',
    title: 'İkili Napoliten Pizza & 1L İçecek Menüsü',
    description: 'Dilediğiniz 2 adet 450°C özel Napoliten fırın Napoliten pizza + baharatlı patates sepeti + 1L soğuk içecek özel indirimle!',
    badge: '🔥 EN ÇOK TERCİH EDİLEN',
    discountPercent: 15,
    validUntil: '2026-12-31',
    applicableBranches: ['carsamba-merkez', 'atakum-sahil', 'ilkadim-ciftlik', '*'],
    itemsIncluded: ['margherita-napoliten-pizza', 'dort-peynirli-napoliten-pizza', 'capricciosa-pizza'],
  },
  {
    id: 'cmp-burger-pizza-duo',
    title: 'Cotto Duo: 1 Napoliten Pizza + 1 Signature Burger',
    description: 'Kararsız kalanlara Cotto imzası! 1 adet özel Napoliten fırın Napoliten pizza + 1 adet Cotto Signature Burger (patates kızartması ile) + 2 içecek.',
    badge: '🍕🍔 PİZZA & BURGER İKİLİSİ',
    discountPercent: 18,
    validUntil: '2026-12-31',
    applicableBranches: ['*'],
    itemsIncluded: ['margherita-napoliten-pizza', 'cotto-signature-burger'],
  },
  {
    id: 'cmp-gel-al-indirim',
    title: 'Şubeden Gel-Al Siparişlerde Calzone veya İçecek Avantajı',
    description: 'Telefonla veya şubeden vereceğiniz Gel-Al Napoliten pizza siparişlerinizde 10 dakikada sıcak teslimat ve özel fiyat avantajı.',
    badge: '⚡ GEL-AL AVANTAJI',
    discountPercent: 12,
    validUntil: '2026-12-31',
    applicableBranches: ['carsamba-merkez', 'atakum-sahil', 'ilkadim-ciftlik'],
  }
];
