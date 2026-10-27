// src/pages/api/branches/[slug]/menu.json.ts
import type { APIRoute } from 'astro';
import { getAllBranches, getBranchBySlug } from '../../../../services/branchService';
import { getProductsByBranch } from '../../../../services/productService';

export function getStaticPaths() {
  return getAllBranches().map((b) => ({ params: { slug: b.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const branch = getBranchBySlug(params.slug || '');
  const products = branch ? getProductsByBranch(branch.id) : [];
  return new Response(JSON.stringify({ branch: branch?.slug, products }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
