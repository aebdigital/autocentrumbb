import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCarById } from '@/lib/cars';
import CarGallery from '@/components/CarGallery';
<<<<<<< HEAD
import RollingButton from '@/components/RollingButton';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings2, 
  Zap, 
  Maximize, 
  Car, 
  Activity, 
  DoorOpen, 
  Users, 
  Palette, 
  Hash,
  Check
} from 'lucide-react';
=======
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02

export const revalidate = 300;

const SPECS = [
<<<<<<< HEAD
  { label: 'Rok výroby', icon: Calendar, field: 'yearMonth' as const },
  { label: 'Najazdené', icon: Gauge, field: 'mileage' as const },
  { label: 'Palivo', icon: Fuel, field: 'fuel' as const },
  { label: 'Prevodovka', icon: Settings2, field: 'transmission' as const },
  { label: 'Výkon', icon: Zap, field: 'power' as const },
  { label: 'Objem motora', icon: Maximize, field: 'engine' as const },
  { label: 'Karoséria', icon: Car, field: 'bodyType' as const },
  { label: 'Pohon', icon: Activity, field: 'drivetrain' as const },
  { label: 'Počet dverí', icon: DoorOpen, field: 'doors' as const },
  { label: 'Počet miest', icon: Users, field: 'seats' as const },
  { label: 'Farba', icon: Palette, field: 'color' as const },
  { label: 'VIN', icon: Hash, field: 'vin' as const },
=======
  { label: 'Rok výroby', icon: '/icons/rok.svg', field: 'yearMonth' as const },
  { label: 'Najazdené', icon: '/icons/kilometre.svg', field: 'mileage' as const },
  { label: 'Palivo', icon: '/icons/palivo.svg', field: 'fuel' as const },
  { label: 'Prevodovka', icon: '/icons/prevodovka.svg', field: 'transmission' as const },
  { label: 'Výkon', icon: '/icons/vykon.svg', field: 'power' as const },
  { label: 'Objem motora', icon: '/icons/objem.svg', field: 'engine' as const },
  { label: 'Karoséria', icon: '/icons/karoseria.svg', field: 'bodyType' as const },
  { label: 'Pohon', icon: '/icons/pohon.svg', field: 'drivetrain' as const },
  { label: 'Počet dverí', icon: '/icons/dvere.svg', field: 'doors' as const },
  { label: 'Počet miest', icon: '/icons/dvere.svg', field: 'seats' as const },
  { label: 'Farba', icon: '/icons/farba.svg', field: 'color' as const },
  { label: 'VIN', icon: '/icons/vin.svg', field: 'vin' as const },
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
];

export default async function CarDetailPage({
  params,
}: {
<<<<<<< HEAD
  params: Promise<{ slug: string }>;
}) {
  // Extract numeric ID from end of slug
  const { slug } = await params;
  const id = slug.match(/(\d+)$/)?.[1] ?? '';
=======
  params: { slug: string };
}) {
  // Extract numeric ID from end of slug
  const id = params.slug.match(/(\d+)$/)?.[1] ?? '';
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
  const car = id ? await getCarById(id) : null;
  if (!car) notFound();

  const specValues: Record<string, string> = {
    yearMonth: car.month ? `${car.month} / ${car.year}` : String(car.year),
    mileage: car.mileage > 0 ? `${car.mileage.toLocaleString('sk-SK')} km` : '',
    fuel: car.fuel,
    transmission: car.transmission,
    power: car.powerKw > 0 ? `${car.powerKw} kW (${car.powerPs} PS)` : '',
    engine: car.engine ? `${car.engine} cm³` : '',
    bodyType: car.bodyType,
    drivetrain: car.drivetrain,
    doors: car.doors,
    seats: car.seats,
    color: car.color,
    vin: car.vin,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mini Hero */}
<<<<<<< HEAD
      <AnimatedSection className="bg-gray-900 text-white pt-32 pb-8">
=======
      <div className="bg-gray-900 text-white pt-32 pb-8">
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
        <div className="container mx-auto px-4">
          <Link
            href="/ponuka"
            className="text-gray-400 hover:text-white text-sm font-montserrat transition-colors"
          >
            ← Späť na ponuku
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-jakarta mt-2">{car.title}</h1>
        </div>
<<<<<<< HEAD
      </AnimatedSection>

      <div className="container mx-auto px-4 py-8">
        {/* Gallery */}
        <AnimatedSection>
          <CarGallery images={car.images} carName={car.title} />
        </AnimatedSection>
=======
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Gallery */}
        <CarGallery images={car.images} carName={car.title} />
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Price */}
<<<<<<< HEAD
            <AnimatedSection className="border-b border-gray-100 pb-6">
