import React from "react";
import { musicas } from "@/Dados/Musicas";

export default function Favorites() {
  const idsSelecionados = [1, 7, 8, 4, 5, 9, 10, 11];
  const musicasSelecionadas = musicas.filter((musica) =>
    idsSelecionados.includes(musica.id)
  );

  return (
    <section className="flex flex-col">
      <div className="grid grid-rows-2 grid-flow-col gap-y-2 gap-x-4">
        {musicasSelecionadas.map((musica) => (
          <div key={musica.id} className="bg-white bg-opacity-50 px-2 py-1 w-full rounded-sm hover:bg-opacity-100">
            <h4>{musica.titulo}</h4>
            <p className="text-xs">{musica.artista}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
