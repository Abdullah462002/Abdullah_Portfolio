'use client';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import { FloatingNav } from '@/components/ui/FloatingNavBar';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
