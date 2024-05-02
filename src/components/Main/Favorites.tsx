import React from "react";
import { musicas } from "@/Dados/Musicas";
import Play from "../Play";

export default function Favorites() {
  const idsSelecionados = [1, 7, 8, 4, 5, 9, 10, 11];
  const musicasSelecionadas = musicas.filter((musica) =>
    idsSelecionados.includes(musica.id)
  );

  return (
    <section className="flex flex-col overflow-x-auto">
      <div className="grid grid-rows-2 grid-flow-col w-[800px] py-2 gap-y-1 md:gap-x-3 gap-x-1  h-1/4 ">
        {musicasSelecionadas.map((musica) => (
          <div key={musica.id} className="grid grid-cols-4 grid-rows-1 bg-white bg-opacity-50 group rounded-sm hover:bg-opacity-100">
            <img src={musica.img} alt="" className="row-span-2 w-full h-full"/>
            <div className="col-span-2 w-full flex flex-col my-auto mx-2">
              <h4 className="text-sm md:text-base">{musica.titulo}</h4>
              <p className="text-xs">{musica.artista}</p>
            </div>
            <div className="row-span-2  hidden group-hover:flex justify-center items-center">
              <Play />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
