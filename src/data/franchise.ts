import type { FranchiseConceptModel, TargetExpansionCity, FranchiseFAQItem } from '../types/franchise';

export const franchiseConceptModels: FranchiseConceptModel[] = [
  {
    id: 'express',
    name: 'Cotto Express & Paket Hub',
    badge: 'HIZLI GERİ DÖNÜŞ • DÜŞÜK M²',
    tagline: 'Yoğun Yemeksepeti/Getir/Trendyol paket trafiği, Gel-Al ve hızlı cadde/AVM tüketimi için optimize edilmiş kompakt Napoliten mutfağı.',
    areaSqm: '65 - 95 m²',
    seatingCapacity: '20 - 32 Kişi',
    investmentRange: '2.250.000 ₺ - 3.100.000 ₺',
    investmentNumericMin: 2.25,
    investmentNumericAvg: 2.65,
    targetPaybackMonths: '11 - 14 Ay',
    avgTicketPrice: 460,
    defaultDailyOrders: 85,
    profitMarginPercent: 29,
    staffCount: '4 - 6 Personel',
    ovenType: 'Fornero Kompakt Döner Özel Napoliten Fırın (450°C)',
    hourlyPizzaCapacity: '65 Pizza / Saat + Gurme Burger Hattı',
    idealLocations: [
      'Üniversite Kampüs Caddeleri',
      'AVM Food Court Alanları',
      'Yüksek Paket Servis Yoğunluklu Merkez Mahalleler'
    ],
    features: [
      'Düşük kira ve minimum personel gideriyle maksimum birim kârlılık',
      '90 saniyede standart pişirim sağlayan kompakt döner özel Napoliten fırın',
      'Yemeksepeti, GetirYemek ve Trendyol Yemek özel algoritma & lansman kurulumu',
      'Hazır soğuk fermantasyon hamur ve porsiyonlanmış sos tedariği'
    ],
    image: '/images/cotto/mekan-tas-firin.jpg',
    recommended: false
  },
  {
    id: 'bistro',
    name: 'Cotto Bistro & Napoliten Pizzeria',
    badge: 'EN ÇOK TERCİH EDİLEN MODEL',
    tagline: 'Çarşamba Merkez şubemizin kanıtlanmış başarı modeli: Hem şık restoran/kafe oturumu hem de yüksek hacimli paket servis bir arada.',
    areaSqm: '110 - 180 m² (İç Salon + Bahçe/Teras)',
    seatingCapacity: '55 - 85 Kişi',
    investmentRange: '3.250.000 ₺ - 4.500.000 ₺',
    investmentNumericMin: 3.25,
    investmentNumericAvg: 3.85,
    targetPaybackMonths: '12 - 16 Ay',
    avgTicketPrice: 540,
    defaultDailyOrders: 120,
    profitMarginPercent: 30,
    staffCount: '7 - 10 Personel',
    ovenType: 'Fornero Pro Hibrit Döner Özel Kubbe Fırın (450°C)',
    hourlyPizzaCapacity: '110 Pizza / Saat + Tam Kapasite Gurme Burger',
    idealLocations: [
      'Ana Bulvarlar & Yaya Caddeleri',
      'Sahil Yolu & Sosyal Yaşam Merkezleri',
      'Gelişen Büyük İlçe Merkezleri (Nüfus 100.000+)'
    ],
    features: [
      'Açık mutfakta görsel şov sunan ikonik İtalyan özel Napoliten fırın mimarisi',
      'Napoliten Pizza + Gurme Burger + Calzone Burger ile gün boyu yüksek ciro',
      'Masada yüksek adisyon ortalaması + güçlü online paket servis dengesi (%55 Masa / %45 Paket)',
      'Usta kaprisini ortadan kaldıran dijital ısı ve dönüş kontrollü fırın teknolojisi'
    ],
    image: '/images/cotto/mekan-ic-salon.jpg',
    recommended: true
  },
  {
    id: 'gastro',
    name: 'Cotto Flagship Gastro & Kış Bahçesi',
    badge: 'PRESTİJ & YÜKSEK CİRO',
    tagline: 'Büyükşehirlerin en prestijli caddeleri ve geniş bahçeli mekanlar için tasarlanmış üst segment İtalyan gastronomi ve sosyal buluşma merkezi.',
    areaSqm: '200 - 350 m²',
    seatingCapacity: '100 - 160 Kişi',
    investmentRange: '4.750.000 ₺ - 6.800.000 ₺',
    investmentNumericMin: 4.75,
    investmentNumericAvg: 5.6,
    targetPaybackMonths: '14 - 18 Ay',
    avgTicketPrice: 640,
    defaultDailyOrders: 165,
    profitMarginPercent: 31,
    staffCount: '12 - 16 Personel',
    ovenType: 'Çift Kubbeli Fornero Custom Artisan Özel Napoliten Fırın (450°C)',
    hourlyPizzaCapacity: '160+ Pizza / Saat + Özel Şef İstasyonu',
    idealLocations: [
      'Metropol Prestij Caddeleri (Bağdat Cad., Tunalı, Alsancak, Atakum Sahil)',
      'Açık Hava AVM Meydanları & Marina Alanları',
      'Müstakil Kış Bahçeli Köşe Mağazalar'
    ],
    features: [
      'Bölgesel amiral gemisi (Flagship) statüsü ve genişletilmiş ilçe bölge koruması',
      'Özel İtalyan artisan dekorasyon ve kış bahçesi mimarisi',
      'Kurumsal etkinlikler, grup yemekleri ve yüksek akşam yemeği masa devir hızı',
      'Genel merkezden 15 gün boyunca yerinde tam zamanlı açılış koçu desteği'
    ],
    image: '/images/cotto/mekan-masalar.jpg',
    recommended: false
  }
];

