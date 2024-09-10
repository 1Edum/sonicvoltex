

import { useState } from "react";

export interface CardData {
  id: number;
  nome: string;

}

interface FormularioProps {
  card: CardData | null;
  onAdicionar: (nome: string) => void;
}

const Formulario: React.FC<FormularioProps> = ({ card, onAdicionar }) => {
  const [nome, setNome] = useState(card ? card.nome : ""); // Preenche o nome se estiver editando um cartão

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome.trim()) {
      onAdicionar(nome); // Chama a função de adição ou edição
      setNome("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome da playlist"
        className="border-2 border-green-400 rounded-md p-2 dark:bg-black text-sidebar"
      />
      <button type="submit" className="bg-green-400 text-white px-2 py-1 rounded-md hover:bg-green-700">
        {card ? "Salvar Alterações" : "Adicionar Playlist"}
      </button>
    </form>
  );
};

export default Formulario;
