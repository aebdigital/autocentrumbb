import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Autocentrum BB – Banská Bystrica',
  description: 'Tipy, rady a novinky zo sveta automobilov. Prepis, odhlásenie, STK a ďalšie praktické informácie od Autocentrum BB.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta">BLOG</h1>
          <p className="text-gray-400 mt-2 font-montserrat font-light">Tipy, rady a novinky zo sveta automobilov</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col group"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold font-montserrat px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-gray-400 font-montserrat mb-3">
                  {new Date(post.date).toLocaleDateString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <h2 className="text-lg font-bold font-jakarta text-gray-900 mb-3 leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-red-600 font-semibold font-montserrat text-sm hover:underline">
                  Čítať viac →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
