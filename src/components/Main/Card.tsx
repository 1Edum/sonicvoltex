import React from "react";
import { musicas } from "../../data/Musicas";
import Play from "../play";

interface CardMusicasProps {
  title: string;
}
const idmusicassegeridas = [3, 9, 10, 13, 12, 11];
const musicassugeridas = musicas.filter((musica) =>
  idmusicassegeridas.includes(musica.id)
);

const Card: React.FC<CardMusicasProps> = ({ title }) => {
  return (
    <div className="pt-4">
      <h1 className="text-xl">{title}</h1>
      <div className="grid grid-rows-1 grid-flow-col w-full gap-x-3 overflow-x-auto">
        {musicassugeridas.map((musica) => (
          <div
            key={musica.id}
            className="flex flex-col md:h-56 md:w-full group w-52 hover:bg-white rounded">
            <div className="relative w-full h-3/4">
              <img src={musica.img} alt="" className="w-full h-full rounded" />
              <div className="absolute hidden top-[75%] group-hover:block">
                <Play />
              </div>
            </div>
            <div className="m-2">
              <h4 className="text-xl">{musica.titulo}</h4>
              <p className="text-xs">{musica.artista}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
