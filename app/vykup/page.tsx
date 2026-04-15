import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Výkup vozidiel | Autocentrum BB – Banská Bystrica',
  description: 'Predajte nám vaše auto za férovú cenu. Rýchly výkup vozidiel, okamžitá hotovosť, bez zbytočnej byrokracie. Autocentrum BB – Banská Bystrica.',
};

const STEPS = [
  {
    num: '01',
    title: 'Kontaktujte nás',
    desc: 'Zavolajte nám alebo vyplňte formulár. Dohodneme si termín prehliadky.',
  },
  {
    num: '02',
    title: 'Bezplatné ocenenie',
    desc: 'Naši odborníci vozidlo prezrú a pripravia férovú cenovú ponuku.',
  },
  {
    num: '03',
    title: 'Podpis zmluvy',
    desc: 'Dohodneme sa na cene a podpíšeme kúpnu zmluvu.',
  },
  {
    num: '04',
    title: 'Okamžitá výplata',
    desc: 'Peniaze dostanete v hotovosti alebo bankovým prevodom ihneď.',
  },
];

const ADVANTAGES = [
  { title: 'Férovú cenu', desc: 'Ocenenie podľa aktuálnych trhových cien – bez zbytočného podhodnotenia.' },
  { title: 'Rýchle vybavenie', desc: 'Celý proces prebieha na mieste, bez zdĺhavého čakania.' },
  { title: 'Okamžitá platba', desc: 'Peniaze v hotovosti alebo prevodom hneď po podpise zmluvy.' },
  { title: 'Bezpaplierové vybavenie', desc: 'Prepis a všetku administratívu vybavíme za vás.' },
  { title: 'Bez skrytých poplatkov', desc: 'Ponúknutá cena je finálna – žiadne odpočty na konci.' },
  { title: 'Akýkoľvek stav vozidla', desc: 'Vykupujeme aj havarované, nepojazdné alebo staršie vozidlá.' },
];

export default function VykupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-red-400 font-montserrat font-light text-sm uppercase tracking-widest mb-3">Autocentrum BB</p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta mb-4">Výkup vozidiel</h1>
          <p className="text-gray-300 font-montserrat font-light text-lg max-w-2xl leading-relaxed">
            Predajte nám vaše auto rýchlo a za férovú cenu. Okamžitá hotovosť, žiadna byrokracia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+421905241887"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +421 905 241 887
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              Nezáväzná ponuka
            </Link>
          </div>
        </div>
      </div>

      {/* Process steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Ako prebieha výkup?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold font-jakarta mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold font-jakarta text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Prečo predať auto nám?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv) => (
              <div key={adv.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold font-jakarta text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-8">Aké vozidlá vykupujeme?</h2>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <ul className="space-y-3">
              {[
                'Osobné automobily všetkých značiek a modelov',
                'Vozidlá v akomkoľvek technickom stave',
                'Havarované a poškodené vozidlá',
                'Nepojazdné vozidlá',
                'Staršie vozidlá bez platnej STK',
                'Vozidlá s vysokým nájazdom',
                'Flotilové a firemné vozidlá',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-montserrat font-light text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-jakarta text-white mb-4">Zaujíma vás výkup vášho auta?</h2>
          <p className="text-red-100 font-montserrat font-light mb-8 max-w-xl mx-auto">
            Kontaktujte nás ešte dnes a získajte nezáväznú cenovú ponuku. Reagujeme do 24 hodín.
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
