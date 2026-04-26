import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dovoz vozidiel | Autocentrum BB – Banská Bystrica',
  description: 'Zabezpečíme dovoz vozidla zo zahraničia presne podľa vašich požiadaviek. Nemecko, Rakúsko, Holandsko a ďalšie krajiny.',
};

const COUNTRIES = [
  { name: 'Nemecko', note: 'Najväčší trh so širokým výberom' },
  { name: 'Rakúsko', note: 'Kvalitné autá s nízkou soľou' },
  { name: 'Holandsko', note: 'Výhodné ceny, dobrý stav' },
  { name: 'Belgicko', note: 'Flotilové a dobre servisované vozidlá' },
  { name: 'Francúzsko', note: 'Veľký výber všetkých kategórií' },
  { name: 'Taliansko', note: 'Prémiové a športové modely' },
];

const STEPS = [
  { num: '01', title: 'Špecifikácia', desc: 'Poviete nám, aké auto hľadáte – značku, model, rok, výbavu a budget.' },
  { num: '02', title: 'Vyhľadanie', desc: 'Prehľadáme európske burzy a nájdeme najvhodnejšie ponuky.' },
  { num: '03', title: 'Kontrola', desc: 'Vozidlo fyzicky skontrolujeme alebo objednáme nezávislú prehliadku.' },
  { num: '04', title: 'Dovoz', desc: 'Zabezpečíme prepravu, colné odbavenie a registráciu na Slovensku.' },
];

export default function DovozPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-red-400 font-montserrat font-light text-sm uppercase tracking-widest mb-3">Autocentrum BB</p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta mb-4">Dovoz vozidiel</h1>
          <p className="text-gray-300 font-montserrat font-light text-lg max-w-2xl leading-relaxed">
            Nedaří sa vám nájsť auto snov na Slovensku? Zabezpečíme dovoz priamo zo zahraničia – za výhodné ceny a s kompletnou administratívou.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+421905241887"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Nezáväzná konzultácia
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              Napísať dopyt
            </Link>
          </div>
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Ako prebieha dovoz?</h2>
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

      {/* Countries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-4">Krajiny dovozu</h2>
          <p className="text-gray-500 font-montserrat font-light text-center mb-12 max-w-xl mx-auto">
            Dovážame vozidlá z celej Európy. Najčastejšie z týchto krajín:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                <h3 className="font-bold font-jakarta text-gray-900 mb-1">{c.name}</h3>
                <p className="text-xs text-gray-500 font-montserrat font-light">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-8">Čo je v cene dovozu?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Vyhľadanie a výber vozidla',
              'Fyzická prehliadka vozidla',
              'Preprava na Slovensko',
              'Colné odbavenie (mimo EÚ)',
              'Registrácia na Slovensku',
              'Homologácia (ak je potrebná)',
              'STK a EK pred odovzdaním',
              'Poradenstvo a administratíva',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-montserrat font-light text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-jakarta text-white mb-4">Máte záujem o dovoz?</h2>
          <p className="text-red-100 font-montserrat font-light mb-8 max-w-xl mx-auto">
            Opíšte nám auto, ktoré hľadáte, a my sa postaráme o zvyšok.
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
