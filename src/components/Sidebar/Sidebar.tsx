"use client";

import React, { useState } from "react";
import Formulario from "./formulario";
import Card from "./card";
import { Search, Home, Album, Plus } from "lucide-react";

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

  const adicionarCard = (nome: string) => {
    setCards([...cards, { id: Date.now(), nome }]);
  };

  const editarCard = (id: number, novoNome: string) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, nome: novoNome } : card))
    );
  };

  const excluirCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const [mostrarCaixaDeTexto, setMostrarCaixaDeTexto] = useState(false);
  const [texto, setTexto] = useState("");

  const abrirCaixaDeTexto = () => {
    setMostrarCaixaDeTexto(true);
  };

  const fecharCaixaDeTexto = () => {
    setMostrarCaixaDeTexto(false);
  };

  const handleChangeTexto = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
  };
  return (
    <div className="p-1 flex flex-col gap-2 md:h-[90vh] dark:bg-black">
      <h1 className="text-green-400 text-3xl text-center py-6 bg-zinc-100 dark:bg-primary_dark rounded-md">
        SonicVoltex
      </h1>
      <Option />
      <div className="py-2 bg-zinc-100 flex flex-col gap-2 px-2 md:h-full  z-0 dark:bg-primary_dark">
        <div className="flex items-center justify-between">
          <div className="container-sidebar group">
            <Album className="icon-sidebar"/>
            <h2 className="text-sidebar text-xl">Biblioteca</h2>
          </div>
          <div>
            <button onClick={abrirCaixaDeTexto}>
              <Plus className="icon-sidebar"/>
            </button>
            {mostrarCaixaDeTexto && (
              <div className="relative z-50 flex items-start justify-end">
                <div className="absolute z-50  md:px-10 lg:left-[50vh] py-3 flex flex-col gap-2 rounded-md bg-zinc-100 border-green-400 border-2">
                  <p className="text-center text-lg">Adicionar nova Playlist</p>
                  <Formulario onAdicionar={adicionarCard} />
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
              <Card
                key={card.id}
                nome={card.nome}
                onEditar={() => {
                  const novoNome = prompt("Novo nome:", card.nome);
                  if (novoNome) editarCard(card.id, novoNome);
                }}
                onExcluir={() => excluirCard(card.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
