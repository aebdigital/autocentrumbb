import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import CookieConsent from '@/components/CookieConsent';

const SITE_URL = 'https://www.autocentrumbb.sk';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Autocentrum BB – Autobazár Banská Bystrica',
    template: '%s | Autocentrum BB',
  },
  description: 'Viac ako 10 rokov pomáhame pri kúpe, predaji, dovoze a prenájme auta. Spoľahlivý autobazár v Banskej Bystrici – Zvolenská cesta 141.',
  keywords: ['autobazár', 'Banská Bystrica', 'ojazdenéautá', 'predaj áut', 'výkup áut', 'leasing', 'dovoz áut', 'Autocentrum BB'],
  authors: [{ name: 'Autocentrumbb s.r.o.' }],
  creator: 'Autocentrumbb s.r.o.',
  publisher: 'Autocentrumbb s.r.o.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: SITE_URL,
    siteName: 'Autocentrum BB',
    title: 'Autocentrum BB – Autobazár Banská Bystrica',
    description: 'Viac ako 10 rokov pomáhame pri kúpe, predaji, dovoze a prenájme auta. Spoľahlivý autobazár v Banskej Bystrici.',
    images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: 'Autocentrum BB – Autobazár Banská Bystrica' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autocentrum BB – Autobazár Banská Bystrica',
    description: 'Viac ako 10 rokov pomáhame pri kúpe, predaji, dovoze a prenájme auta.',
    images: ['/hero.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </LenisProvider>
      </body>
    </html>
  );
}
