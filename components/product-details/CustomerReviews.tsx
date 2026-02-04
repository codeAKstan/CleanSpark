import React from "react";
import { Review } from "@/lib/types";
import { Star } from "lucide-react";

interface CustomerReviewsProps {
  reviews: Review[];
}

export function CustomerReviews({ reviews }: CustomerReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Customer Reviews
          </h2>
          <p className="text-slate-500">
            What your neighbors are saying about their transition to solar.
          </p>
        </div>
        <button className="hidden sm:block px-6 py-2 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-slate-50 rounded-xl p-6 border border-slate-100"
          >
            <div className="flex text-amber-400 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-slate-600 text-sm mb-6 italic min-h-[80px]">
              "{review.content}"
            </p>

            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${review.avatarColor}`}
              >
                {review.avatarInitials}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">
                  {review.author}
                </div>
                <div className="text-xs text-slate-500">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 sm:hidden">
         <button className="w-full px-6 py-3 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
          Write a Review
        </button>
      </div>
    </section>
  );
}