export const franchiseAdvantages = [
  {
    num: '01',
    icon: '🔥',
    title: 'Usta Bağımlılığını Bitiren Özel Napoliten Fırın Teknolojisi',
    highlight: 'FORNERO HİBRİT DÖNER SİSTEM',
    description: 'Geleneksel pizza restoranlarının en büyük kabusu "pizza ustasının işi bırakmasıdır". Cotto Napoliten’de kullandığımız özel döner özel kubbe fırınlar ve 450°C dijital ısı kontrolü sayesinde, 2 haftalık eğitim alan her personelimiz 90 saniyede yanmayan, leopar benekli kusursuz Napoliten pizza çıkarır.'
  },
  {
    num: '02',
    icon: '🍕',
    title: 'Çift Motorlu Ciro: Napoliten Pizza + Gurme Burger',
    highlight: 'GENİŞ HEDEF KİTLE & YÜKSEK SEPET',
    description: 'Sadece pizza satan mekanlar arkadaş gruplarında "ben burger istiyorum" diyen müşteriyi kaybeder. Cotto Napoliten; 72 saat fermente özel Napoliten fırın pizzaları ve brioche ekmekli gurme smash burgerleriyle bir grubun veya ailenin tamamını aynı masada ve aynı online sepette yakalar.'
  },
  {
    num: '03',
    icon: '🌾',
    title: 'Merkezi Reçete, Hamur & Tedarik Güvencesi',
    highlight: 'SIFIR FİRE • STANDART LEZZET',
    description: 'Caputo Tip 00 un harmanımız, San Marzano domates sos bazlarımız, suda mozzarella tedariğimiz ve özel burger köftesi/sos reçetelerimiz gramajlı olarak standartlaştırılmıştır. Her şubede aynı lezzet, minimum mutfak firesi (%2 altı) ile üretilir.'
  },
  {
    num: '04',
    icon: '📱',
    title: 'Yemeksepeti & Online Platform Hakimiyeti',
    highlight: 'KANITLANMIŞ DİJİTAL SİPARİŞ GÜCÜ',
    description: 'Yemeksepeti, GetirYemek ve Trendyol Yemek’te kategori liderliği sağlayan menü mühendisliği! Doğru fiyatlandırılmış ikili menüler, yüksek puan ortalaması ve özel hava kanallı sıcak pizza kutularımızla şubeniz açıldığı ilk günden itibaren paket serviste hızla ciro üretir.'
  },
  {
    num: '05',
    icon: '📐',
    title: 'Anahtar Teslim Mimari & Mutfak Kurulumu',
    highlight: '45 GÜNDE KAPILARINIZI AÇIN',
    description: 'Boş dükkanı teslim aldığımız andan itibaren 3D mimari tasarım, havalandırma/baca mühendisliği, özel Napoliten fırın montajı, soğuk hava hazırlık üniteleri ve sıcak İtalyan bistro aydınlatmaları uzman proje ekibimiz tarafından anahtar teslim tamamlanır.'
  },
  {
    num: '06',
    icon: '🎓',
    title: 'Cotto Pizzaiolo & İşletme Akademisi',
    highlight: 'TEORİK VE UYGULAMALI EĞİTİM',
    description: 'Yatırımcımıza ve mutfak/servis ekibine Samsun Çarşamba Merkez şubemizde uygulamalı "72 Saat Soğuk Fermantasyon, Hamur Açma, Fırın Yönetimi, Burger Mühürleme ve Maliyet Kontrolü" eğitimi verilir. Açılış haftasında şeflerimiz kendi mutfağınızda yanınızdadır.'
  },
  {
    num: '07',
    icon: '🛡️',
    title: 'Sözleşmeli Bölge Koruması (Exclusivity)',
    highlight: 'YATIRIMINIZ GÜVENCE ALTINDA',
    description: 'Yatırım yaptığınız ilçe veya ticari aks içerisinde nüfus ve paket servis yarıçapı (3-5 km) analiz edilerek sözleşmeli bölge koruması verilir. Kendi bölgenizdeki tüm restoran ve online paket servis potansiyeli yalnızca sizin şubenize aittir.'
  },
  {
    num: '08',
    icon: '📈',
    title: 'Şeffaf Birim Ekonomisi & Hızlı ROI',
    highlight: '%28 - %31 HEDEF NET KÂR MARJI',
    description: 'Pizza hamuru ve İtalyan mutfağı, gıda sektöründe hammadde/satış fiyatı çarpanı (COGS) en avantajlı kategoridir. Yüksek masa devir hızı ve güçlü paket servisle yatırımınızı ortalama 12 ila 16 ay arasında amorti etmeniz hedeflenir.'
  }
];

