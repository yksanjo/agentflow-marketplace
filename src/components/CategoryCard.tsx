'use client';

import Link from 'next/link';
import { Rocket, GitPullRequest, TestTube, Shield, FileText, Brain } from 'lucide-react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  GitPullRequest,
  TestTube,
  Shield,
  FileText,
  Brain,
};

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Rocket;

  return (
    <Link href={`/category/${category.slug}`}>
      <div 
        className="card p-6 group cursor-pointer opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-accent-primary" />
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-text-muted mt-1 line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Workflow Count */}
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-sm text-text-secondary">
            <span className="font-semibold text-accent-primary">{category.workflowCount}</span> workflows
          </span>
        </div>
      </div>
    </Link>
  );
}
