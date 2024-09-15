import React from "react";
import { musicas } from "../../data/Musicas";
import CardRoot from "../card/card-root";
import Image from "next/image";
import CardTitle from "../card/card-title";
import CardDescription from "../card/card-description";
import PlayIcon from "../play";

export default function Favorites() {
  const idsSelecionados = [1, 7, 8, 4, 5, 9, 10, 11];
  const musicasSelecionadas = musicas.filter((musica) =>
    idsSelecionados.includes(musica.id)
  );

  return (
    <div className="p-4">
    <h1 className="text-xl text-zinc-50 ">Adicionado ao Favoritos</h1>
    <section className="grid grid-rows-2 grid-flow-col gap-3 h-1/4 p-4">
      {musicasSelecionadas.map((musica) => (
        <CardRoot key={musica.id} variant={"favorites"}>
          <div className="flex">
          <Image
            src={musica.img}
            alt={musica.titulo}
            className="w-20 h-20 rounded"
            height={100}
            width={100}
          />
          <div  className="flex flex-col justify-center pl-5">

            <CardTitle title={musica.titulo}/>
            <CardDescription description={musica.artista}/>
          </div>
          </div>
          
            <div className="row-span-2 opacity-0 group-hover:opacity-100 justify-center items-center">
                <PlayIcon />
              </div>
          
        </CardRoot>
      ))}
      </section>
    </div>
  );
}
