"use client";

import ListMusicsProps from "@/components/main/list-musics";
import Favorites from "@/components/main/favorites";
import SectionTop from "@/components/main/sectionTop";
import { useState } from "react";
import ThemeProvider from "@/components/ThemeContext";

const Home = () => {
  const [state, setState] = useState('light');
  return (

    <section className={"flex-1 md:w-4/5 md:h-[90vh] w-screen dark:bg-zinc-900 "}>
      <section className="overflow-y-auto h-[90vh]  z-0">
        <div className="flex flex-col bg-gradient-to-b from-green-500 dark:to-zinc-900 to-zinc-100">
          <SectionTop state={state} setState={setState} />
          <Favorites />
        </div>
        <ThemeProvider>
        <ListMusicsProps title="As melhores" />
        <ListMusicsProps title="As melhores" />
        </ThemeProvider>
      </section>
    </section>

  );
};
export default Home;
