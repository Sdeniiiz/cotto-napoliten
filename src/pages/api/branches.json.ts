// src/pages/api/branches.json.ts
import type { APIRoute } from 'astro';
import { getAllBranches } from '../../services/branchService';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ branches: getAllBranches() }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
