# Cotto Napoliten — Resmi Web Sitesi & Franchise Portalı

Cotto Napoliten (Napoliten Pizza, Gurme & Calzone Burger ve Türkiye Geneli Franchise Portalı) kurumsal web projesi.

## 🚀 Render.com Canlıya Alma (Deploy) Ayarları

Projeyi GitHub'a gönderdikten sonra **Render.com** üzerinde **New -> Static Site** (veya **Blueprint**) seçerek doğrudan yayına alabilirsiniz:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Node Version:** `.node-version` ve `render.yaml` dosyaları sayesinde otomatik olarak `22.14.0` kullanılır.

## 💻 Yerel Geliştirme

```bash
npm install
npm run dev
```

Üretim (Production) derlemesi almak için:

```bash
npm run build
```
