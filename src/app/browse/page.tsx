'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkflowCard from '@/components/WorkflowCard';
import { mockWorkflows, mockCategories } from '@/data/mockData';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { SortOption } from '@/types';

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredWorkflows = useMemo(() => {
    let result = [...mockWorkflows];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(w => 
        w.title.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query) ||
        w.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(w => w.category.slug === selectedCategory);
    }

    // Price filter
    if (priceFilter === 'free') {
      result = result.filter(w => w.price === 0);
    } else if (priceFilter === 'paid') {
      result = result.filter(w => w.price > 0);
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => b.installCount - a.installCount);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, priceFilter, sortBy]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceFilter('all');
    setSortBy('popular');
  };

  const hasActiveFilters = searchQuery || selectedCategory || priceFilter !== 'all';

  return (
    <div className="min-h-screen">
      <Header cartCount={0} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary">Browse Workflows</h1>
            <p className="mt-2 text-text-secondary">
              Discover {mockWorkflows.length} workflows to automate your development
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search workflows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-secondary flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-accent-primary rounded-full" />
              )}
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Category Select */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field w-48"
              >
                <option value="">All Categories</option>
                {mockCategories.map(cat => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as 'all' | 'free' | 'paid')}
                className="input-field w-32"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="input-field w-40"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="lg:hidden card p-4 mb-8 space-y-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                <option value="">All Categories</option>
                {mockCategories.map(cat => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as 'all' | 'free' | 'paid')}
                className="input-field"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="input-field"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-text-muted text-sm">Active filters:</span>
              {searchQuery && (
                <span className="badge-primary flex items-center gap-1">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery('')} className="hover:text-text-primary">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="badge-secondary flex items-center gap-1">
                  {mockCategories.find(c => c.slug === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory('')} className="hover:text-text-primary">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {priceFilter !== 'all' && (
                <span className="badge-premium flex items-center gap-1">
                  {priceFilter === 'free' ? 'Free' : 'Paid'}
                  <button onClick={() => setPriceFilter('all')} className="hover:text-text-primary">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6 text-text-secondary">
            Showing {filteredWorkflows.length} workflow{filteredWorkflows.length !== 1 ? 's' : ''}
          </div>

          {/* Workflow Grid */}
          {filteredWorkflows.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWorkflows.map((workflow, index) => (
                <WorkflowCard 
                  key={workflow.id} 
                  workflow={workflow} 
                  index={index}
                  isFavorite={favorites.includes(workflow.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">No workflows found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
