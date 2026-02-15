'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockDashboardStats, mockCreatorWorkflows, currentUser, mockWorkflows, mockUsers } from '@/data/mockData';
import { 
  Eye, Download, DollarSign, TrendingUp, Plus, MoreVertical,
  MessageSquare, Star, Settings, LogOut, Wallet, BarChart3
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type TabType = 'overview' | 'workflows' | 'analytics' | 'reviews' | 'earnings';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const stats = [
    { label: 'Total Views', value: mockDashboardStats.totalViews.toLocaleString(), icon: Eye, change: '+12%', changeType: 'positive' },
    { label: 'Total Installs', value: mockDashboardStats.totalInstalls.toLocaleString(), icon: Download, change: '+8%', changeType: 'positive' },
    { label: 'Total Revenue', value: `$${mockDashboardStats.totalRevenue.toLocaleString()}`, icon: DollarSign, change: '+23%', changeType: 'positive' },
    { label: 'Pending Payout', value: `$${mockDashboardStats.pendingPayout.toLocaleString()}`, icon: Wallet, change: '', changeType: 'neutral' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'workflows', label: 'My Workflows', icon: Plus },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen">
      <Header cartCount={0} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Creator Dashboard</h1>
              <p className="text-text-secondary mt-1">Manage your workflows and track performance</p>
            </div>
            <Link href="/create" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Workflow
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary">{currentUser.name}</h3>
                    <p className="text-sm text-text-muted">@{currentUser.username}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                  <Star className="w-4 h-4 fill-accent-tertiary text-accent-tertiary" />
                  <span className="text-sm text-text-secondary">4.9 Rating</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="card p-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-accent-primary/10 text-accent-primary'
                        : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
                <hr className="my-2 border-border" />
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-bg-tertiary hover:text-text-primary transition-colors">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-bg-tertiary hover:text-text-primary transition-colors">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <div key={stat.label} className="card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-accent-primary" />
                          </div>
                          {stat.change && (
                            <span className={`text-sm font-medium ${
                              stat.changeType === 'positive' ? 'text-success' : 'text-error'
                            }`}>
                              {stat.change}
                            </span>
                          )}
                        </div>
                        <p className="mt-4 text-2xl font-bold text-text-primary">{stat.value}</p>
                        <p className="text-sm text-text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Monthly Performance */}
                  <div className="card p-6">
                    <h2 className="text-lg font-semibold text-text-primary mb-4">This Month</h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-bg-tertiary rounded-lg">
                        <p className="text-2xl font-bold text-accent-primary">{mockDashboardStats.monthlyViews.toLocaleString()}</p>
                        <p className="text-sm text-text-muted">Views</p>
                      </div>
                      <div className="text-center p-4 bg-bg-tertiary rounded-lg">
                        <p className="text-2xl font-bold text-accent-secondary">{mockDashboardStats.monthlyInstalls.toLocaleString()}</p>
                        <p className="text-sm text-text-muted">Installs</p>
                      </div>
                      <div className="text-center p-4 bg-bg-tertiary rounded-lg">
                        <p className="text-2xl font-bold text-accent-tertiary">${mockDashboardStats.monthlyRevenue.toLocaleString()}</p>
                        <p className="text-sm text-text-muted">Revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* My Workflows */}
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-text-primary">My Workflows</h2>
                      <button 
                        onClick={() => setActiveTab('workflows')}
                        className="text-sm text-accent-primary hover:underline"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {mockCreatorWorkflows.map(workflow => (
                        <div key={workflow.id} className="flex items-center justify-between p-4 bg-bg-tertiary rounded-lg">
                          <div className="flex items-center gap-4">
                            <Image
                              src={workflow.thumbnail}
                              alt={workflow.title}
                              width={48}
                              height={48}
                              className="rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="font-medium text-text-primary">{workflow.title}</h3>
                              <p className="text-sm text-text-muted">{workflow.installs} installs</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-semibold text-text-primary">${workflow.revenue.toLocaleString()}</p>
                              <p className="text-xs text-text-muted">Revenue</p>
                            </div>
                            <button className="p-2 text-text-muted hover:text-text-primary">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'workflows' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-text-primary">My Workflows</h2>
                    <Link href="/create" className="btn-secondary inline-flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Add New
                    </Link>
                  </div>
                  <div className="grid gap-4">
                    {mockCreatorWorkflows.map((workflow, index) => (
                      <div key={workflow.id} className="card p-4 flex items-center justify-between opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                        <div className="flex items-center gap-4">
                          <Image
                            src={workflow.thumbnail}
                            alt={workflow.title}
                            width={64}
                            height={64}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-text-primary">{workflow.title}</h3>
                            <p className="text-sm text-text-muted">{workflow.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="flex items-center gap-1 text-sm text-text-secondary">
                                <Eye className="w-4 h-4" /> {workflow.views.toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-text-secondary">
                                <Download className="w-4 h-4" /> {workflow.installs.toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-text-secondary">
                                <DollarSign className="w-4 h-4" /> ${workflow.revenue.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={workflow.price === 0 ? 'badge-free' : 'badge-premium'}>
                            {workflow.price === 0 ? 'Free' : `$${workflow.price}`}
                          </span>
                          <button className="p-2 text-text-muted hover:text-text-primary">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="card p-6">
                  <h2 className="text-lg font-semibold text-text-primary mb-4">Analytics</h2>
                  <div className="h-64 flex items-center justify-center bg-bg-tertiary rounded-lg">
                    <p className="text-text-muted">Analytics charts will be displayed here</p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-text-primary">Recent Reviews</h2>
                  {mockWorkflows[0] && (
                    <div className="card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src={mockUsers[4].avatar}
                          alt="User"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="font-medium text-text-primary">Michael Brown</span>
                        <div className="flex items-center">
                          {[1,2,3,4,5].map(i => (
                            <Star key={i} className={`w-4 h-4 ${i <= 5 ? 'fill-accent-tertiary text-accent-tertiary' : 'text-text-muted'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary">Great workflow! Works perfectly for our team.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'earnings' && (
                <div className="space-y-6">
                  <div className="card p-6">
                    <h2 className="text-lg font-semibold text-text-primary mb-4">Earnings Summary</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-bg-tertiary rounded-lg">
                        <p className="text-sm text-text-muted">Total Earnings</p>
                        <p className="text-2xl font-bold text-text-primary">${mockDashboardStats.totalRevenue.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-bg-tertiary rounded-lg">
                        <p className="text-sm text-text-muted">Pending Payout</p>
                        <p className="text-2xl font-bold text-accent-primary">${mockDashboardStats.pendingPayout.toLocaleString()}</p>
                      </div>
                    </div>
                    <button className="w-full mt-4 btn-primary">
                      Withdraw Earnings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
