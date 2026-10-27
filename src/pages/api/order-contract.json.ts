// src/pages/api/order-contract.json.ts
import type { APIRoute } from 'astro';
import { getSampleOrderContract } from '../../services/orderService';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(getSampleOrderContract()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
