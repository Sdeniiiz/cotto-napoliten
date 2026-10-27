import type { BranchAggregate } from '../types/branch';

export type Branch = BranchAggregate;

const ALL_PRODUCT_SLUGS = [
  'margherita-napoliten-pizza',
  'dort-peynirli-napoliten-pizza',
  'ricotta-margherita-pizza',
  'capricciosa-pizza',
  'pizza-funghi',
  'barbeku-chicken-pizza',
  'tonno-napoliten-pizza',
  'pepperoni-pizza',
  'alla-turca-pizza',
  'calzone-burger',
  'cotto-signature-burger',
  'cheeseburger',
  'klasik-burger',
  'tavuk-burger',
  'ikili-pizza-menu',
  'patates-kizartmasi',
  'sogan-halkasi',
  'coca-cola-zero-sugar'
];

export const branches: BranchAggregate[] = [
  // ==========================================
  // 1. SAMSUN ÇARŞAMBA MERKEZ (FLAGSHIP & GENEL MERKEZ)
  // ==========================================
  {
    id: 'sube-carsamba-merkez',
    slug: 'carsamba-merkez',
    name: 'Çarşamba Merkez Şubesi (Flagship)',
    district: 'Çarşamba',
    city: 'Samsun',
    address: 'Kirazbucağı Mahallesi, Kirazbucağı Sokak (Sungurlu Cad. Kesişimi) No: 53/A, Çarşamba / Samsun',
    phone: '+905458344090',
    phoneDisplay: '0 (545) 834 40 90',
    coordinates: {
      lat: 41.1982,
      lng: 36.7265
    },
    googleMapsUrl: 'https://maps.google.com/?q=Kirazbucagi+Mahallesi+Cotto+Napoliten+Carsamba+Samsun',
    workingHours: {
      weekdays: '11:00 - 23:30',
      weekend: '11:00 - 00:00',
      note: '450°C Özel Napoliten fırından sıcak Napoliten pizza, gurme burger ve Yemeksepeti hızlı paket servis.'
    },
    image: '/images/cotto/mekan-tas-firin.jpg',
    highlights: [
      'Cotto Napoliten kurucu amiral gemisi (Flagship) restoranı ve eğitim akademisi',
      'FORNERO özel kubbe hibrit döner fırında 90 saniyede Napoliten pizza',
      'Yemeksepeti üzerinden Çarşamba geneline sıcak teslimat',
      'Ferah iç salon, sıcak İtalyan bistro atmosferi ve açık mutfak deneyimi'
    ],
    directionsGuide: 'Çarşamba Kirazbucağı Mahallesi, Sungurlu Caddesi ile Kirazbucağı Sokak kesişiminde merkezi konumda yer almaktadır. Yeşilırmak sahil yürüyüş aksına ve Tarihi Çarşamba Köprüsü’ne birkaç dakika mesafededir.',
    nearbySpots: [
      'Tarihi Çarşamba Köprüsü & Yeşilırmak Kıyısı',
      'Sungurlu Caddesi',
      'Çarşamba Belediyesi Kültür Merkezi',
      'OMÜ Çarşamba Mustafa Kemal Güneşdoğdu Kampüsü'
    ],
    entity: {
      id: 'sube-carsamba-merkez',
      slug: 'carsamba-merkez',
      name: 'Çarşamba Merkez Şubesi (Flagship)',
      branchCode: 'SAMSUN-CRS-01',
      status: 'active'
    },
    info: {
      tagline: '450°C Özel Napoliten Fırın Napoliten Pizza & Gurme Burgerin Doğduğu Merkez',
      conceptType: 'Cotto Bistro & Pizzeria',
      description: 'Kirazbucağı Mahallesi’nde 72 saat soğuk fermantasyon Napoliten pizzaları ve gurme burgerler.'
    },
    branding: {
      heroImage: {
        desktop: '/images/cotto/mekan-tas-firin.jpg',
        alt: 'Cotto Napoliten Çarşamba Merkez Şubesi Özel Napoliten Fırın ve Atmosfer'
      }
    },
    hero: {
      headline: 'ÇARŞAMBA’DA GERÇEK NAPOLİTEN ATEŞİ.',
      subline: '72 saat dinlenen hamur, 450°C Fornero özel Napoliten fırın ve günlük brioche burgerler. İster masada sıcak deneyimle, ister Yemeksepeti ile kapına gelsin.',
      badgeText: '🔥 FLAGSHIP MERKEZ ŞUBE • ÇARŞAMBA',
      primaryCtaLabel: 'YEMEKSEPETİ’NDEN SİPARİŞ VER',
      primaryCtaUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok'
    },
    contact: {
      phone: '+905458344090',
      phoneDisplay: '0 (545) 834 40 90',
      whatsapp: '+905458344090',
      email: 'info@cottonapoliten.com',
      supportHoursNote: 'Haftanın her günü 11:00 - 00:00 arası Gel-Al, Masa ve Paket Servis hattı.'
    },
    hours: {
      weekdays: '11:00 - 23:30',
      weekend: '11:00 - 00:00',
      note: 'Haftanın 7 günü sıcak özel Napoliten fırın servisi.'
    },
    location: {
      address: 'Kirazbucağı Mahallesi, Kirazbucağı Sokak No: 53/A, Çarşamba / Samsun',
      district: 'Çarşamba',
      city: 'Samsun',
      coordinates: { lat: 41.1982, lng: 36.7265 },
      googleMapsUrl: 'https://maps.google.com/?q=Kirazbucagi+Mahallesi+Cotto+Napoliten+Carsamba+Samsun',
      directionsGuide: 'Kirazbucağı Mahallesi, Sungurlu Caddesi mevkiinde merkezi ulaşım noktasındadır.',
      nearbySpots: ['Tarihi Çarşamba Köprüsü', 'Sungurlu Caddesi', 'OMÜ Çarşamba Kampüsü'],
      parkingInfo: 'Cadde ve sokak üzerinde uygun araç park alanları mevcuttur.'
    },
    social: {
      instagram: 'https://www.instagram.com/cotto_napoliten/',
      googleMyBusinessUrl: 'https://maps.google.com/?q=Kirazbucagi+Mahallesi+Cotto+Napoliten+Carsamba+Samsun'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: ALL_PRODUCT_SLUGS,
      outOfStockSlugs: []
    },
    campaigns: [
      {
        id: 'cmp-carsamba-ikili-pizza',
        title: 'İkili Napoliten Pizza & 1L İçecek Menüsü',
        description: 'Seçeceğiniz 2 adet özel Napoliten fırın Napoliten pizza + Cotto patates kızartması ve 1L soğuk içecek avantajlı fiyatla!',
        badge: '🔥 ÇARŞAMBA FAVORİSİ',
        discountPercent: 15
      },
      {
        id: 'cmp-carsamba-burger-ikili',
        title: '2’li Gurme Cotto Burger Ziyafeti',
        description: '2 adet Cotto Signature Burger + दबल baharatlı patates kızartması + 2 kutu içecek.',
        badge: '🍔 İKİLİ BURGER MENÜ',
        discountPercent: 15
      }
    ],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 10,
      estimatedDeliveryMinutes: 25,
      minDeliveryAmount: 300,
      deliveryFee: 0,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Cotto Napoliten Çarşamba | Cotto Cafe & Restoran Menü & Sipariş',
      metaDescription: 'Samsun Çarşamba Cotto Napoliten Pizza & Burger (Cotto Cafe & Restoran): Kirazbucağı Mah. özel Napoliten fırın Napoliten pizza, gurme burger ve Yemeksepeti sipariş.',
      canonicalUrl: 'https://cottonapoliten.com/subeler/carsamba-merkez',
      keywords: ['cotto napoliten çarşamba', 'cotto cafe ve restoran', 'çarşamba pizza sipariş', 'samsun napoliten pizza']
    },
    theme: {
      primaryAccent: '#D9381E',
      announcementBanner: {
        text: '🔥 Çarşamba Merkez Şubemizde Yemeksepeti ve Gel-Al siparişlerinde özel Napoliten fırından 90 saniyede sıcak çıkış!',
        isActive: true
      }
    },
    faqs: [
      {
        question: 'Çarşamba şubenizde Napoliten pizzalar nasıl pişiriliyor?',
        answer: '72 saat soğuk fermantasyonla dinlendirilen Caputo 00 unlu hamurumuz, 450°C sıcaklıktaki Fornero özel kubbe döner fırınımızda tam 90 saniyede pişirilir.'
      },
      {
        question: 'Yemeksepeti üzerinden sipariş verebilir miyiz?',
        answer: 'Evet! Yemeksepeti üzerinde "Cotto Cafe & Restoran" sayfamızdan veya doğrudan 0 (545) 834 40 90 hattımızdan sipariş verebilirsiniz.'
      }
    ]
  },

  // ==========================================
  // 2. SAMSUN ATAKUM SAHİL (GASTRO LOUNGE)
  // ==========================================
  {
    id: 'sube-atakum-sahil',
    slug: 'atakum-sahil',
    name: 'Atakum Sahil & Marina Şubesi',
    district: 'Atakum',
    city: 'Samsun',
    address: 'Cumhuriyet Mahallesi, Adnan Menderes Bulvarı (Atakum Sahil Yolu) No: 118/A, Atakum / Samsun',
    phone: '+905458344090',
    phoneDisplay: '0 (545) 834 40 90',
    coordinates: {
      lat: 41.3324,
      lng: 36.2718
    },
    googleMapsUrl: 'https://maps.google.com/?q=Atakum+Sahil+Samsun+Cotto+Napoliten',
    workingHours: {
      weekdays: '11:30 - 00:30',
      weekend: '11:30 - 01:30',
      note: 'Atakum sahilinde deniz manzarasına karşı özel Napoliten fırın Napoliten pizza ve kış bahçesi keyfi.'
    },
    image: '/images/cotto/mekan-ic-salon.jpg',
    highlights: [
      'Karadeniz sahil şeridinde İtalyan kış bahçesi ve teras konsepti',
      'OMÜ öğrencileri ve aileler için geniş sosyal oturma düzeni',
      '4 Peynirli Pizza ve Cotto Signature Burger spesiyalleri',
      'Gece 01:30’a kadar sıcak özel Napoliten fırın ve paket servis'
    ],
    directionsGuide: 'Atakum Adnan Menderes Bulvarı sahil yürüyüş yolu üzerinde, Atakum Marina kavşağına 200 metre mesafededir.',
    nearbySpots: ['Atakum Marina', 'Atakum Sahil Yürüyüş Yolu', 'CityMall AVM', 'OMÜ Kurupelit Kampüsü'],
    entity: {
      id: 'sube-atakum-sahil',
      slug: 'atakum-sahil',
      name: 'Atakum Sahil & Marina Şubesi',
      branchCode: 'SAMSUN-ATK-02',
      status: 'active'
    },
    info: {
      tagline: 'Atakum Sahilinde Napoli Rüzgarı ve Gurme Burger',
      conceptType: 'Cotto Gastro Lounge',
      description: 'Deniz kıyısında 450°C özel Napoliten fırından çıkan Napoliten pizzalar ve akşam buluşmaları.'
    },
    branding: {
      heroImage: {
        desktop: '/images/cotto/mekan-ic-salon.jpg',
        alt: 'Cotto Napoliten Atakum Sahil Gastro Lounge'
      }
    },
    hero: {
      headline: 'ATAKUM SAHİLİNDE 450°C NAPOLİTEN ZİYAFETİ.',
      subline: 'Deniz esintisi eşliğinde akışkan Burrata pizzalar, smash burgerler ve İtalyan tatlıları.',
      badgeText: '🌊 SAHİL & KIŞ BAHÇESİ KONSEPTİ',
      primaryCtaLabel: 'ONLINE SİPARİŞ VER',
      primaryCtaUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok'
    },
    contact: {
      phone: '+905458344090',
      phoneDisplay: '0 (545) 834 40 90',
      whatsapp: '+905458344090',
      email: 'atakum@cottonapoliten.com'
    },
    hours: {
      weekdays: '11:30 - 00:30',
      weekend: '11:30 - 01:30',
      note: 'Hafta sonu gece 01:30’a kadar açık.'
    },
    location: {
      address: 'Cumhuriyet Mah. Adnan Menderes Bulvarı No: 118/A, Atakum / Samsun',
      district: 'Atakum',
      city: 'Samsun',
      coordinates: { lat: 41.3324, lng: 36.2718 },
      googleMapsUrl: 'https://maps.google.com/?q=Atakum+Sahil+Samsun+Cotto+Napoliten',
      directionsGuide: 'Atakum Sahil Yolu Marina karşısı.',
      nearbySpots: ['Atakum Marina', 'CityMall AVM']
    },
    social: {
      instagram: 'https://www.instagram.com/cotto_napoliten/'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: ALL_PRODUCT_SLUGS,
      outOfStockSlugs: []
    },
    campaigns: [
      {
        id: 'cmp-atakum-kampus',
        title: 'OMÜ Kampüs & Sahil Pizza Menüsü',
        description: 'Üniversite öğrencilerine özel seçili Napoliten pizzalarda ve burger menülerinde %15 indirim avantajı!',
        badge: '🎓 KAMPÜS AVANTAJI',
        discountPercent: 15
      }
    ],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 10,
      estimatedDeliveryMinutes: 28,
      minDeliveryAmount: 300,
      deliveryFee: 0,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Cotto Napoliten Atakum Sahil | Samsun Napoliten Pizza & Burger',
      metaDescription: 'Cotto Napoliten Atakum Sahil şubesi: Deniz kenarında özel Napoliten fırın İtalyan pizzası ve gurme burger.',
      canonicalUrl: 'https://cottonapoliten.com/subeler/atakum-sahil',
      keywords: ['atakum napoliten pizza', 'cotto napoliten atakum', 'samsun en iyi pizza']
    },
    theme: {
      primaryAccent: '#D9381E'
    },
    faqs: []
  },

  // ==========================================
  // 3. SAMSUN İLKADIM ÇİFTLİK (COTTO EXPRESS & BISTRO)
  // ==========================================
  {
    id: 'sube-ilkadim-ciftlik',
    slug: 'ilkadim-ciftlik',
    name: 'İlkadım Çiftlik Caddesi Şubesi',
    district: 'İlkadım',
    city: 'Samsun',
    address: 'İstiklal Caddesi (Çiftlik Caddesi) No: 94/A, İlkadım / Samsun',
    phone: '+905458344090',
    phoneDisplay: '0 (545) 834 40 90',
    coordinates: {
      lat: 41.2867,
      lng: 36.3312
    },
    googleMapsUrl: 'https://maps.google.com/?q=Ciftlik+Caddesi+Ilkadim+Samsun+Cotto+Napoliten',
    workingHours: {
      weekdays: '11:00 - 23:00',
      weekend: '11:00 - 00:00',
      note: 'Şehrin kalbinde 90 saniyede özel Napoliten fırın pizza ve ekspres burger servisi.'
    },
    image: '/images/cotto/mekan-masalar.jpg',
    highlights: [
      'Çiftlik Caddesi yaya trafiğinin merkezinde Cotto Express & Bistro modeli',
      'Öğle arası çalışanlar için 8 dakikada hızlı öğle menüsü',
      'Yüksek Yemeksepeti & Gel-Al paket servis kapasitesi'
    ],
    directionsGuide: 'İstiklal (Çiftlik) Caddesi yürüyüş aksı üzerinde merkezi noktada yer alır.',
    nearbySpots: ['Çiftlik Caddesi', 'Bulvar AVM', 'Cumhuriyet Meydanı'],
    entity: {
      id: 'sube-ilkadim-ciftlik',
      slug: 'ilkadim-ciftlik',
      name: 'İlkadım Çiftlik Caddesi Şubesi',
      branchCode: 'SAMSUN-ILK-03',
      status: 'active'
    },
    info: {
      tagline: 'Şehrin Merkezinde Hızlı Napoliten & Smash Burger',
      conceptType: 'Cotto Express',
      description: 'İlkadım Çiftlik Caddesi’nde hızlı servis özel Napoliten fırın pizza ve gurme burger noktası.'
    },
    branding: {
      heroImage: {
        desktop: '/images/cotto/mekan-masalar.jpg',
        alt: 'Cotto Napoliten İlkadım Çiftlik Şubesi'
      }
    },
    hero: {
      headline: 'ÇİFTLİK CADDESİ’NDE 90 SANİYEDE ÖZEL NAPOLİTEN FIRIN LEZZETİ.',
      subline: 'Alışveriş molasında veya öğle arasında beklemeden gerçek Napoliten pizza ve brioche burger.',
      badgeText: '⚡ COTTO EXPRESS MODELİ',
      primaryCtaLabel: 'SİPARİŞ VER',
      primaryCtaUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok'
    },
    contact: {
      phone: '+905458344090',
      phoneDisplay: '0 (545) 834 40 90',
      whatsapp: '+905458344090',
      email: 'ilkadim@cottonapoliten.com'
    },
    hours: {
      weekdays: '11:00 - 23:00',
      weekend: '11:00 - 00:00'
    },
    location: {
      address: 'İstiklal Caddesi (Çiftlik Cad.) No: 94/A, İlkadım / Samsun',
      district: 'İlkadım',
      city: 'Samsun',
      coordinates: { lat: 41.2867, lng: 36.3312 },
      googleMapsUrl: 'https://maps.google.com/?q=Ciftlik+Caddesi+Ilkadim+Samsun+Cotto+Napoliten',
      directionsGuide: 'Çiftlik Caddesi üzerinde.',
      nearbySpots: ['Bulvar AVM', 'Cumhuriyet Meydanı']
    },
    social: {
      instagram: 'https://www.instagram.com/cotto_napoliten/'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: ALL_PRODUCT_SLUGS,
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 8,
      estimatedDeliveryMinutes: 25,
      minDeliveryAmount: 280,
      deliveryFee: 0,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Cotto Napoliten İlkadım Çiftlik | Samsun Pizza & Burger',
      metaDescription: 'Cotto Napoliten İlkadım Çiftlik şubesi: Hızlı özel Napoliten fırın pizza ve paket servis.',
      canonicalUrl: 'https://cottonapoliten.com/subeler/ilkadim-ciftlik',
      keywords: ['ilkadım pizza', 'çiftlik caddesi burger']
    },
    theme: {
      primaryAccent: '#D9381E'
    },
    faqs: []
  },

  // ==========================================
  // 4. İSTANBUL KADIKÖY SUADİYE (BISTRO & PIZZERIA)
  // ==========================================
  {
    id: 'sube-istanbul-suadiye',
    slug: 'istanbul-suadiye',
    name: 'İstanbul Suadiye (Bağdat Cad.) Şubesi',
    district: 'Kadıköy',
    city: 'İstanbul',
    address: 'Suadiye Mahallesi, Bağdat Caddesi Plaj Yolu Sok. No: 18/A, Kadıköy / İstanbul',
    phone: '+905458344090',
    phoneDisplay: '0 (545) 834 40 90',
    coordinates: {
      lat: 40.9612,
      lng: 29.0785
    },
    googleMapsUrl: 'https://maps.google.com/?q=Suadiye+Bagdat+Caddesi+Kadikoy+Istanbul',
    workingHours: {
      weekdays: '11:30 - 00:30',
      weekend: '11:30 - 01:30',
      note: 'Bağdat Caddesi aksında kış bahçesi ve artisan özel Napoliten fırın deneyimi.'
    },
    image: '/images/cotto/mekan-banko-logo.jpg',
    highlights: [
      'Bağdat Caddesi Suadiye aksında şık kış bahçesi',
      'İtalyan Caputo 00 unlu 72 saat fermente 4 Peynirli & Capricciosa spesiyalleri',
      'Marmara Bölgesi örnek Cotto Bistro & Gastro franchise modeli'
    ],
    directionsGuide: 'Bağdat Caddesi Suadiye ışıklardan sahil yönüne dönüldüğünde 100 metre ileride sağ koldadır.',
    nearbySpots: ['Bağdat Caddesi', 'Suadiye Sahili', 'Şaşkınbakkal'],
    entity: {
      id: 'sube-istanbul-suadiye',
      slug: 'istanbul-suadiye',
      name: 'İstanbul Suadiye (Bağdat Cad.) Şubesi',
      branchCode: 'IST-SUA-01',
      status: 'active'
    },
    info: {
      tagline: 'Anadolu Yakasında Artisan Napoliten & Kış Bahçesi',
      conceptType: 'Cotto Gastro Lounge',
      description: 'Suadiye’de taş ateşinde pişen Napoliten pizzalar ve gurme burgerler.'
    },
    branding: {
      heroImage: {
        desktop: '/images/cotto/mekan-banko-logo.jpg',
        alt: 'Cotto Napoliten İstanbul Suadiye Şubesi'
      }
    },
    hero: {
      headline: 'BAĞDAT CADDESİ’NDE ARTISAN NAPOLİTEN.',
      subline: 'Suadiye kış bahçemizde 450°C özel Napoliten fırından çıkan leopar benekli pizzalar ve İtalyan lezzetleri.',
      badgeText: '✨ İSTANBUL FLAGSHIP BISTRO',
      primaryCtaLabel: 'MENÜYÜ İNCELE',
      primaryCtaUrl: '/menu'
    },
    contact: {
      phone: '+905458344090',
      phoneDisplay: '0 (545) 834 40 90',
      whatsapp: '+905458344090',
      email: 'istanbul@cottonapoliten.com'
    },
    hours: {
      weekdays: '11:30 - 00:30',
      weekend: '11:30 - 01:30'
    },
    location: {
      address: 'Suadiye Mah. Bağdat Caddesi Plaj Yolu Sok. No: 18/A, Kadıköy / İstanbul',
      district: 'Kadıköy',
      city: 'İstanbul',
      coordinates: { lat: 40.9612, lng: 29.0785 },
      googleMapsUrl: 'https://maps.google.com/?q=Suadiye+Bagdat+Caddesi+Kadikoy+Istanbul',
      directionsGuide: 'Bağdat Caddesi Suadiye mevkiinde.',
      nearbySpots: ['Bağdat Caddesi', 'Suadiye Parkı']
    },
    social: {
      instagram: 'https://www.instagram.com/cotto_napoliten/'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: ALL_PRODUCT_SLUGS,
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 12,
      estimatedDeliveryMinutes: 30,
      minDeliveryAmount: 350,
      deliveryFee: 0,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Cotto Napoliten İstanbul Suadiye | Bağdat Caddesi İtalyan Pizza',
      metaDescription: 'Cotto Napoliten Suadiye Kadıköy şubesi: Özel Napoliten fırında Napoliten pizza ve gurme İtalyan mutfağı.',
      canonicalUrl: 'https://cottonapoliten.com/subeler/istanbul-suadiye',
      keywords: ['suadiye napoliten pizza', 'cotto gastro istanbul', 'bağdat caddesi pizza']
    },
    theme: {
      primaryAccent: '#D9381E'
    },
    faqs: []
  },

  // ==========================================
  // 5. ANKARA ÇANKAYA TUNALI (COTTO BISTRO)
  // ==========================================
  {
    id: 'sube-ankara-tunali',
    slug: 'ankara-tunali',
    name: 'Ankara Tunalı & Bestekar Şubesi',
    district: 'Çankaya',
    city: 'Ankara',
    address: 'Bestekar Sokak No: 42/A (Tunalı Hilmi Kesişimi), Çankaya / Ankara',
    phone: '+905458344090',
    phoneDisplay: '0 (545) 834 40 90',
    coordinates: {
      lat: 39.9056,
      lng: 32.8601
    },
    googleMapsUrl: 'https://maps.google.com/?q=Bestekar+Sokak+Tunali+Cankaya+Ankara',
    workingHours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Tunalı’da sıcak özel Napoliten fırın Napoliten pizza ve smash burger buluşma noktası.'
    },
    image: '/images/cotto/mekan-dis-cephe.jpg',
    highlights: [
      'Kuğulu Park ve Tunalı Hilmi Caddesi’ne 2 dakika yürüme mesafesi',
      'İç Anadolu Bölgesi Cotto Bistro örnek franchise mağazası',
      '72 saat soğuk fermantasyon hamuru ve açık özel Napoliten fırın barı'
    ],
    directionsGuide: 'Tunalı Hilmi Caddesi üzerinden Bestekar Sokak’a girildiğinde sol kolda yer alır.',
    nearbySpots: ['Kuğulu Park', 'Tunalı Hilmi Caddesi', 'Seğmenler Parkı'],
    entity: {
      id: 'sube-ankara-tunali',
      slug: 'ankara-tunali',
      name: 'Ankara Tunalı & Bestekar Şubesi',
      branchCode: 'ANK-TUN-01',
      status: 'active'
    },
    info: {
      tagline: 'Başkentte Gerçek Özel Napoliten Fırın Napoliten Deneyimi',
      conceptType: 'Cotto Bistro & Pizzeria',
      description: 'Çankaya Tunalı’da 450°C özel Napoliten fırından sıcak İtalyan pizzaları ve gurme burgerler.'
    },
    branding: {
      heroImage: {
        desktop: '/images/cotto/mekan-dis-cephe.jpg',
        alt: 'Cotto Napoliten Ankara Tunalı Şubesi'
      }
    },
    hero: {
      headline: 'TUNALI’DA 450°C NAPOLİTEN & BURGER KEYFİ.',
      subline: 'İş çıkışında veya hafta sonu buluşmalarında özel Napoliten fırından çıkan sıcacık lezzetler.',
      badgeText: '🏛️ ANKARA BISTRO KONSEPTİ',
      primaryCtaLabel: 'MENÜYÜ GÖR',
      primaryCtaUrl: '/menu'
    },
    contact: {
      phone: '+905458344090',
      phoneDisplay: '0 (545) 834 40 90',
      whatsapp: '+905458344090',
      email: 'ankara@cottonapoliten.com'
    },
    hours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00'
    },
    location: {
      address: 'Bestekar Sokak No: 42/A, Çankaya / Ankara',
      district: 'Çankaya',
      city: 'Ankara',
      coordinates: { lat: 39.9056, lng: 32.8601 },
      googleMapsUrl: 'https://maps.google.com/?q=Bestekar+Sokak+Tunali+Cankaya+Ankara',
      directionsGuide: 'Tunalı Hilmi - Bestekar kesişimi.',
      nearbySpots: ['Kuğulu Park', 'Seğmenler Parkı']
    },
    social: {
      instagram: 'https://www.instagram.com/cotto_napoliten/'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: ALL_PRODUCT_SLUGS,
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 10,
      estimatedDeliveryMinutes: 28,
      minDeliveryAmount: 300,
      deliveryFee: 0,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Cotto Napoliten Ankara Tunalı | Çankaya Napoliten Pizza',
      metaDescription: 'Cotto Napoliten Ankara Çankaya Tunalı şubesi: Özel Napoliten fırın İtalyan pizzası ve gurme burger.',
      canonicalUrl: 'https://cottonapoliten.com/subeler/ankara-tunali',
      keywords: ['ankara napoliten pizza', 'tunalı pizza burger']
    },
    theme: {
      primaryAccent: '#D9381E'
    },
    faqs: []
  },

  // ==========================================
  // 6. TRABZON ORTAHİSAR / YOMRA (DOĞU KARADENİZ HUB)
  // ==========================================
  {
    id: 'sube-trabzon-yomra',
    slug: 'trabzon-yomra',
    name: 'Trabzon Kaşüstü & Sahil Şubesi',
    district: 'Yomra',
    city: 'Trabzon',
    address: 'Kaşüstü Mahallesi, Devlet Karayolu Caddesi Sahil Bulvarı No: 64/B, Yomra / Trabzon',
    phone: '+905458344090',
    phoneDisplay: '0 (545) 834 40 90',
    coordinates: {
      lat: 40.9585,
      lng: 39.8412
    },
    googleMapsUrl: 'https://maps.google.com/?q=Kasustu+Yomra+Trabzon+Cotto+Napoliten',
    workingHours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Doğu Karadeniz’in yeni nesil özel Napoliten fırın Napoliten pizza ve gurme burger üssü.'
    },
    image: '/images/cotto/mekan-usta-firin.jpg',
    highlights: [
      'Doğu Karadeniz bölgesel büyüme ve gastro bistro merkezi',
      'Geniş aile masaları, çocuk dostu menüler ve hızlı paket servis',
      'Fornero döner özel Napoliten fırında 90 saniyede kesintisiz servis'
    ],
    directionsGuide: 'Trabzon Cevahir AVM ve Kaşüstü Sahil kavşağına 2 dakika mesafededir.',
    nearbySpots: ['Cevahir Outlet AVM', 'Kaşüstü Plajı', 'KTÜ Kampüsü (10 dk)'],
    entity: {
      id: 'sube-trabzon-yomra',
      slug: 'trabzon-yomra',
      name: 'Trabzon Kaşüstü & Sahil Şubesi',
      branchCode: 'TRB-YOM-01',
      status: 'active'
    },
    info: {
      tagline: 'Karadeniz’de Büyüyen Napoliten Lezzet Zinciri',
      conceptType: 'Cotto Bistro & Pizzeria',
      description: 'Trabzon Kaşüstü’nde özel Napoliten fırın Napoliten pizzalar ve gurme burgerler.'
    },
    branding: {
      heroImage: {
        desktop: '/images/cotto/mekan-usta-firin.jpg',
        alt: 'Cotto Napoliten Trabzon Şubesi'
      }
    },
    hero: {
      headline: 'TRABZON’DA ÖZEL NAPOLİTEN FIRIN NAPOLİTEN HEYECANI.',
      subline: 'Samsun’dan tüm Karadeniz’e yayılan gerçek 72 saat fermente Napoliten pizza lezzeti.',
      badgeText: '🌲 KARADENİZ BÜYÜME AĞI',
      primaryCtaLabel: 'FRANCHISE & ŞUBE DETAYI',
      primaryCtaUrl: '/franchise'
    },
    contact: {
      phone: '+905458344090',
      phoneDisplay: '0 (545) 834 40 90',
      whatsapp: '+905458344090',
      email: 'trabzon@cottonapoliten.com'
    },
    hours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00'
    },
    location: {
      address: 'Kaşüstü Mah. Devlet Karayolu Cad. No: 64/B, Yomra / Trabzon',
      district: 'Yomra',
      city: 'Trabzon',
      coordinates: { lat: 40.9585, lng: 39.8412 },
      googleMapsUrl: 'https://maps.google.com/?q=Kasustu+Yomra+Trabzon+Cotto+Napoliten',
      directionsGuide: 'Kaşüstü sahil bulvarı üzerinde.',
      nearbySpots: ['Cevahir AVM', 'Kaşüstü Sahili']
    },
    social: {
      instagram: 'https://www.instagram.com/cotto_napoliten/'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: ALL_PRODUCT_SLUGS,
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 10,
      estimatedDeliveryMinutes: 28,
      minDeliveryAmount: 300,
      deliveryFee: 0,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com/restaurant/xiok/cotto-cafe-and-restoran-xiok',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Cotto Napoliten Trabzon | Napoliten Pizza & Burger',
      metaDescription: 'Cotto Napoliten Trabzon Yomra Kaşüstü şubesi: Özel Napoliten fırın İtalyan pizzası ve gurme burger.',
      canonicalUrl: 'https://cottonapoliten.com/subeler/trabzon-yomra',
      keywords: ['trabzon napoliten pizza', 'cotto napoliten trabzon']
    },
    theme: {
      primaryAccent: '#D9381E'
    },
    faqs: []
  }
];

export function getBranchBySlug(slug: string): BranchAggregate | undefined {
  return branches.find(b => b.slug === slug || b.entity.slug === slug);
}

export function getBranchesByCity(city: string): BranchAggregate[] {
  if (!city || city === 'all' || city === 'tumu') return branches;
  return branches.filter(b => b.city.toLowerCase() === city.toLowerCase() || b.location?.city.toLowerCase() === city.toLowerCase());
}

export function getAllCities(): string[] {
  const cities = new Set<string>();
  branches.forEach(b => cities.add(b.city));
  return Array.from(cities);
}
