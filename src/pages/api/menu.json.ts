// src/pages/api/menu.json.ts
import type { APIRoute } from 'astro';
import { getAllProducts, getAllCategories } from '../../services/productService';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      categories: getAllCategories(),
      products: getAllProducts()
    }),
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    }
  );
};
