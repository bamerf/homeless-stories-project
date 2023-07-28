import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Nav } from '@/app/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Homeless Stories Project',
  description: 'Blog and podcast about homelessness in the United States',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
