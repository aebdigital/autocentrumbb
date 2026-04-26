import Link from 'next/link';
import { getCars } from '@/lib/cars';
import ParallaxHero from '@/components/ParallaxHero';
import FeeCalculator from '@/components/FeeCalculator';
import RollingButton from '@/components/RollingButton';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/blog';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';

export const metadata: Metadata = {
  title: 'Autocentrum BB – Autobazár Banská Bystrica',
  description: 'Kúpa, predaj, leasing, dovoz a požičovňa vozidiel v Banskej Bystrici. Viac ako 10 rokov skúseností. Autocentrum BB.',
};

export const revalidate = 300;

const SERVICES = [
  {
    title: 'Predaj vozidiel',
    desc: 'Široká ponuka kvalitných ojazdených a nových vozidiel.',
    svg: <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-red-600" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 36l4-12h34l4 12"/><rect x="5" y="36" width="54" height="14" rx="4"/><circle cx="17" cy="54" r="4"/><circle cx="47" cy="54" r="4"/><path d="M5 43h54"/></svg>,
  },
  {
    title: 'Výkup vozidiel',
    desc: 'Odkúpime vaše auto za férovú trhovú cenu.',
    svg: <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-red-600" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="32" cy="32" r="22"/><path d="M32 18v4m0 16v4m-8-12h14a4 4 0 010 8H26m0 0h14"/><path d="M24 26h10a4 4 0 010 8"/></svg>,
  },
  {
    title: 'Leasing & financovanie',
    desc: 'Výhodné leasingové a úverové programy na mieru.',
    svg: <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-red-600" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="14" width="48" height="36" rx="4"/><path d="M8 24h48M18 34h10M18 40h6"/><rect x="36" y="32" width="12" height="10" rx="2"/></svg>,
  },
  {
    title: 'Dovoz vozidiel',
    desc: 'Zabezpečíme dovoz vozidla podľa vašich požiadaviek.',
    svg: <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-red-600" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="32" cy="32" r="22"/><path d="M10 32h44M32 10c-6 6-9 14-9 22s3 16 9 22M32 10c6 6 9 14 9 22s-3 16-9 22"/></svg>,
  },
];

const HERO_TILES = [
  { label: 'KÚPA', href: '/ponuka', imageSrc: '/services/kupa.webp', position: 'center' },
  { label: 'VÝKUP', href: 'https://vykupauta.sk/', imageSrc: '/services/vykup.jpg', position: 'center' },
  { label: 'LEASING / AUTOÚVER', href: '/leasing', imageSrc: '/services/leasing.jpg', position: 'center' },
  { label: 'TLAČIVÁ', href: '/tlacivy', imageSrc: '/services/tlaciva.jpg', position: 'center' },
  { label: 'POŽIČOVŇA', href: '/pozicovna', imageSrc: '/services/pozicovna.jpg', position: 'center' },
];

