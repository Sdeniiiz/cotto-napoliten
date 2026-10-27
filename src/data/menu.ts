import type { Product } from '../types/product';

export type MenuItem = Product;

export const menuItems: MenuItem[] = [
  // ==========================================
  // 1. NAPOLİTEN PİZZALAR (Gerçek Cotto Napoliten Görselleri & Yemeksepeti Menüsü)
  // ==========================================
  {
    id: 'cotto-p01',
    slug: 'margherita-napoliten-pizza',
    name: 'Margherita Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 400,
    shortDescription: 'Özel İtalyan domates sosu, taze mozzarella peyniri, fesleğen ve sızma zeytinyağı.',
    description: 'Napoli’nin değişmeyen klasiği. 72 saat soğuk fermantasyonla dinlendirilmiş Napoliten hamurumuz, 450°C özel kubbe fırında 90 saniyede pişer. Kabaran leopar benekli kenarları, özel domates sosu ve eriyen mozzarella peyniri ile gerçek İtalyan lezzeti.',
    ingredients: [
      '72 saat soğuk fermente Napoliten hamuru',
      'Özel İtalyan domates sosu',
      'Taze mozzarella peyniri',
      'Taze fesleğen yaprakları',
      'Sızma zeytinyağı'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 420,
    calories: 780,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    isDailySpecial: true,
    dailySpecialBadge: 'Özel Napoliten Fırın Klasiği',
    badge: 'Klasik',
    image: '/images/cotto/01_Margherita_Pizza.jpg',
    sauceDetails: 'Özel İtalyan domates sosu ve sızma zeytinyağı.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Buzlu Coca-Cola Zero Sugar ve çıtır patates kızartması ile.'
  },
  {
    id: 'cotto-p02',
    slug: 'dort-peynirli-napoliten-pizza',
    name: '4 Peynirli Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 500,
    shortDescription: 'Mozzarella, Fontina, Gorgonzola ve Grana Padano peynirlerinin özel Napoliten fırındaki kusursuz uyumu.',
    description: 'Peynir tutkunları için Cotto Napoliten’in en çok tercih edilen pizzalarından biri. Mozzarella, Fontina, Gorgonzola ve Grana Padano peynirleri 450°C özel Napoliten fırında tek bir kadife katmana dönüşür.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Mozzarella peyniri',
      'Fontina peyniri',
      'Gorgonzola peyniri',
      'Grana Padano peyniri'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 460,
    calories: 920,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    badge: 'Çok Satan',
    image: '/images/cotto/02_4_Peynirli_Pizza.jpg',
    sauceDetails: '4 İtalyan peynirinin yoğun eriyik dengesi.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Çıtır soğan halkası ile mükemmel uyum.'
  },
  {
    id: 'cotto-p03',
    slug: 'ricotta-margherita-pizza',
    name: 'Ricotta Margherita Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 450,
    shortDescription: 'Domates sos, mozzarella peyniri ve kadifemsi İtalyan ricotta peyniri.',
    description: 'Klasik Margherita’nın kremamsı İtalyan Ricotta peyniriyle zenginleştirilmiş gurme yorumu. Özel Napoliten fırından çıkan çıtır-yumuşak hamurun sıcaklığıyla hafifçe eriyen ricotta dokunuşu her dilimde ipeksi bir lezzet bırakır.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Özel domates sosu',
      'Mozzarella peyniri',
      'Taze Ricotta peyniri',
      'Fesleğen ve zeytinyağı'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 450,
    calories: 840,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    badge: 'Özel Reçete',
    image: '/images/cotto/03_Ricotta_Margherita_Pizza.jpg',
    sauceDetails: 'Domates sosu ve taze ricotta peyniri.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Soğuk içecek ile hafif ve gurme bir öğün.'
  },
  {
    id: 'cotto-p04',
    slug: 'capricciosa-pizza',
    name: 'Capricciosa Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 500,
    shortDescription: 'Domates sos, mozzarella peyniri, dana füme et ve taze mantar dilimleri.',
    description: 'İtalyan şarküteri kültürünün özel Napoliten fırındaki şöleni. İnce dilimlenmiş dana füme et, taze mantarlar, mozzarella ve özel domates sosuyla yüksek ısıda pişirilen imza lezzetimiz.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Özel domates sosu',
      'Mozzarella peyniri',
      'Dana füme et',
      'Taze mantar dilimleri'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 490,
    calories: 890,
    prepTimeMinutes: 5,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'Cotto İmzası',
    image: '/images/cotto/04_Capricciosa_Pizza.jpg',
    sauceDetails: 'Özel domates sosu, dana füme et ve taze mantar.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Parmak dilim patates kızartması ile.'
  },
  {
    id: 'cotto-p05',
    slug: 'pizza-funghi',
    name: 'Pizza Funghi',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 450,
    shortDescription: 'Domates sos, mozzarella peyniri; kültür, kestane ve istiridye mantarları.',
    description: 'Mantar severler için 3 farklı mantar çeşidiyle hazırlanan özel Napoliten fırın klasiği. Kültür, kestane ve istiridye mantarları 450°C özel Napoliten fırında suyunu kaybetmeden karamelize olur.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Domates sos',
      'Mozzarella peyniri',
      'Kültür, kestane ve istiridye mantarı'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 450,
    calories: 790,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: false,
    badge: '3 Çeşit Mantar',
    image: '/images/cotto/05_Pizza_Funghi.jpg',
    sauceDetails: 'Domates sos ve üçlü mantar harmanı.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Soğuk içecek ile önerilir.'
  },
  {
    id: 'cotto-p06',
    slug: 'barbeku-chicken-pizza',
    name: 'Barbekü Chicken Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 525,
    shortDescription: 'Domates sos, mozzarella peyniri, marine tavuk dilimleri ve karamelize barbekü sos.',
    description: 'Napoliten hamurunun hafifliği ile tütsülü barbekü sosun en sevilen buluşması. Özel marine edilmiş tavuk göğsü dilimleri, mozzarella ve barbekü sos ile özel Napoliten fırında pişirilir.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Domates sos ve Barbekü sos',
      'Mozzarella peyniri',
      'Marine edilmiş tavuk dilimleri'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 500,
    calories: 910,
    prepTimeMinutes: 5,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'Popüler',
    image: '/images/cotto/06_Barbeku_Chicken_Pizza.jpg',
    sauceDetails: 'Domates sos ve tütsülü BBQ sos dengesi.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Soğan halkası ve soğuk içecek ile.'
  },
  {
    id: 'cotto-p07',
    slug: 'tonno-napoliten-pizza',
    name: 'Tonno Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 550,
    shortDescription: 'Domates sos, mozzarella peyniri, ton balığı, tatlı mısır ve mor soğan.',
    description: 'İri parçalı ton balığı, tatlı mısır ve karamelize mor soğanın özel Napoliten fırındaki uyumu. Yüksek proteinli ve ferah bir Napoliten deneyimi.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Domates sos',
      'Mozzarella peyniri',
      'Ton balığı',
      'Tatlı mısır ve mor soğan'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri', 'Balık'],
    portionGrams: 495,
    calories: 860,
    prepTimeMinutes: 5,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: false,
    image: '/images/cotto/07_Tonno_Pizza.jpg',
    sauceDetails: 'Domates sos, ton balığı ve mor soğan.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Soğuk içecek ile servis edilir.'
  },
  {
    id: 'cotto-p08',
    slug: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 500,
    shortDescription: 'Domates sos, eriyen mozzarella peyniri ve özel Napoliten fırında kızarmış dana pepperoni sucuk dilimleri.',
    description: '450°C özel Napoliten fırın ateşinde kenarları hafifçe kıvrılarak kızaran dana pepperoni sucuk dilimleri, bol mozzarella ve özel domates sosuyla klasik lezzet.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Domates sos',
      'Mozzarella peyniri',
      'Dana pepperoni sucuk'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 480,
    calories: 930,
    prepTimeMinutes: 4,
    spicyLevel: 1,
    isVegetarian: false,
    isPopular: true,
    badge: 'Favori',
    image: '/images/cotto/08_Pepperoni_Pizza.jpg',
    sauceDetails: 'Özel domates sosu ve dana pepperoni.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: 'Parmak dilim patates kızartması ile.'
  },
  {
    id: 'cotto-p09',
    slug: 'alla-turca-pizza',
    name: 'Alla Turca Pizza',
    category: 'pizza',
    categoryName: 'Napoliten Pizzalar',
    price: 525,
    shortDescription: 'Domates sos, mozzarella, kasap sucuk, dana füme et, taze mantar ve siyah zeytin.',
    description: 'Zengin malzeme sevenler için kasap sucuk, dana füme et, taze mantar ve siyah zeytinin 72 saat dinlenmiş Napoliten hamuru üzerindeki doyurucu buluşması.',
    ingredients: [
      '72 saat fermente Napoliten hamuru',
      'Domates sos',
      'Mozzarella peyniri',
      'Kasap sucuk ve dana füme et',
      'Taze mantar ve siyah zeytin'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 510,
    calories: 960,
    prepTimeMinutes: 5,
    spicyLevel: 1,
    isVegetarian: false,
    isPopular: true,
    badge: 'Bol Malzemeli',
    image: '/images/cotto/09_Alla_Turca_Pizza.jpg',
    sauceDetails: 'Kasap sucuk ve dana füme etli zengin Napoliten.',
    pastaType: '450°C Özel Napoliten Fırın • 72 Saat Hamur',
    pairingRecommendation: '2’li Pizza Menü seçeneğiyle de tercih edebilirsiniz.'
  },

  // ==========================================
  // 2. GURME & CALZONE BURGERLER
  // ==========================================
  {
    id: 'cotto-b01',
    slug: 'calzone-burger',
    name: 'Calzone Burger',
    category: 'burger',
    categoryName: 'Gurme & Calzone Burgerler',
    price: 400,
    shortDescription: '72 saat dinlenmiş Napoliten pizza hamuru içinde sulu burger köftesi, dana füme et, erimiş cheddar ve karamelize soğan.',
    description: 'Cotto Napoliten’in özel Napoliten fırın ile gurme burgeri birleştiren özel imzası! Sulu dana burger köftesi, dana füme et, cheddar peyniri ve karamelize soğan 72 saat fermente Napoliten pizza hamuruna sarılarak 450°C özel Napoliten fırında nar gibi kızarana kadar pişirilir.',
    ingredients: [
      '72 saat fermente Napoliten Calzone hamuru',
      '%100 dana burger köftesi',
      'Dana füme et',
      'Eritilmiş Cheddar peyniri',
      'Karamelize soğan'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 460,
    calories: 940,
    prepTimeMinutes: 6,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'Özel Napoliten Fırın İmzası',
    image: '/images/cotto/11_Calzone_Burger.jpg',
    sauceDetails: 'Özel Napoliten fırında kapalı pişen hamur içinde eriyen cheddar ve karamelize soğan.',
    pastaType: '450°C Özel Napoliten Fırında Calzone Burger',
    pairingRecommendation: 'Baharatlı parmak patates kızartması ile servis edilir.'
  },
  {
    id: 'cotto-b02',
    slug: 'cotto-signature-burger',
    name: 'Cotto Burger',
    category: 'burger',
    categoryName: 'Gurme & Calzone Burgerler',
    price: 380,
    shortDescription: 'Dana burger köftesi, dana füme et, karamelize soğan, cheddar peyniri, kornişon turşu ve özel burger sos.',
    description: 'Cotto Cafe & Restoran’ın en çok tercih edilen gurme burgeri. Izgarada mühürlenen dana burger köftesi, dana füme et katmanı, karamelize soğan, eriyen cheddar peyniri, turşu ve özel Cotto sosuyla hazırlanır.',
    ingredients: [
      '%100 dana burger köftesi',
      'Brioche burger ekmeği',
      'Dana füme et',
      'Cheddar peyniri',
      'Karamelize soğan ve kornişon turşu',
      'Özel Cotto burger sosu'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri', 'Yumurta', 'Hardal'],
    portionGrams: 430,
    calories: 890,
    prepTimeMinutes: 7,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'İmza Burger',
    image: '/images/cotto/13_Cotto_Burger.jpg',
    sauceDetails: 'Özel Cotto burger sosu ve karamelize soğan.',
    pastaType: 'Izgara Dana Köfte & Füme Et',
    pairingRecommendation: 'Parmak dilim patates kızartması ve soğuk içecek ile.'
  },
  {
    id: 'cotto-b03',
    slug: 'cheeseburger',
    name: 'Cheeseburger',
    category: 'burger',
    categoryName: 'Gurme & Calzone Burgerler',
    price: 350,
    shortDescription: 'Izgara dana burger köftesi, eritilmiş cheddar peyniri, taze marul, domates ve kornişon turşu.',
    description: 'Izgarada karamelize edilmiş burger ekmeği arasında sulu dana köftesi, üzerinde tam erimiş cheddar peyniri, marul, domates, kornişon turşu ve özel sos.',
    ingredients: [
      '%100 dana burger köftesi',
      'Burger ekmeği',
      'Cheddar peyniri',
      'Marul, domates ve kornişon turşu',
      'Özel burger sos'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri', 'Yumurta'],
    portionGrams: 390,
    calories: 810,
    prepTimeMinutes: 7,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    image: '/images/cotto/12_Cheeseburger.jpg',
    sauceDetails: 'Eriyen yaprak cheddar ve özel burger sosu.',
    pastaType: 'Klasik Cheeseburger',
    pairingRecommendation: 'Parmak dilim patates kızartması ile.'
  },
  {
    id: 'cotto-b04',
    slug: 'klasik-burger',
    name: 'Klasik Burger',
    category: 'burger',
    categoryName: 'Gurme & Calzone Burgerler',
    price: 330,
    shortDescription: 'Dana burger köftesi, karamelize soğan, taze marul, domates ve kornişon turşu.',
    description: 'Saf et lezzetini sevenler için ızgarada mühürlenmiş dana burger köftesi, karamelize soğan, marul, domates ve turşu ile hazırlanır.',
    ingredients: [
      '%100 dana burger köftesi',
      'Burger ekmeği',
      'Karamelize soğan',
      'Marul, domates ve turşu'
    ],
    allergens: ['Gluten (Buğday)', 'Yumurta'],
    portionGrams: 375,
    calories: 750,
    prepTimeMinutes: 7,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: false,
    image: '/images/cotto/14_Klasik_Burger.jpg',
    sauceDetails: 'Karamelize soğan ve özel sos.',
    pastaType: 'Izgara Klasik Burger',
    pairingRecommendation: 'Çıtır patates kızartması ile.'
  },
  {
    id: 'cotto-b05',
    slug: 'tavuk-burger',
    name: 'Tavuk Burger',
    category: 'burger',
    categoryName: 'Gurme & Calzone Burgerler',
    price: 310,
    shortDescription: 'Çıtır tavuk göğsü, cheddar peyniri, marul, domates ve mor soğan.',
    description: 'Dışı altın sarısı çıtır, içi sulu tavuk göğsü filetosu; cheddar peyniri, taze marul, domates ve mor soğan ile sıcak burger ekmeği arasında sunulur.',
    ingredients: [
      'Çıtır tavuk göğsü',
      'Burger ekmeği',
      'Cheddar peyniri',
      'Marul, domates ve mor soğan'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri', 'Yumurta'],
    portionGrams: 380,
    calories: 740,
    prepTimeMinutes: 6,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: false,
    image: '/images/cotto/15_Tavuk_Burger.jpg',
    sauceDetails: 'Özel sos ve cheddar peyniri.',
    pastaType: 'Çıtır Tavuk Burger',
    pairingRecommendation: 'Soğan halkası ve soğuk içecek ile.'
  },

  // ==========================================
  // 3. MENÜLER & YAN ÜRÜNLER
  // ==========================================
  {
    id: 'cotto-y01',
    slug: 'ikili-pizza-menu',
    name: '2’li Napoliten Pizza Menü',
    category: 'yan-urun',
    categoryName: 'Menüler & Yan Ürünler',
    price: 890,
    shortDescription: '2 Adet Seçili Napoliten Pizza (4 Peynirli Pizza + Alla Turca Pizza) + Soğuk İçecek avantajlı menüsü.',
    description: 'Arkadaş grupları ve aileler için Cotto Napoliten’in en avantajlı ikili özel Napoliten fırın menüsü! 450°C özel Napoliten fırından çıkan 2 adet tam boy Napoliten pizza ve içecek bir arada.',
    ingredients: [
      '2 Adet 32 cm Özel Napoliten Fırın Napoliten Pizza',
      'Soğuk İçecek'
    ],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 950,
    calories: 1850,
    prepTimeMinutes: 6,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'Avantajlı Menü',
    image: '/images/cotto/10_2li_Pizza_Menu.jpg',
    sauceDetails: 'İki adet özel Napoliten fırın Napoliten pizza menüsü.',
    pastaType: '2’li Özel Napoliten Fırın Menü',
    pairingRecommendation: 'Yanına parmak patates ve soğan halkası ekleyebilirsiniz.'
  },
  {
    id: 'cotto-y02',
    slug: 'patates-kizartmasi',
    name: 'Patates Kızartması (Parmak Dilim)',
    category: 'yan-urun',
    categoryName: 'Menüler & Yan Ürünler',
    price: 120,
    shortDescription: 'Sipariş anında kızartılan özel baharatlı çıtır parmak dilim patates kızartması.',
    description: 'Dışı çıtır, içi yumuşak altın sarısı parmak dilim patates kızartması; özel Cotto baharat dokunuşuyla sıcak servis edilir.',
    ingredients: [
      'Parmak dilim patates',
      'Özel baharat çeşnisi'
    ],
    allergens: [],
    portionGrams: 200,
    calories: 420,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    image: '/images/cotto/16_Patates_Kizartmasi.jpg',
    sauceDetails: 'Ketçap ve mayonez ile servis edilir.',
    pastaType: 'Sıcak Yan Ürün',
    pairingRecommendation: 'Tüm pizza ve burgerlerin yanında.'
  },
  {
    id: 'cotto-y03',
    slug: 'sogan-halkasi',
    name: 'Çıtır Soğan Halkası (6 Adet)',
    category: 'yan-urun',
    categoryName: 'Menüler & Yan Ürünler',
    price: 110,
    shortDescription: 'Altın sarısı çıtır kaplamalı 6 adet sıcak soğan halkası.',
    description: 'Sipariş anında kızartılan çıtır kaplamalı 6 adet soğan halkası.',
    ingredients: [
      '6 adet çıtır soğan halkası'
    ],
    allergens: ['Gluten (Buğday)'],
    portionGrams: 150,
    calories: 340,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: false,
    image: '/images/cotto/17_Sogan_Halkasi.jpg',
    sauceDetails: 'Sıcak çıtır başlangıç.',
    pastaType: '6 Adet Çıtır',
    pairingRecommendation: 'Burger ve pizzaların yanına.'
  },
  {
    id: 'cotto-y04',
    slug: 'coca-cola-zero-sugar',
    name: 'Coca-Cola Zero Sugar (33 cl)',
    category: 'yan-urun',
    categoryName: 'Menüler & Yan Ürünler',
    price: 65,
    shortDescription: 'Buz gibi kutu Coca-Cola Zero Sugar (330 ml).',
    description: 'Özel Napoliten fırın Napoliten pizza ve gurme burgerlerin yanında soğuk kutu içecek.',
    ingredients: ['330 ml Kutu İçecek'],
    allergens: [],
    portionGrams: 330,
    calories: 1,
    prepTimeMinutes: 1,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: false,
    image: '/images/cotto/18_Coca_Cola_Zero_Sugar.jpg',
    sauceDetails: 'Soğuk kutu içecek.',
    pastaType: '33 cl Kutu',
    pairingRecommendation: 'Tüm menülerle.'
  }
];

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find(item => item.slug === slug);
}

export function getDailySpecial(): MenuItem {
  return menuItems.find(item => item.isDailySpecial) || menuItems[0];
}

export function getMenuItemsByCategory(category: string): MenuItem[] {
  if (category === 'tumu' || !category) return menuItems;
  return menuItems.filter(item => item.category === category);
}

export function getRelatedMenuItems(currentSlug: string, count: number = 3): MenuItem[] {
  const current = getMenuItemBySlug(currentSlug);
  const sameCat = menuItems.filter(item => item.slug !== currentSlug && item.category === current?.category);
  const others = menuItems.filter(item => item.slug !== currentSlug && item.category !== current?.category);
  return [...sameCat, ...others].slice(0, count);
}
