import { campaigns } from '../data/campaigns';
import { getBranchBySlug } from './branchService';
import type { Campaign } from '../types/campaign';

export function getAllCampaigns(): Campaign[] {
  return campaigns;
}

export function getCampaignsByBranch(branchSlugOrId: string): Campaign[] {
  return getBranchCampaigns(branchSlugOrId);
}

export function getCampaignById(id: string): Campaign | undefined {
  return campaigns.find(c => c.id === id);
}

export function getBranchCampaigns(branchSlugOrId: string): Campaign[] {
  const branch = getBranchBySlug(branchSlugOrId);
  const branchSlug = branch?.slug || branchSlugOrId;
  const branchId = branch?.id || branchSlugOrId;

  const centralForBranch = campaigns.filter(c => {
    if (!c.applicableBranches || c.applicableBranches.length === 0 || c.applicableBranches.includes('*')) {
      return true;
    }
    return c.applicableBranches.includes(branchSlug) || c.applicableBranches.includes(branchId);
  });

  const inlineCampaigns: Campaign[] = (branch?.campaigns || []).map(ic => ({
    id: ic.id,
    title: ic.title,
    description: ic.description,
    badge: ic.badge,
    discountPercent: ic.discountPercent,
    validUntil: ic.validUntil,
    isOnlineExclusive: ic.isOnlineExclusive,
    applicableBranches: [branchSlug]
  }));

  const map = new Map<string, Campaign>();
  for (const c of [...inlineCampaigns, ...centralForBranch]) {
    map.set(c.id, c);
  }

  return Array.from(map.values());
}