export default async function HomePage() {
  const allCars = await getCars();
  const featured = allCars.slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Autocentrum BB",
    "url": "https://www.autocentrumbb.sk",
    "logo": "https://www.autocentrumbb.sk/logo.png",
    "image": "https://www.autocentrumbb.sk/hero.jpg",
    "description": "Kúpa, predaj, leasing, dovoz a požičovňa vozidiel v Banskej Bystrici. Viac ako 10 rokov skúseností.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zvolenská cesta 141",
      "addressLocality": "Banská Bystrica",
      "postalCode": "974 05",
      "addressCountry": "SK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.7367,
      "longitude": 19.1451
    },
    "telephone": "+421 905 500 222",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ParallaxHero imageSrc="/hero.jpg">
        <div className="container mx-auto px-4 pt-10 pb-10">
          <div className="flex items-center gap-8">
            <div className="flex-1 min-w-0">
              <p className="text-red-400 font-montserrat font-light text-sm uppercase tracking-widest mb-3">Autobazár</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-jakarta leading-tight">
                AUTOCENTRUM BB –<br />
                <span className="text-red-400">BANSKÁ BYSTRICA</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-montserrat font-light text-gray-200">
                Viac ako 10 rokov pomáhame pri kúpe, predaji, dovoze a prenájme auta. Férový prístup, kvalitné služby a spokojní zákazníci.
              </p>
               <div className="flex flex-col sm:flex-row gap-4">
                <RollingButton
                  text="PONUKA"
                  href="/ponuka"
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-white font-bold text-lg font-jakarta transition-colors text-center"
                />
                <RollingButton
                  text="Kontakt"
                  href="/kontakt"
                  className="bg-white/10 hover:bg-white/20 border border-white/40 px-8 py-4 rounded text-white font-bold text-lg font-jakarta transition-colors text-center"
                />
              </div>
            </div>
            <div className="hidden lg:flex flex-shrink-0 w-[520px] items-end justify-end self-end relative h-[380px]">
              <Image
                src="/carhero.png"
                alt="Autocentrum BB"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </ParallaxHero>

      <AnimatedSection className="relative z-10 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {HERO_TILES.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group relative flex min-h-[142px] overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.12)), url(${tile.imageSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: tile.position,
                }}
              >
                <div className="absolute inset-0 bg-red-600/0 transition duration-300 group-hover:bg-red-600/20" />
                <div className="relative mt-auto w-full p-4">
                  <p className="font-jakarta text-lg font-bold leading-tight text-white sm:text-xl">{tile.label}</p>
                  <span className="mt-2 block h-1 w-12 rounded-full bg-red-500 transition-all duration-300 group-hover:w-20 group-hover:bg-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {featured.length > 0 && (
        <AnimatedSection className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-jakarta text-gray-900 mb-8">Aktuálna ponuka</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((car) => {
                const thumb = car.images[0] ?? null;
                return (
                  <Link key={car.id} href={`/vozidlo/${car.slug}`} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
                    <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                      {thumb ? (
                        <Image
                          src={thumb}
                          alt={car.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl">🚗</div>
                      )}
                      {car.isReserved && <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold font-montserrat px-2 py-1 rounded">REZERVOVANÉ</div>}
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <h3 className="font-bold font-jakarta text-gray-900 text-sm leading-tight mb-2 min-h-[2.5rem]">{car.title}</h3>
                      <div className="grid grid-cols-2 gap-1 mb-3 flex-1">
                        {car.year > 0 && <div className="flex items-center gap-1 text-xs font-montserrat text-gray-500"><Image src="/icons/rok.svg" alt="" width={14} height={14} /><span>{car.year}</span></div>}
                        {car.mileage > 0 && <div className="flex items-center gap-1 text-xs font-montserrat text-gray-500"><Image src="/icons/kilometre.svg" alt="" width={14} height={14} /><span>{car.mileage.toLocaleString('sk-SK')} km</span></div>}
                        {car.fuel && <div className="flex items-center gap-1 text-xs font-montserrat text-gray-500"><Image src="/icons/palivo.svg" alt="" width={14} height={14} /><span>{car.fuel}</span></div>}
                        {car.transmission && <div className="flex items-center gap-1 text-xs font-montserrat text-gray-500"><Image src="/icons/prevodovka.svg" alt="" width={14} height={14} /><span className="truncate">{car.transmission}</span></div>}
                      </div>
                      <div className="border-t border-gray-100 pt-2">
                        <p className="text-xl font-bold font-jakarta text-red-600">{car.price > 0 ? `${car.price.toLocaleString('sk-SK')} €` : 'Cena na vyžiadanie'}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <RollingButton
                text="Všetky autá →"
                href="/ponuka"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-10 py-4 rounded-lg text-lg transition-colors"
              />
            </div>
          </div>
        </AnimatedSection>
      )}

      <ReviewsSection />

      <AboutSection />

      <AnimatedSection className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:gap-16 mb-10">
              <div className="flex-1 mb-6 md:mb-0">
                <p className="text-red-600 font-montserrat font-semibold text-xs uppercase tracking-widest mb-2">AUTOCENTRUMBB</p>
                <h2 className="text-4xl md:text-5xl font-bold font-jakarta text-gray-900 leading-tight">
                  Poplatok za prepis<br />auta
                </h2>
              </div>
              <div className="md:w-72 flex-shrink-0">
                <p className="text-gray-500 font-montserrat font-light text-base leading-relaxed">
                  Vypočítajte si na našej kalkulačke, koľko vás bude stáť prihlásenie vášho vozidla na dopravnom inšpektoráte.
                </p>
              </div>
            </div>
            <FeeCalculator />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-red-600 font-montserrat font-semibold text-xs uppercase tracking-widest mb-2">Užitočné informácie</p>
              <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-gray-900">Blog & rady</h2>
            </div>
            <Link href="/blog" className="text-red-600 font-bold font-jakarta hover:underline">Všetky články →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('sk-SK')}</span>
                  </div>
                  <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 font-montserrat text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.068270564639!2d19.145100000000004!3d48.7367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153e7f4f9cd655%3A0x99675ac215cf74b0!2sAutocentrumbb%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1714100000000!5m2!1ssk!2ssk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Autocentrum BB mapa"
        />
      </AnimatedSection>
    </div>
  );
}
