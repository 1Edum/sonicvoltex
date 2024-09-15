"use client";

import React, { useState } from "react";
import Formulario from "./formulario";
import { Search, Home, Album, Plus, Pencil, Trash } from "lucide-react";
import CardRoot from "../card/card-root";
import CardTitle from "../card/card-title";
import CardActions from "../card/card-actions";
import CardAction from "../card/card-action";

interface CardData {
  id: number;
  nome: string;
}

function Option() {
  let options = [
    { id: 1, title: "Início", icon: <Home /> },
    { id: 2, title: "Buscar", icon: <Search /> },
  ];

  return (
    <div className="md:py-2 bg-zinc-100 dark:bg-primary_dark flex md:flex-col md:gap-2 px-2 flex-row justify-between">
      {options.map((option) => (
        <div className="container-sidebar group" key={option.id}>
          <i className="icon-sidebar">{option.icon}</i>
          <h2 className="text-sidebar text-xl">{option.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default function Sidebar() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [mostrarCaixaDeTexto, setMostrarCaixaDeTexto] = useState(false);
  const [cartaoEditado, setCartaoEditado] = useState<CardData | null>(null); // Estado para armazenar o cartão em edição

  const adicionarCard = (nome: string) => {
    setCards([...cards, { id: Date.now(), nome }]);
  };

  const excluirCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const abrirCaixaDeTexto = (card?: CardData) => {
    setCartaoEditado(card || null); // Define o cartão que está sendo editado, ou nenhum se for adicionar
    setMostrarCaixaDeTexto(true);
  };

  const fecharCaixaDeTexto = () => {
    setMostrarCaixaDeTexto(false);
    setCartaoEditado(null); // Limpa o estado de edição
  };

  const atualizarCard = (dadosAtualizados: CardData) => {
    // Função que atualiza os dados do cartão com base nos dados fornecidos
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === dadosAtualizados.id ? dadosAtualizados : card
      )
    );
    fecharCaixaDeTexto(); // Fecha a caixa de texto após a edição
  };

  return (
    <div className="px-1 flex flex-col gap-2 md:h-[90vh] dark:bg-black">
      <h1 className="text-green-400 text-3xl text-center py-6 bg-zinc-100 dark:bg-primary_dark rounded-md">
        SonicVoltex
      </h1>
      <Option />
      <div className="py-2 bg-zinc-100 flex flex-col gap-2 px-2 md:h-full z-0 dark:bg-primary_dark">
        <div className="flex items-center justify-between">
          <div className="container-sidebar group">
            <Album className="icon-sidebar" />
            <h2 className="text-sidebar text-xl">Biblioteca</h2>
          </div>
          <div>
            <button onClick={() => abrirCaixaDeTexto()}>
              <Plus className="icon-sidebar" />
            </button>
            {mostrarCaixaDeTexto && (
              <div className="relative z-50 flex items-start justify-end">
                <div className="absolute z-50 md:px-10  py-3 flex flex-col gap-2 rounded-md bg-zinc-100 dark:bg-black border-green-400 border-2">
                  <p className="text-sidebar text-center">
                    {cartaoEditado
                      ? `Editar Playlist: ${cartaoEditado.nome}`
                      : "Adicionar nova Playlist"}
                  </p>
                  <Formulario
                    card={cartaoEditado}
                    onAdicionar={(nome) =>
                      cartaoEditado
                        ? atualizarCard({ ...cartaoEditado, nome })
                        : adicionarCard(nome)
                    }
                  />
                  <button
                    className="bg-green-400 text-white px-2 py-1 rounded-md hover:bg-green-700"
                    onClick={fecharCaixaDeTexto}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="overflow-y-auto">
          <div className="md:flex flex-col gap-2 grid grid-cols-2">
            {cards.map((card) => (
              <CardRoot key={card.id} variant={"default"}>
                <CardTitle title={card.nome} />
                <CardActions>
                  <CardAction
                    icon={Pencil}
                    onClick={() => abrirCaixaDeTexto(card)}
                    className="text-sidebar"
                  />
                  <CardAction
                    icon={Trash}
                    onClick={() => excluirCard(card.id)}
                    className="text-sidebar"
                  />
                </CardActions>
              </CardRoot>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
