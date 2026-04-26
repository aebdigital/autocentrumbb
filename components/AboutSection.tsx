'use client';

import { useEffect, useRef } from 'react';
import { Car, Users, Trophy } from 'lucide-react';

export default function AboutSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      // Only animate when visible
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrolled = window.scrollY - (bgRef.current.parentElement?.offsetTop || 0);
        bgRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden py-20">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[150%] -top-[25%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url("/about.jpg")' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-red-500 font-bold font-jakarta text-sm uppercase tracking-widest mb-2">AUTOCENTRUMBB</p>
            <h2 className="text-5xl md:text-6xl font-bold font-jakarta text-white">O nás</h2>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <p className="text-gray-700 font-montserrat leading-relaxed text-lg">
                Sme AutocentrumBB – miestny autobazár s dlhoročnými skúsenosťami a osobným prístupom. Na trhu pôsobíme už viac než 10 rokov a za ten čas sme pomohli stovkám zákazníkov nájsť ideálne vozidlo. Zabezpečujeme nielen predaj a výkup vozidiel, ale aj ich dovoz zo zahraničia, prenájom či administratívu spojenou s prepisom vozidla.
              </p>
            </div>
            <div className="lg:w-1/2 bg-gray-50 flex flex-col sm:flex-row border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="flex-1 p-8 text-center border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col items-center justify-center gap-4">
                <Car className="text-red-600 w-12 h-12" />
                <div>
                  <p className="text-3xl font-bold font-jakarta text-gray-900">1200</p>
                  <p className="text-sm font-montserrat text-gray-500 uppercase tracking-tight">Predaných Vozidiel</p>
                </div>
              </div>
              <div className="flex-1 p-8 text-center border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col items-center justify-center gap-4">
                <Users className="text-red-600 w-12 h-12" />
                <div>
                  <p className="text-3xl font-bold font-jakarta text-gray-900">1200</p>
                  <p className="text-sm font-montserrat text-gray-500 uppercase tracking-tight">Spokojných zákazníkov</p>
                </div>
              </div>
              <div className="flex-1 p-8 text-center flex flex-col items-center justify-center gap-4">
                <Trophy className="text-red-600 w-12 h-12" />
                <div>
                  <p className="text-3xl font-bold font-jakarta text-gray-900">10</p>
                  <p className="text-sm font-montserrat text-gray-500 uppercase tracking-tight">rokov skúseností</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
