import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Požičovňa vozidiel | Autocentrum BB – Banská Bystrica',
  description: 'Požičajte si auto v Banskej Bystrici. Krátko- aj dlhodobý prenájom, výhodné ceny, široký výber vozidiel.',
};

const CATEGORIES = [
  {
    title: 'Mestské autá',
    desc: 'Ideálne na každodenné použitie v meste. Nízka spotreba, ľahké parkovanie.',
    examples: 'Fabia, Polo, Corsa, Fiesta',
  },
  {
    title: 'Stredná trieda',
    desc: 'Pohodlné cestovanie pre rodiny aj obchodné cesty.',
    examples: 'Octavia, Golf, Focus, Astra',
  },
  {
    title: 'SUV & Crossover',
    desc: 'Priestranné vozidlá vhodné na výlety aj náročnejší terén.',
    examples: 'Karoq, Tiguan, Qashqai',
  },
  {
    title: 'Dodávky',
    desc: 'Prepravte väčší náklad alebo zariadenie bez starostí.',
    examples: 'Transit, Sprinter, Ducato',
  },
];

const INCLUDED = [
  'Havarijné poistenie',
  'Povinné zmluvné poistenie (PZP)',
  'Neobmedzený počet kilometrov*',
  'Diaľničná nálepka SR',
  'Asistenčná služba 24/7',
  'Technická kontrola vozidla',
];

export default function PozicovnaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-red-400 font-montserrat font-light text-sm uppercase tracking-widest mb-3">Autocentrum BB</p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta mb-4">Požičovňa vozidiel</h1>
          <p className="text-gray-300 font-montserrat font-light text-lg max-w-2xl leading-relaxed">
            Krátkodobý aj dlhodobý prenájom vozidiel v Banskej Bystrici. Výhodné ceny, moderné autá, jednoduchá rezervácia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+421905241887"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Rezervovať auto
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              Overiť dostupnosť
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Kategórie vozidiel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 text-red-600" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 36l4-12h34l4 12"/><rect x="5" y="36" width="54" height="14" rx="4"/><circle cx="17" cy="54" r="4"/><circle cx="47" cy="54" r="4"/><path d="M5 43h54"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold font-jakarta text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed mb-3">{cat.desc}</p>
                <p className="text-xs text-red-600 font-montserrat font-semibold">{cat.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-4">Čo je v cene prenájmu?</h2>
          <p className="text-gray-500 font-montserrat font-light text-center mb-10">Všetky naše vozidlá majú v základnej cene:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-montserrat font-light text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-montserrat mt-4 text-center">*Pri dlhodobom prenájme platia podmienky zmluvy.</p>
        </div>
      </section>

      {/* Rental types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Typy prenájmu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-3">Krátkodobý prenájom</h3>
              <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed mb-4">
                Od 1 dňa až po niekoľko týždňov. Ideálne na výlety, služobné cesty alebo keď je vaše auto v servise.
              </p>
              <ul className="space-y-2">
                {['Denné sadzby', 'Víkendové balíčky', 'Okamžitá dostupnosť', 'Flexibilné odovzdanie'].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm font-montserrat text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-3">Dlhodobý prenájom</h3>
              <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed mb-4">
                Od 1 mesiaca vyššie. Výhodná alternatíva ku kúpe vozidla – servis v cene, bez veľkej investície.
              </p>
              <ul className="space-y-2">
                {['Mesačné sadzby', 'Servis a pneumatiky v cene', 'Bez starosti o predaj', 'Vhodné pre firmy'].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm font-montserrat text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-jakarta text-white mb-4">Záujem o prenájom?</h2>
          <p className="text-red-100 font-montserrat font-light mb-8 max-w-xl mx-auto">
            Zavolajte nám alebo napíšte. Dohodneme sa na termíne a cene prenájmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421905241887" className="bg-white text-red-600 font-bold font-jakarta px-8 py-4 rounded-lg hover:bg-red-50 transition-colors">
              +421 905 241 887
            </a>
            <a href="mailto:info@autocentrumbb.sk" className="bg-black/20 hover:bg-black/30 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors">
              info@autocentrumbb.sk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
