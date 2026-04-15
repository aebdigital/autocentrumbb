import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tlačivá & Dokumenty | Autocentrum BB – Banská Bystrica',
  description: 'Stiahnite si zadarmo tlačivá pre prepis vozidla, splnomocnenie, kúpnu zmluvu a ďalšie dokumenty súvisiace s vozidlom.',
};

const DOCUMENTS = [
  {
    category: 'Prevod vlastníctva',
    items: [
      {
        title: 'Kúpna zmluva na motorové vozidlo',
        desc: 'Štandardná kúpna zmluva pre predaj a kúpu ojazdených vozidiel medzi fyzickými osobami.',
        pages: '2 strany',
        format: 'PDF / DOCX',
        href: '#',
      },
      {
        title: 'Splnomocnenie na prepis vozidla',
        desc: 'Plnomocenstvo pre zastupovanie pri prepise vozidla na dopravnom inšpektoráte.',
        pages: '1 strana',
        format: 'PDF / DOCX',
        href: '#',
      },
      {
        title: 'Splnomocnenie na odhlásenie vozidla',
        desc: 'Plnomocenstvo pre zastupovanie pri odhlásení vozidla z evidencie.',
        pages: '1 strana',
        format: 'PDF / DOCX',
        href: '#',
      },
    ],
  },
  {
    category: 'Protokoly',
    items: [
      {
        title: 'Odovzdávací protokol vozidla',
        desc: 'Protokol o odovzdaní a prevzatí vozidla – stav tachometra, kľúče, dokumenty.',
        pages: '1 strana',
        format: 'PDF / DOCX',
        href: '#',
      },
      {
        title: 'Protokol o poškodení vozidla',
        desc: 'Záznam o škodovej udalosti pre poisťovňu alebo súkromnú dohodu.',
        pages: '1 strana',
        format: 'PDF / DOCX',
        href: '#',
      },
    ],
  },
  {
    category: 'Žiadosti',
    items: [
      {
        title: 'Žiadosť o výpis z Registra vozidiel',
        desc: 'Formulár na získanie výpisu z evidencie vozidiel (história, záznamy).',
        pages: '1 strana',
        format: 'PDF',
        href: '#',
      },
      {
        title: 'Žiadosť o vydanie duplikátu OP vozidla',
        desc: 'Formulár na dopravnom inšpektoráte pri strate osvedčenia o evidencii.',
        pages: '1 strana',
        format: 'PDF',
        href: '#',
      },
    ],
  },
];

export default function TlacivyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-red-400 font-montserrat font-light text-sm uppercase tracking-widest mb-3">Autocentrum BB</p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta mb-4">Tlačivá & Dokumenty</h1>
          <p className="text-gray-300 font-montserrat font-light text-lg max-w-2xl leading-relaxed">
            Všetky potrebné dokumenty pre kúpu, predaj a prevod vozidla – zadarmo na stiahnutie.
          </p>
        </div>
      </div>

      {/* Info box */}
      <div className="bg-red-50 border-b border-red-100">
        <div className="container mx-auto px-4 py-4">
          <p className="text-red-800 font-montserrat font-light text-sm">
            <strong className="font-semibold">Tip:</strong> Dokumenty sú vzorové. Pred použitím skontrolujte aktuálnosť s platnými právnymi predpismi SR alebo sa poraďte s naším tímom.
          </p>
        </div>
      </div>

      {/* Documents */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {DOCUMENTS.map((group) => (
            <div key={group.category} className="mb-12">
              <h2 className="text-2xl font-bold font-jakarta text-gray-900 mb-6">{group.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((doc) => (
                  <div key={doc.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold font-jakarta text-gray-900 mb-2 leading-snug">{doc.title}</h3>
                      <p className="text-gray-500 font-montserrat font-light text-xs leading-relaxed mb-4">{doc.desc}</p>
                      <div className="flex gap-3 text-xs text-gray-400 font-montserrat mb-4">
                        <span>{doc.pages}</span>
                        <span>·</span>
                        <span>{doc.format}</span>
                      </div>
                    </div>
                    <span className="w-full text-center bg-gray-200 text-gray-500 font-bold font-jakarta text-sm px-4 py-2.5 rounded-lg cursor-not-allowed">
                      Už čoskoro
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-jakarta mb-3">Potrebujete pomoc s papierovaním?</h2>
          <p className="text-gray-400 font-montserrat font-light text-sm mb-6 max-w-lg mx-auto">
            Náš tím vám pomôže so všetkými formálnosťami spojenými s kúpou, predajom alebo prevodom vozidla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421905241887" className="bg-red-600 hover:bg-red-700 text-white font-bold font-jakarta px-8 py-3.5 rounded-lg transition-colors">
              +421 905 241 887
            </a>
            <a href="mailto:info@autocentrumbb.sk" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold font-jakarta px-8 py-3.5 rounded-lg transition-colors">
              info@autocentrumbb.sk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
