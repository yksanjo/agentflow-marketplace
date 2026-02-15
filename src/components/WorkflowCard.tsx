'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, Download, Heart } from 'lucide-react';
import { Workflow } from '@/types';

interface WorkflowCardProps {
  workflow: Workflow;
  index?: number;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function WorkflowCard({ workflow, index = 0, isFavorite = false, onToggleFavorite }: WorkflowCardProps) {
  return (
    <Link href={`/workflow/${workflow.slug}`}>
      <div 
        className="card-glow group cursor-pointer opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
      >
        {/* Thumbnail */}
        <div className="relative h-40 overflow-hidden">
          <Image
            src={workflow.thumbnail}
            alt={workflow.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 to-transparent" />
          
          {/* Favorite Button */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite(workflow.id);
              }}
              className="absolute top-3 right-3 p-2 rounded-full bg-bg-primary/50 backdrop-blur-sm hover:bg-bg-primary transition-colors"
            >
              <Heart 
                className={`w-4 h-4 ${isFavorite ? 'fill-accent-primary text-accent-primary' : 'text-text-secondary'}`} 
              />
            </button>
          )}

          {/* Price Badge */}
          <div className="absolute bottom-3 left-3">
            {workflow.price === 0 ? (
              <span className="badge-free">Free</span>
            ) : (
              <span className="badge-premium">${workflow.price}</span>
            )}
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="badge-secondary">{workflow.category.name}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-1">
            {workflow.title}
          </h3>

          {/* Creator */}
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={workflow.creator.avatar}
              alt={workflow.creator.name}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-sm text-text-secondary">{workflow.creator.name}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-text-muted mt-2 line-clamp-2">
            {workflow.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent-tertiary text-accent-tertiary" />
                <span className="text-sm font-medium text-text-primary">{workflow.rating.toFixed(1)}</span>
                <span className="text-xs text-text-muted">({workflow.reviewCount})</span>
              </div>

              {/* Downloads */}
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4 text-text-muted" />
                <span className="text-sm text-text-secondary">{formatNumber(workflow.installCount)}</span>
              </div>
            </div>

            {/* Version */}
            <span className="text-xs text-text-muted">v{workflow.version}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}
