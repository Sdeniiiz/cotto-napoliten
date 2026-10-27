// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { getAllBranches } from '../services/branchService';
import { getAllProducts } from '../services/productService';
import { articles } from '../data/articles';

export const GET: APIRoute = () => {
  const site = 'https://cottonapoliten.com';
  const staticPages = ['', '/franchise', '/menu', '/subeler', '/napoliten', '/hakkimizda', '/iletisim'];
  const branchPages = getAllBranches().map((b) => `/subeler/${b.slug}`);
  const productPages = getAllProducts().map((p) => `/menu/${p.slug}`);
  const articlePages = articles.map((a) => `/napoliten/${a.slug}`);

  const allUrls = [...staticPages, ...branchPages, ...productPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${site}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' || path === '/franchise' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
