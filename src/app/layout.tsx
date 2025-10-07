'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lowase - Nigeria's Premier VC Education Platform</title>
        <meta name="description" content="Transform into a certified VC consultant. Connect startups with expert consultants. Monetize your VC expertise." />
        <meta name="keywords" content="venture capital, education, consulting, Nigeria, startup, funding" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}