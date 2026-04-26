import type { Metadata } from 'next';
import Link from 'next/link';
<<<<<<< HEAD
import Image from 'next/image';
=======
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

<<<<<<< HEAD
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
=======
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
  if (!post) return {};
  return { title: `${post.title} | Autocentrum BB`, description: post.excerpt };
}

// Very simple markdown-to-JSX renderer for the subset we use
function renderContent(md: string) {
  const lines = md.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold font-jakarta text-gray-900 mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold font-jakarta text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('#### ')) {
      elements.push(<h4 key={i} className="text-base font-bold font-jakarta text-gray-800 mt-4 mb-2">{line.slice(5)}</h4>);
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(<p key={i} className="font-semibold text-gray-900 font-montserrat mt-3 mb-1">{line.slice(2, -2)}</p>);
    } else if (line.startsWith('✓ ') || line.startsWith('❌ ') || line.startsWith('⚠️ ')) {
      elements.push(<p key={i} className="font-montserrat font-light text-gray-700 text-sm leading-relaxed py-0.5">{line}</p>);
    } else if (line.match(/^[-*] /)) {
      elements.push(<li key={i} className="font-montserrat font-light text-gray-700 text-sm leading-relaxed ml-4 list-disc">{line.slice(2)}</li>);
    } else if (line.startsWith('| ')) {
      // table row — skip for simplicity, collect into table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('| ')) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter(r => !r.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-4">
          <table className="w-full text-sm font-montserrat border-collapse">
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split('|').filter(c => c.trim());
                return (
                  <tr key={ri} className={ri === 0 ? 'bg-red-600 text-white' : ri % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2 border border-gray-200 font-light">{cell.trim()}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.trim() === '') {
      // skip empty
    } else {
      // inline bold: **text**
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const inline = parts.map((part, pi) =>
        pi % 2 === 1 ? <strong key={pi}>{part}</strong> : part
      );
      elements.push(<p key={i} className="font-montserrat font-light text-gray-700 leading-relaxed text-sm mt-2">{inline}</p>);
    }
    i++;
  }
  return elements;
}

<<<<<<< HEAD
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
=======
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="text-gray-400 hover:text-white text-sm font-montserrat transition-colors">
            ← Späť na blog
          </Link>
          <div className="mt-3 inline-block bg-red-600 text-white text-xs font-bold font-montserrat px-3 py-1 rounded">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-jakarta mt-3 max-w-3xl">{post.title}</h1>
          <p className="text-gray-400 mt-2 font-montserrat font-light text-sm">
            {new Date(post.date).toLocaleDateString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
<<<<<<< HEAD
          <div className="relative aspect-video mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
=======
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-8 bg-red-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-bold font-jakarta mb-2">Máte otázky? Sme tu pre vás.</h3>
            <p className="text-red-100 font-montserrat font-light text-sm mb-4">
              Naši odborníci vám radi poradia s kúpou, predajom alebo administratívou spojenou s vozidlom.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+421905241887" className="bg-white text-red-600 font-bold font-jakarta px-5 py-2.5 rounded-lg hover:bg-red-50 transition-colors text-center">
                📞 +421 905 241 887
              </a>
              <Link href="/ponuka" className="bg-black/20 hover:bg-black/30 text-white font-bold font-jakarta px-5 py-2.5 rounded-lg transition-colors text-center">
                Zobraziť ponuku →
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="text-red-600 font-semibold font-montserrat hover:underline">
              ← Späť na všetky články
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
