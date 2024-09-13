"use client";

import ListMusicsProps from "@/components/main/list-musics";
import Favorites from "@/components/main/favorites";
import SectionTop from "@/components/main/sectionTop";

import { useState } from "react";


const Home = () => {
  const [state, setState] = useState('light');
  return (
    <section className={"flex-1 md:w-4/5 md:h-[90vh] w-screen bg-gradient-to-t " + `${state === 'dark' ? 'from-zinc-600' : 'from-zinc-100'} from-70% to-green-400`}>
      <section className="overflow-y-auto h-[90vh] flex flex-col px-3 z-0">
      <SectionTop state={state} setState={setState} />
        <Favorites />
        <ListMusicsProps title="As melhores" />
        <ListMusicsProps title="As melhores" />
        <p>{state}</p>
      </section>
    </section>
  );
};
export default Home;
