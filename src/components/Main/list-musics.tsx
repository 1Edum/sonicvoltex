import React from "react";
import { musicas } from "../../data/Musicas";
import CardRoot from "../card/card-root";
import CardTitle from "../card/card-title";
import Image from "next/image";
import CardDescription from "../card/card-description";
import PlayIcon from "../play";

interface ListMusicsProps {
  title: string;
}
const idmusicassegeridas = [3, 9, 10, 13, 12, 11];
const musicassugeridas = musicas.filter((musica) =>
  idmusicassegeridas.includes(musica.id)
);

const ListMusics: React.FC<ListMusicsProps> = ({ title }) => {
  return (
    <div className="p-4 bg-zinc-100 dark:bg-zinc-900">
      <h1 className="text-xl text-zinc-400">{title}</h1>
      <div className="grid grid-rows-1 grid-flow-col gap-x-1 object-cover">
        {musicassugeridas.map((musica) => (
          <CardRoot key={musica.id} variant={"musics"}>
            <div>
              <CardTitle title={musica.titulo} />
              <CardDescription description={musica.artista} />
            </div>
            <div className="relative">
              <Image
                src={musica.img}
                alt={musica.titulo}
                className="w-60 h-60 rounded"
                height={100}
                width={100}
              />
              <div className="absolute hidden top-[80%] left-[80%]  group-hover:block">
                <PlayIcon />
              </div>
            </div>
          </CardRoot>
        ))}
      </div>
    </div>
  );
};

export default ListMusics;
