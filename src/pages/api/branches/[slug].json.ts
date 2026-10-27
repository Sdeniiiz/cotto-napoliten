// src/pages/api/branches/[slug].json.ts
import type { APIRoute } from 'astro';
import { getAllBranches, getBranchBySlug } from '../../../services/branchService';

export function getStaticPaths() {
  return getAllBranches().map((b) => ({ params: { slug: b.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const branch = getBranchBySlug(params.slug || '');
  return new Response(JSON.stringify({ branch }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
