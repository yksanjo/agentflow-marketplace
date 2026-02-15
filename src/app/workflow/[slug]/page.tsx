'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import StarRating from '@/components/StarRating';
import { mockWorkflows, mockReviews } from '@/data/mockData';
import { Download, Star, GitBranch, Clock, Tag, CheckCircle, Heart, Share2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function WorkflowDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [isFavorite, setIsFavorite] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);

  const workflow = mockWorkflows.find(w => w.slug === resolvedParams.slug);
  const reviews = mockReviews.filter(r => r.workflowId === workflow?.id);

  if (!workflow) {
    notFound();
  }

  const handleInstall = () => {
    setInstalling(true);
    // Simulate installation
    setTimeout(() => {
      setInstalling(false);
      setInstalled(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={0} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-text-muted">
              <li><Link href="/" className="hover:text-accent-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/browse" className="hover:text-accent-primary">Workflows</Link></li>
              <li>/</li>
              <li className="text-text-primary">{workflow.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
                <Image
                  src={workflow.thumbnail}
                  alt={workflow.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="badge-secondary mb-2">{workflow.category.name}</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-text-primary">{workflow.title}</h1>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-accent-tertiary text-accent-tertiary" />
                  <span className="font-semibold text-text-primary">{workflow.rating.toFixed(1)}</span>
                  <span className="text-text-muted">({workflow.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">{workflow.installCount.toLocaleString()} installs</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">v{workflow.version}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">Updated {new Date(workflow.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`btn-ghost flex items-center gap-2 ${isFavorite ? 'text-accent-primary' : ''}`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Saved' : 'Save'}
                </button>
                <button className="btn-ghost flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Description */}
              <div className="card p-6 mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">About this workflow</h2>
                <div className="prose prose-invert max-w-none text-text-secondary">
                  {workflow.longDescription?.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {workflow.tags.map(tag => (
                    <Link key={tag} href={`/browse?q=${tag}`} className="badge-primary hover:bg-accent-primary/30">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Files */}
              <div className="card p-6 mb-8">
                <h2 className="text-xl font-semibold text-text-primary mb-4">Included Files</h2>
                <div className="space-y-3">
                  {workflow.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-5 h-5 text-accent-primary" />
                        <div>
                          <p className="font-medium text-text-primary">{file.name}</p>
                          <p className="text-sm text-text-muted">{file.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              {workflow.requirements && workflow.requirements.length > 0 && (
                <div className="card p-6 mb-8">
                  <h2 className="text-xl font-semibold text-text-primary mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {workflow.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reviews Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-text-primary">Reviews</h2>
                  <button 
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="btn-secondary"
                  >
                    Write a Review
                  </button>
                </div>

                {/* Review Form */}
                {showReviewForm && (
                  <div className="card p-6 mb-6">
                    <h3 className="font-semibold text-text-primary mb-4">Write your review</h3>
                    <div className="mb-4">
                      <label className="block text-sm text-text-secondary mb-2">Rating</label>
                      <StarRating 
                        rating={reviewRating} 
                        size={24} 
                        interactive 
                        onChange={setReviewRating} 
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm text-text-secondary mb-2">Your Review</label>
                      <textarea 
                        className="input-field h-32 resize-none"
                        placeholder="Share your experience with this workflow..."
                      />
                    </div>
                    <div className="flex gap-3">
                      <button className="btn-primary">Submit Review</button>
                      <button 
                        onClick={() => setShowReviewForm(false)}
                        className="btn-ghost"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.length > 0 ? (
                    reviews.map(review => (
                      <ReviewCard key={review.id} review={review} />
                    ))
                  ) : (
                    <div className="card p-6 text-center">
                      <p className="text-text-muted">No reviews yet. Be the first to review!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-text-muted">Price</span>
                    <span className="text-3xl font-bold text-text-primary">
                      {workflow.price === 0 ? 'Free' : `$${workflow.price}`}
                    </span>
                  </div>

                  {installed ? (
                    <button className="w-full btn-primary bg-success hover:bg-success/90 flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Installed
                    </button>
                  ) : workflow.price === 0 ? (
                    <button 
                      onClick={handleInstall}
                      disabled={installing}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      {installing ? (
                        <>
                          <span className="w-5 h-5 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                          Installing...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Install Now
                        </>
                      )}
                    </button>
                  ) : (
                    <button className="w-full btn-primary flex items-center justify-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      Buy Now
                    </button>
                  )}

                  <p className="text-xs text-text-muted text-center mt-4">
                    {workflow.price === 0 
                      ? 'Free to use with no hidden fees'
                      : 'One-time payment, lifetime access'}
                  </p>
                </div>

                {/* Creator Card */}
                <div className="card p-6">
                  <h3 className="text-sm font-semibold text-text-muted mb-4">Created by</h3>
                  <div className="flex items-center gap-4">
                    <Image
                      src={workflow.creator.avatar}
                      alt={workflow.creator.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">{workflow.creator.name}</p>
                      <p className="text-sm text-text-muted">@{workflow.creator.username}</p>
                    </div>
                  </div>
                  {workflow.creator.bio && (
                    <p className="text-sm text-text-secondary mt-4">{workflow.creator.bio}</p>
                  )}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent-tertiary text-accent-tertiary" />
                      <span className="text-sm font-medium text-text-primary">{workflow.creator.rating}</span>
                    </div>
                    <div className="text-sm text-text-muted">
                      {workflow.creator.totalSales?.toLocaleString()} sales
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="card p-6">
                  <h3 className="text-sm font-semibold text-text-muted mb-4">Information</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-text-muted">Version</span>
                      <span className="text-text-primary">{workflow.version}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-text-muted">Last Updated</span>
                      <span className="text-text-primary">{new Date(workflow.lastUpdated).toLocaleDateString()}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-text-muted">License</span>
                      <span className="text-text-primary">MIT</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