export const unitEconomicsBreakdown = [
  { label: 'Gıda & Hammadde Maliyeti (COGS)', percent: 31, color: 'bg-[#D9381E]', desc: 'Un, mozzarella, şarküteri, burger eti ve özel ambalaj maliyeti' },
  { label: 'NET İŞLETME KÂRI (EBITDA)', percent: 29, color: 'bg-emerald-500', desc: 'Tüm giderler düşüldükten sonra yatırımcıya kalan vergi öncesi net kâr oranı' },
  { label: 'Personel & Mutfak Ekibi', percent: 17, color: 'bg-amber-500', desc: 'Döner özel Napoliten fırın sistemi sayesinde optimize edilmiş kadro gideri' },
  { label: 'Kira & Ortak Giderler', percent: 11, color: 'bg-stone-500', desc: 'Cadde veya bulvar mağazası hedef kira/ciro oranı' },
  { label: 'Enerji, Kurye & Platform Komisyonu', percent: 8, color: 'bg-blue-500', desc: 'Doğalgaz/elektrik, paket servis ve operasyonel sarf giderleri' },
  { label: 'Royalty & Ulusal Pazarlama Payı', percent: 4, color: 'bg-purple-500', desc: 'Sürekli denetim, Ar-Ge ve dijital reklam yönetimi katkısı' }
];

