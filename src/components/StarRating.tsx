'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export default function StarRating({ 
  rating, 
  maxRating = 5, 
  size = 16,
  interactive = false,
  onChange
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }).map((_, index) => (
        <button
          key={index}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onChange?.(index + 1)}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
        >
          <Star
            className="transition-colors"
            size={size}
            fill={index < rating ? '#f59e0b' : 'transparent'}
            color={index < rating ? '#f59e0b' : '#71717a'}
          />
        </button>
      ))}
    </div>
  );
}
