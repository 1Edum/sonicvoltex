import React from "react";

import { Trash2, Pencil } from "lucide-react";

interface CardProps {
  nome: string;
  onEditar: () => void;
  onExcluir: () => void;
}

const Card: React.FC<CardProps> = ({ nome, onEditar, onExcluir }) => {
  return (
    <div className="w-full flex justify-between items-center hover:bg-zinc-300 rounded-md p-2 dark:hover:bg-zinc-800">
      <div className="flex items-center">
        <div className="bg-green-400 rounded md:w-10 md:h-10 w-5 h-5 mr-3"></div>
        <p className="text-sm text-sidebar ">{nome}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onEditar}>
          <Pencil className="icon-sidebar"/>
        </button>
        <button onClick={onExcluir}>
          <Trash2 className="icon-sidebar"/>
        </button>
      </div>
    </div>
  );
};

export default Card;
