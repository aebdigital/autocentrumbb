import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leasing & Autoúver | Autocentrum BB – Banská Bystrica',
  description: 'Výhodné leasingové a úverové programy na mieru. Schválenie do 1 hodiny, splatnosť až 96 mesiacov. Autocentrum BB – Banská Bystrica.',
};

const FEATURES = [
  { title: 'Schválenie do 1 hodiny', desc: 'Rýchle posúdenie žiadosti – bez zdĺhavého čakania.' },
  { title: 'Splatnosť až 96 mesiacov', desc: 'Flexibilná dĺžka splácania podľa vašich možností.' },
  { title: 'Poistenie zadarmo', desc: 'Povinné poistenie PZP v cene financovania.' },
  { title: 'Nulová akontácia', desc: 'Možnosť financovania bez vstupného vkladu.' },
  { title: 'Fixná úroková sadzba', desc: 'Splátka sa počas celej doby nemení.' },
  { title: 'Online žiadosť', desc: 'Požiadajte o financovanie z pohodlia domova.' },
  { title: 'Individuálny prístup', desc: 'Riešenia na mieru pre fyzické aj právnické osoby.' },
];

const TYPES = [
  {
    title: 'Finančný leasing',
    desc: 'Po skončení leasingu sa vozidlo stáva vašim majetkom. Splátky sú daňovo uznateľné pre podnikateľov.',
    items: ['Vhodný pre firmy aj fyzické osoby', 'DPH je rozpočítaná do splátok', 'Po skončení auto vaše'],
  },
  {
    title: 'Operatívny leasing',
    desc: 'Vozidlo používate, ale nestáva sa vašim majetkom. Ideálne pre firmy, ktoré chcú mať vždy nové auto.',
    items: ['Servis a poistenie v splátke', 'Bez starosti o predaj auta', 'Daňovo výhodné'],
  },
  {
    title: 'Autoúver',
    desc: 'Klasický spotrebiteľský úver na kúpu vozidla. Auto je vaše od prvého dňa.',
    items: ['Rýchle schválenie', 'Bez ručiteľa', 'Vlastníctvo hneď od podpisu'],
  },
];

export default function LeasingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-red-400 font-montserrat font-light text-sm uppercase tracking-widest mb-3">Autocentrum BB</p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta mb-4">Leasing & Autoúver</h1>
          <p className="text-gray-300 font-montserrat font-light text-lg max-w-2xl leading-relaxed">
            Výhodné financovanie vozidla na mieru – schválenie do 1 hodiny, splatnosť až 96 mesiacov.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+421905241887"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Poradiť sa zdarma
            </a>
            <Link
              href="/ponuka"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors"
            >
              Prehliadnuť ponuku
            </Link>
          </div>
        </div>
      </div>

      {/* Key numbers */}
      <section className="bg-red-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-4xl font-bold font-jakarta">1h</p><p className="text-red-100 font-montserrat font-light mt-1">Schválenie</p></div>
            <div><p className="text-4xl font-bold font-jakarta">96</p><p className="text-red-100 font-montserrat font-light mt-1">Mesiacov splatnosť</p></div>
            <div><p className="text-4xl font-bold font-jakarta">0%</p><p className="text-red-100 font-montserrat font-light mt-1">Akontácia možná</p></div>
            <div><p className="text-4xl font-bold font-jakarta">100%</p><p className="text-red-100 font-montserrat font-light mt-1">Online vybavenie</p></div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Typy financovania</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TYPES.map((type) => (
              <div key={type.title} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-500 font-montserrat font-light text-sm leading-relaxed mb-5">{type.desc}</p>
                <ul className="space-y-2">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-montserrat text-gray-700">
                      <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-jakarta text-gray-900 text-center mb-12">Výhody financovania cez Autocentrum BB</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold font-jakarta text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-500 font-montserrat font-light text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-jakarta mb-4">Záujem o financovanie?</h2>
          <p className="text-gray-400 font-montserrat font-light mb-8 max-w-xl mx-auto">
            Kontaktujte nás – poradíme vám s výberom najvýhodnejšej formy financovania pre vaše potreby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421905241887" className="bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors">
              +421 905 241 887
            </a>
            <Link href="/kontakt" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold font-jakarta px-8 py-4 rounded-lg transition-colors">
              Napísať správu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