export const targetExpansionCities: TargetExpansionCity[] = [
  {
    city: 'Samsun',
    region: 'Karadeniz Merkez',
    status: 'Aktif Merkez',
    availableQuota: 2,
    priorityDistricts: ['Çarşamba (Merkez Flagship - Aktif)', 'Atakum Sahil / Körfez', 'İlkadım Çiftlik', 'Bafra'],
    demandLevel: 'Çok Yüksek'
  },
  {
    city: 'İstanbul',
    region: 'Marmara',
    status: 'Öncelikli Hedef',
    availableQuota: 5,
    priorityDistricts: ['Kadıköy / Suadiye', 'Beşiktaş / Etiler', 'Ataşehir', 'Bakırköy', 'Başakşehir'],
    demandLevel: 'Çok Yüksek'
  },
  {
    city: 'Ankara',
    region: 'İç Anadolu',
    status: 'Öncelikli Hedef',
    availableQuota: 3,
    priorityDistricts: ['Çankaya Bahçelievler', 'Tunalı Hilmi', 'Çayyolu / Ümitköy'],
    demandLevel: 'Çok Yüksek'
  },
  {
    city: 'Trabzon & Ordu',
    region: 'Doğu Karadeniz',
    status: 'Öncelikli Hedef',
    availableQuota: 2,
    priorityDistricts: ['Trabzon Ortahisar / Yomra', 'Ordu Altınordu Sahil', 'Ünye'],
    demandLevel: 'Çok Yüksek'
  },
  {
    city: 'İzmir',
    region: 'Ege',
    status: 'Başvuruya Açık',
    availableQuota: 3,
    priorityDistricts: ['Alsancak', 'Karşıyaka Bostanlı', 'Bornova Özkanlar'],
    demandLevel: 'Yüksek'
  },
  {
    city: 'Bursa & Eskişehir',
    region: 'Marmara / İç Anadolu',
    status: 'Başvuruya Açık',
    availableQuota: 2,
    priorityDistricts: ['Bursa Nilüfer FSM', 'Eskişehir Tepebaşı / Espark Aksı'],
    demandLevel: 'Yüksek'
  },
  {
    city: 'Antalya',
    region: 'Akdeniz',
    status: 'Başvuruya Açık',
    availableQuota: 2,
    priorityDistricts: ['Muratpaşa Lara', 'Konyaaltı Sahil'],
    demandLevel: 'Yüksek'
  },
  {
    city: 'Sinop, Amasya & Çorum',
    region: 'Orta Karadeniz',
    status: 'Öncelikli Hedef',
    availableQuota: 3,
    priorityDistricts: ['Çorum Merkez Gazi Cad.', 'Amasya Merkez', 'Sinop Sahil'],
    demandLevel: 'Büyüyen Pazar'
  }
];

export const franchiseFAQs: FranchiseFAQItem[] = [
  {
    category: 'Operasyon & Mutfak',
    question: 'Daha önce restoran veya pizza işletmedim. Usta bulma sorunu yaşar mıyım?',
    answer: 'Hayır! Cotto Napoliten franchise modelinin en güçlü yanı, usta bağımlılığını ortadan kaldıran mutfak mühendisliğidir. Kullandığımız FORNERO özel kubbe döner/hibrit fırınlar 450°C sabit ısıda kendi ekseninde homojen pişirme yapar. 72 saat soğuk fermantasyon hamur reçetemiz ve gramajlı soslarımızla birlikte, Cotto Akademi’de 14 gün eğitim alan personelleriniz her seferinde aynı standartta Napoliten pizza ve gurme burger çıkarır.'
  },
  {
    category: 'Finansal',
    question: 'Toplam yatırım maliyeti ne kadar ve geri dönüş süresi (ROI) kaç ay?',
    answer: 'Seçeceğiniz konsept modele (Express 65-95m², Bistro 110-180m² veya Gastro Lounge 200m²+) ve dükkanın fiziksel durumuna göre toplam anahtar teslim yatırım 2.250.000 TL ile 5.500.000 TL arasında değişmektedir. Ortalama %28-%31 net işletme kârlılığı ile yatırım geri dönüş süresi 11 ila 16 ay arasında gerçekleşmektedir.'
  },
  {
    category: 'Finansal',
    question: 'Franchise giriş bedeli (İsim Hakkı) ve aylık Royalty oranı nedir?',
    answer: '2026 büyüme dönemimize özel olarak öncelikli hedef şehirlerdeki ilk yatırımcılarımıza esnek isim hakkı avantajı sunuyoruz. Aylık işletme destek ve reklam payı (Royalty + Pazarlama) toplam cironun yalnızca %4’üdür. Online yemek platformu (Yemeksepeti vb.) menü ve kampanya optimizasyonları bu desteğe dahildir.'
  },
  {
    category: 'Tedarik & Eğitim',
    question: 'Malzeme ve hammadde tedariği nasıl sağlanıyor?',
    answer: 'İtalyan un harmanımız, özel domates soslarımız, suda mozzarella peynirlerimiz, şarküteri ürünlerimiz ve Cotto logolu özel termal pizza/burger kutularımız onaylı merkezi tedarik zincirimiz üzerinden doğrudan şubenize sevk edilir. Böylece hem toplu satın alma fiyat avantajından yararlanırsınız hem de lezzet standardınız hiç bozulmaz.'
  },
  {
    category: 'Lokasyon & Sözleşme',
    question: 'Henüz kiralık bir dükkanım yok, lokasyon bulma konusunda destek veriyor musunuz?',
    answer: 'Kesinlikle. Yatırım bütçeniz ve hedeflediğiniz şehir/ilçe belirlendikten sonra, saha geliştirme ekibimiz o bölgedeki yaya trafiğini, öğrenci/genç nüfus yoğunluğunu ve Yemeksepeti/Getir paket servis ısı haritalarını analiz ederek size en doğru dükkan alternatiflerini sunar.'
  },
  {
    category: 'Lokasyon & Sözleşme',
    question: 'Bölge koruması veriyor musunuz? Sözleşme süresi kaç yıl?',
    answer: 'Evet, açacağınız her Cotto Napoliten şubesi için lokasyonun demografik yapısına göre 3 km ila 5 km yarıçapında (veya ilçe bazlı) tam bölge koruması sözleşmeye işlenir. Standart franchise sözleşme süremiz 5 + 5 yıl (toplam 10 yıl) olarak düzenlenmektedir.'
  }
];

