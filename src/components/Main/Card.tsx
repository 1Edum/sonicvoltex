import React from "react";
import { musicas } from "@/Dados/Musicas";
import Play from "../Play";

interface CardMusicasProps {
    title: string;
}
const idmusicassegeridas = [3, 9, 10, 13, 12, 11];
const musicassugeridas = musicas.filter((musica) =>
  idmusicassegeridas.includes(musica.id)
);


  

const Card: React.FC<CardMusicasProps> = ({ title }) => {
  return (
    <div className="pt-9">
      <h1 className="ml-5">{title}</h1>
      <div className="grid grid-rows-1 grid-flow-col px-[10px]">
      {musicassugeridas.map((musica) => (
        <div key={musica.id} className="w-[250px] flex flex-col group p-2 hover:bg-white rounded">
          <div className="relative">
            <img src={musica.img} alt="" className="w-full mr-2 rounded"/>
            <div className="absolute top-3/4 left-3/4 hidden group-hover:block">
              <Play />
            </div>
          </div>
            <div className="mt-2">
            <h4>{musica.titulo}</h4>
            <p className="text-xs">{musica.artista}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Card;
