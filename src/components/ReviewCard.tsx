'use client';

import Image from 'next/image';
import { ThumbsUp, CheckCircle } from 'lucide-react';
import { Review } from '@/types';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="card p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={review.user.avatar}
            alt={review.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-text-primary">{review.user.name}</span>
              {review.verified && (
                <span className="flex items-center gap-1 text-xs text-success">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
            <span className="text-xs text-text-muted">{formatDate(review.createdAt)}</span>
          </div>
        </div>
        <StarRating rating={review.rating} size={14} />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h4 className="font-semibold text-text-primary">{review.title}</h4>
        <p className="text-text-secondary mt-2">{review.content}</p>
      </div>

      {/* Creator Response */}
      {review.creatorResponse && (
        <div className="mt-4 p-4 bg-bg-tertiary rounded-lg border-l-2 border-accent-primary">
          <p className="text-sm text-text-muted">Creator Response:</p>
          <p className="text-text-secondary mt-1">{review.creatorResponse.content}</p>
          <p className="text-xs text-text-muted mt-2">{formatDate(review.creatorResponse.createdAt)}</p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <button className="flex items-center gap-2 text-text-muted hover:text-accent-primary transition-colors">
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm">Helpful ({review.helpfulCount})</span>
        </button>
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}
