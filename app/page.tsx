import Image from 'next/image';

import { Nav } from '@/app/components/Nav';
import { Header } from '@/app/components/Header';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Nav />
      <Header />
    </main>
  );
}
