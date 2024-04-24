import React from "react";
import { musicas } from "@/Dados/Musicas";
import Play from "../Play";

export default function Favorites() {
  const idsSelecionados = [1, 7, 8, 4, 5, 9, 10, 11];
  const musicasSelecionadas = musicas.filter((musica) =>
    idsSelecionados.includes(musica.id)
  );

  return (
    <section className="flex flex-col">
      <div className="grid grid-rows-2 grid-flow-col gap-y-2 gap-x-4">
        {musicasSelecionadas.map((musica) => (
          <div key={musica.id} className="flex items-center bg-white bg-opacity-50 w-[360px] group rounded-sm hover:bg-opacity-100">
            <img src={musica.img} alt="" className="w-16 mr-2"/>
            <div className="w-2/3">
            <h4>{musica.titulo}</h4>
            <p className="text-xs">{musica.artista}</p>
            </div>
            <div className="justify-self-end hidden group-hover:block">
              <Play />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
