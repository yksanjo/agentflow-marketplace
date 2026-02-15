// Core Types for AgentFlow Marketplace

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  isCreator: boolean;
  totalSales?: number;
  rating?: number;
  joinedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  workflowCount: number;
  description: string;
}

export interface Workflow {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  price: number;
  category: Category;
  creator: User;
  rating: number;
  reviewCount: number;
  installCount: number;
  tags: string[];
  version: string;
  lastUpdated: string;
  featured: boolean;
  files: WorkflowFile[];
  screenshots?: string[];
  requirements?: string[];
}

export interface WorkflowFile {
  name: string;
  path: string;
  description: string;
}

export interface Review {
  id: string;
  workflowId: string;
  user: User;
  rating: number;
  title: string;
  content: string;
  helpfulCount: number;
  verified: boolean;
  createdAt: string;
  creatorResponse?: {
    content: string;
    createdAt: string;
  };
}

export interface CartItem {
  workflow: Workflow;
  addedAt: string;
}

export interface Purchase {
  id: string;
  workflow: Workflow;
  purchasedAt: string;
  price: number;
}

export interface Installation {
  id: string;
  workflow: Workflow;
  repoName: string;
  installedAt: string;
  status: 'pending' | 'success' | 'failed';
}

export interface DashboardStats {
  totalViews: number;
  totalInstalls: number;
  totalRevenue: number;
  pendingPayout: number;
  monthlyViews: number;
  monthlyInstalls: number;
  monthlyRevenue: number;
}

export interface CreatorWorkflow extends Workflow {
  views: number;
  installs: number;
  revenue: number;
}

export type PriceRange = {
  min: number;
  max: number;
};

export type SortOption = 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating';

export interface SearchFilters {
  query: string;
  category?: string;
  priceRange?: PriceRange;
  rating?: number;
  sort: SortOption;
  freeOnly?: boolean;
}
