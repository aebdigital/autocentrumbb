'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  time: number;
}

interface GoogleData {
  reviews: Review[];
  rating: number;
  user_ratings_total: number;
}

export default function ReviewsSection() {
  const [data, setData] = useState<GoogleData | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="py-20 bg-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!data || !data.reviews || data.reviews.length === 0) {
    return null;
  }

  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const writeReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  return (
    <AnimatedSection className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <p className="text-red-600 font-jakarta font-bold text-sm tracking-widest uppercase mb-2">AUTOCENTRUMBB</p>
            <h2 className="text-5xl md:text-6xl font-bold font-jakarta text-gray-900">Recenzie</h2>
          </div>
          {data.reviews.length > 3 && (
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous reviews"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next reviews"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Info Block */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-4 overflow-hidden">
               <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-600" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="font-jakarta font-bold text-gray-900 text-sm mb-2 leading-tight">
              AutoCENTRUM BB - Autobazár, výkup vozidiel, požičovňa
            </h3>
            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(data.rating) ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-xs font-montserrat mb-6">
              {data.user_ratings_total} Google recenzií
            </p>
            <a
              href={writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-jakarta font-bold text-sm transition-colors text-center shadow-lg shadow-blue-200"
            >
              Napísať recenziu
            </a>
          </div>

          {/* Reviews Slider */}
          <div className="lg:col-span-9 relative">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {data.reviews.map((review, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[calc(50%-8px)] xl:min-w-[calc(33.333%-11px)] snap-start bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col relative"
                >
                  <div className="absolute top-6 right-6">
                    <Image src="/google-logo.svg" alt="Google" width={18} height={18} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      {review.profile_photo_url ? (
                        <img src={review.profile_photo_url} alt={review.author_name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold text-sm">
                          {review.author_name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-jakarta font-bold text-gray-900 text-sm leading-tight">{review.author_name}</h4>
                      <p className="text-gray-400 text-[10px] font-montserrat mt-0.5">
                        {new Date(review.time * 1000).toLocaleDateString('sk-SK')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-white" stroke="currentColor" strokeWidth="4">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm font-montserrat font-light leading-relaxed mb-4 line-clamp-4 italic">
                    {review.text}
                  </p>

                  <button className="text-gray-400 text-xs font-montserrat hover:text-gray-600 mt-auto text-left">
                    Čítaj viac
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
