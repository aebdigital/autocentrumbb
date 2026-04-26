import type { Metadata } from 'next';
import { getCars } from '@/lib/cars';
import PonukaClient from '@/components/PonukaClient';

export const metadata: Metadata = {
  title: 'Ponuka vozidiel | Autocentrum BB – Banská Bystrica',
  description: 'Prezrite si aktuálnu ponuku ojazdených vozidiel v Autocentrum BB Banská Bystrica. Filtrujte podľa ceny, roku, paliva a ďalšieho.',
};

export const revalidate = 300;

export default async function PonukaPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta">PONUKA VOZIDIEL</h1>
          <p className="text-gray-400 mt-2 font-montserrat">
            Autocentrum BB – Banská Bystrica · {cars.length} vozidiel
          </p>
        </div>
      </div>

      {cars.length === 0 ? (
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-2xl font-jakarta text-gray-500 mb-2">Práve aktualizujeme ponuku</p>
          <p className="text-gray-400 font-montserrat">Skúste to prosím neskôr.</p>
        </div>
      ) : (
        <PonukaClient cars={cars} />
      )}
    </div>
  );
}