export const franchiseSteps = [
  { step: '01', duration: '1-2 Gün', title: 'Ön Başvuru & Tanışma', description: 'Online yatırımcı formunun doldurulması ve Büyüme Direktörlüğümüz ile ilk telefon/video görüşmesi.' },
  { step: '02', duration: '3-5 Gün', title: 'Lokasyon & Bölge Analizi', description: 'Hedeflenen ilçe/caddede yaya trafiği, demografi ve Yemeksepeti ısı haritası fizibilite çalışması.' },
  { step: '03', duration: '7. Gün', title: 'Sözleşme & Bölge Tahsisi', description: 'Franchise sözleşmesinin imzalanması ve ilçenizin/bölgenizin adınıza korumalı olarak kapatılması.' },
  { step: '04', duration: '10-15 Gün', title: '3D Mimari & Mutfak Projesi', description: 'Fornero özel Napoliten fırın yerleşimi, baca/havalandırma ve İtalyan Terra Cotta iç mimari projesinin çizimi.' },
  { step: '05', duration: '15-35. Gün', title: 'İnşaat & Özel Napoliten Fırın Montajı', description: 'Anahtar teslim dekorasyon uygulaması ve 450°C Fornero hibrit döner özel Napoliten fırının kurulumu.' },
  { step: '06', duration: '30-40. Gün', title: 'Cotto Akademi Eğitimi', description: 'Personelinizin Çarşamba Merkez şubemizde 72 saat soğuk fermantasyon ve fırın yönetimi eğitimi alması.' },
  { step: '07', duration: '40-44. Gün', title: 'Dijital & Tedarik Kurulumu', description: 'POS otomasyonu, Yemeksepeti/Getir/Trendyol mağaza açılışları ve ilk hammadde sevkiyatı.' },
  { step: '08', duration: '45. Gün', title: 'Büyük Açılış (Grand Opening)', description: 'Genel Merkez açılış koçlarımız eşliğinde fırın ateşinin yakılması ve bölgesel dijital lansman.' }
];

export const franchiseModels = franchiseConceptModels.map((m) => ({
  ...m,
  isPopular: m.recommended,
  monthlyRevenueTarget: `₺${((m.avgTicketPrice * m.defaultDailyOrders * 30) / 1000000).toFixed(2)}M+`,
  netProfitMargin: `%${m.profitMarginPercent}`,
  roiMonths: m.targetPaybackMonths,
  idealLocations: m.idealLocations.join(', ')
}));

export const unitEconomics = unitEconomicsBreakdown.map((u) => ({
  label: u.label,
  percentage: `%${u.percent}`,
  description: u.desc
}));

