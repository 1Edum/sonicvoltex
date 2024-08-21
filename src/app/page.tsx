"use client";

import Card from "@/components/main/card";
import Favorites from "@/components/main/favorites";
import SectionTop from "@/components/main/sectionTop";

import { useState } from "react";

interface PageProps {
  title: string;
  imageUrl: string;
}

const Home: React.FC<PageProps> = () => {
  const [state, setState] = useState('light');
  return (
    <main className={"flex-1  md:w-4/5 md:h-[90vh] w-screen bg-gradient-to-tr " + `${state === 'dark' ? 'from-zinc-900' : 'from-zinc-100'} from-40% to-green-400`}>
      <SectionTop state={state} setState={setState} />
      <section className="overflow-y-auto h-[600px]">
        <Favorites />
        <Card title="As melhores" />
        <Card title="As melhores" />
        <p>{state}</p>
      </section>
    </main>
  );
};
export default Home;