=======
            <div className="border-b border-gray-100 pb-6">
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
              <h2 className="text-2xl font-bold font-jakarta text-gray-900">{car.title}</h2>
              <p className="text-gray-500 font-montserrat text-sm mt-1">
                {[car.year > 0 ? car.year : '', car.mileage > 0 ? `${car.mileage.toLocaleString('sk-SK')} km` : '', car.fuel, car.transmission]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
              <div className="flex flex-wrap items-baseline gap-4 mt-3">
                <span className="text-4xl font-bold font-jakarta text-red-600">
                  {car.price > 0 ? `${car.price.toLocaleString('sk-SK')} €` : 'Cena na vyžiadanie'}
                </span>
                {car.vatDeductible && car.priceWithoutVat > 0 && (
                  <span className="text-sm text-gray-500 font-montserrat">
                    Bez DPH: <strong>{car.priceWithoutVat.toLocaleString('sk-SK')} €</strong>
                  </span>
                )}
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                {car.isReserved && (
                  <span className="bg-gray-800 text-white text-xs font-bold font-montserrat px-3 py-1 rounded">
                    REZERVOVANÉ
                  </span>
                )}
                {car.vatDeductible && (
                  <span className="bg-red-600 text-white text-xs font-bold font-montserrat px-3 py-1 rounded">
                    Odpočet DPH
                  </span>
                )}
              </div>
<<<<<<< HEAD
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-4">Základné údaje</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SPECS.map(({ label, icon: Icon, field }) => {
=======
            </div>

            {/* Specs grid */}
            <div>
              <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-4">Základné údaje</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SPECS.map(({ label, icon, field }) => {
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
                  const val = specValues[field];
                  if (!val) return null;
                  return (
                    <div key={label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
<<<<<<< HEAD
                      <Icon className="w-5 h-5 text-red-600 flex-shrink-0" />
=======
                      <img src={icon} alt={label} className="w-6 h-6 flex-shrink-0" />
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 font-montserrat">{label}</p>
                        <p className="font-semibold text-gray-900 font-montserrat text-sm truncate">{val}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
<<<<<<< HEAD
            </AnimatedSection>

            {/* Description */}
            {car.description && (
              <AnimatedSection>
=======
            </div>

            {/* Description */}
            {car.description && (
              <div>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
                <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-3">Popis vozidla</h3>
                <div className="bg-gray-50 rounded-xl p-5 font-montserrat text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                  {car.description}
                </div>
<<<<<<< HEAD
              </AnimatedSection>
=======
              </div>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
            )}

            {/* Extended description */}
            {car.descriptionExtend && (
              <div className="bg-gray-50 rounded-xl p-5 font-montserrat text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                {car.descriptionExtend}
              </div>
            )}

            {/* Features */}
            {car.features.length > 0 && (
<<<<<<< HEAD
              <AnimatedSection>
=======
              <div>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
                <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-3">Výbava</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-montserrat text-gray-700 text-sm">
<<<<<<< HEAD
                      <Check className="text-red-600 w-4 h-4 mt-0.5 flex-shrink-0" />
=======
                      <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">✓</span>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
                      {f}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
              </AnimatedSection>
=======
              </div>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
            )}

            {/* Original listing link */}
            {car.link && (
<<<<<<< HEAD
              <div className="mb-6">
                <a
                  href={car.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 font-montserrat transition-colors"
                >
                  🔗 Zobraziť pôvodný inzerát na Autobazar.sk
                </a>
              </div>
            )}

            <RollingButton
              text="← Späť na ponuku"
              href="/ponuka"
              className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-bold font-montserrat transition-colors"
            />
=======
              <a
                href={car.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 font-montserrat transition-colors"
              >
                🔗 Zobraziť pôvodný inzerát na Autobazar.sk
              </a>
            )}

            <Link
              href="/ponuka"
              className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-bold font-montserrat transition-colors"
            >
              ← Späť na ponuku
            </Link>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
          </div>

          {/* ── Sidebar ── */}
          <div>
<<<<<<< HEAD
            <AnimatedSection className="bg-red-600 text-white rounded-xl p-6 sticky top-24">
=======
            <div className="bg-red-600 text-white rounded-xl p-6 sticky top-24">
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
              <h3 className="text-xl font-bold font-jakarta mb-1">Máte záujem?</h3>
              <p className="text-red-100 text-sm font-montserrat mb-5">
                Kontaktujte nás a dohodneme si prehliadku.
              </p>

              <a
                href="tel:+421905241887"
                className="flex items-center gap-3 bg-white text-red-600 rounded-lg px-4 py-3 font-bold font-montserrat hover:bg-red-50 transition-colors mb-3"
              >
                <span className="text-xl">📞</span> +421 905 241 887
              </a>

              <a
                href="mailto:info@autocentrumbb.sk"
                className="flex items-center gap-3 bg-white/10 text-white rounded-lg px-4 py-3 font-montserrat hover:bg-white/20 transition-colors mb-5 text-sm"
              >
                <span className="text-lg">✉️</span> info@autocentrumbb.sk
              </a>

<<<<<<< HEAD
              <RollingButton
                text="Napísať správu"
                href="/kontakt"
                className="block w-full text-center bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-bold font-montserrat transition-colors h-12"
              />
              <div className="mt-5 pt-4 border-t border-red-600 text-red-100 text-xs font-montserrat space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <p>Zvolenská cesta 141, Banská Bystrica</p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <p>Po–Pia: 9:00–17:00 | So: 9:00–13:00</p>
                </div>
              </div>
            </AnimatedSection>
=======
              <Link
                href="/kontakt"
                className="block w-full text-center bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-bold font-montserrat transition-colors"
              >
                Napísať správu
              </Link>

              <div className="mt-5 pt-4 border-t border-red-600 text-red-100 text-xs font-montserrat space-y-1">
                <p>📍 Zvolenská cesta 141, Banská Bystrica</p>
                <p>🕘 Po–Pia: 9:00–17:00 | So: 9:00–13:00</p>
              </div>
            </div>
>>>>>>> 96c9bf39e4c907224a595cab9dca0195bf061d02
          </div>
        </div>
      </div>
    </div>
  );
}
