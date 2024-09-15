import React from "react";
import { musicas } from "../../data/Musicas";
import Image from "next/image";
import CardTitle from "../card/card-title";
import CardDescription from "../card/card-description";
import CardRoot from "../card/card-root";
import {
  AudioLines,
  MonitorDown,
  Pause,
  Shuffle,
  SkipBack,
  SkipForward,
  Speaker,
  SquarePlay,
  Volume1,
} from "lucide-react";

function Footer() {
  const idsSelecionados = [1];
  const musicasSelecionadas = musicas.filter((musica) =>
    idsSelecionados.includes(musica.id)
  );
  return (
    <footer className="flex justify-between items-center w-full h-[10vh] px-4 dark:bg-zinc-950 bg-zinc-100">
      <div className="w-1/3 flex justify-center items-center">
        {musicasSelecionadas.map((musica) => (
          <CardRoot key={musica.id} variant={"favorites"} className="dark:bg-zinc-950">
            <div className="flex">
              <Image
                src={musica.img}
                alt={musica.titulo}
                className="w-20 h-20 rounded"
                height={100}
                width={100}
              />
              <div className="flex flex-col justify-center pl-5">
                <CardTitle title={musica.titulo} />
                <CardDescription description={musica.artista} />
              </div>
            </div>
          </CardRoot>
        ))}
      </div>
      <div className="flex w-1/3 justify-center items-center gap-x-3">
        <Shuffle className="icons"/>
        <SkipBack className="icons"/>
        <Pause className="icons"/>
        <SkipForward className="icons"/>
        <AudioLines className="icons"/>
      </div>
      <div className="flex w-1/3 justify-end items-center gap-x-3">
        <Speaker className="icons"/>
        <SquarePlay className="icons"/>
        <Volume1 className="icons"/>
        <div className="w-16 h-2 rounded-md relative dark:bg-zinc-900 bg-zinc-400">
            <div className="absolute w-3 h-2 rounded-md bg-zinc-200"/>
        </div>
        <MonitorDown className="icons"/>
      </div>
    </footer>
  );
}

export default Footer;
