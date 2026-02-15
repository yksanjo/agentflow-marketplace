'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkflowCard from '@/components/WorkflowCard';
import CategoryCard from '@/components/CategoryCard';
import { mockWorkflows, mockCategories, mockUsers } from '@/data/mockData';
import { ArrowRight, Zap, Shield, Clock, TrendingUp, Users, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const featuredWorkflows = mockWorkflows.filter(w => w.featured);
  const trendingWorkflows = [...mockWorkflows].sort((a, b) => b.installCount - a.installCount).slice(0, 4);
  const topCreators = mockUsers.filter(u => u.isCreator).slice(0, 3);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={0} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden grid-bg">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary animate-fade-in-up">
              Supercharge Your Development with{' '}
              <span className="gradient-text">Agentic Workflows</span>
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up stagger-1" style={{ animationFillMode: 'forwards', opacity: 0 }}>
              Discover, share, and monetize pre-built automation workflows for GitHub. 
              Build faster with templates from top developers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2" style={{ animationFillMode: 'forwards', opacity: 0 }}>
              <Link href="/browse" className="btn-primary inline-flex items-center gap-2">
                Explore Workflows
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/create" className="btn-secondary inline-flex items-center gap-2">
                Start Selling
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up stagger-3" style={{ animationFillMode: 'forwards', opacity: 0 }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">2,400+</div>
              <div className="text-text-secondary">Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">50K+</div>
              <div className="text-text-secondary">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">1,200+</div>
              <div className="text-text-secondary">Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-primary">4.8</div>
              <div className="text-text-secondary">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent-primary/20 flex items-center justify-center">
                <Zap className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">One-Click Install</h3>
              <p className="mt-2 text-text-secondary">Install workflows directly to your GitHub repos with a single click.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent-secondary/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-accent-secondary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">Verified & Secure</h3>
              <p className="mt-2 text-text-secondary">All workflows are reviewed for security and quality standards.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent-tertiary/20 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent-tertiary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">Regular Updates</h3>
              <p className="mt-2 text-text-secondary">Creators provide ongoing support and feature updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workflows */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Featured Workflows</h2>
              <p className="mt-2 text-text-secondary">Hand-picked workflows from top creators</p>
            </div>
            <Link href="/browse" className="btn-ghost inline-flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorkflows.map((workflow, index) => (
              <WorkflowCard 
                key={workflow.id} 
                workflow={workflow} 
                index={index}
                isFavorite={favorites.includes(workflow.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary">Browse by Category</h2>
            <p className="mt-2 text-text-secondary">Find the perfect workflow for your needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Workflows */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent-primary" />
              <h2 className="text-3xl font-bold text-text-primary">Trending Now</h2>
            </div>
            <Link href="/browse?sort=popular" className="btn-ghost inline-flex items-center gap-2">
              See More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingWorkflows.map((workflow, index) => (
              <WorkflowCard 
                key={workflow.id} 
                workflow={workflow} 
                index={index}
                isFavorite={favorites.includes(workflow.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent-secondary" />
              <h2 className="text-3xl font-bold text-text-primary">Top Creators</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCreators.map((creator, index) => (
              <div key={creator.id} className="card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-4">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary">{creator.name}</h3>
                    <p className="text-sm text-text-secondary">@{creator.username}</p>
                  </div>
                </div>
                <p className="mt-4 text-text-muted text-sm line-clamp-2">{creator.bio}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent-tertiary text-accent-tertiary" />
                    <span className="text-sm font-medium text-text-primary">{creator.rating}</span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    {creator.totalSales?.toLocaleString()} sales
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-text-primary">Ready to start building?</h2>
              <p className="mt-4 text-text-secondary max-w-xl mx-auto">
                Join thousands of developers who are already using AgentFlow to automate their workflows.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/browse" className="btn-primary">
                  Browse Workflows
                </Link>
                <Link href="/create" className="btn-secondary">
                  Become a Creator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
