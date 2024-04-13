'use client'

import Formulario from './Formulario';
import Card from './Card';
import React, { useState } from 'react';


interface CardData {
    id: number;
    nome: string;
  }

export default function Sidebar() {
    
    const [cards, setCards] = useState<CardData[]>([]);

  const adicionarCard = (nome: string) => {
    setCards([...cards, { id: Date.now(), nome }]);
  };

  const editarCard = (id: number, novoNome: string) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, nome: novoNome } : card
      )
    );
  };

  const excluirCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

    
    const [mostrarCaixaDeTexto, setMostrarCaixaDeTexto] = useState(false);
      const [texto, setTexto] = useState('');
    
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
    <div className='p-1 flex flex-col gap-2 h-[90vh]'>
        <h1 className='text-green-400  text-3xl text-center py-6 bg-zinc-100 rounded-md'>
            SonicVoltex
        </h1>
        <div className='py-2 bg-zinc-100 flex flex-col gap-2 px-2'>
            <div className='flex items-center gap-3 group cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 group-hover:text-zinc-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <h2 className='text-xl group-hover:text-zinc-500'>Início</h2>
            </div>
            <div className='flex items-center gap-3 group cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 group-hover:text-zinc-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <h2 className='text-xl group-hover:text-zinc-500'>Buscar</h2>
            </div>
        </div>
        <div className='py-2 bg-zinc-100 flex flex-col gap-2 px-2 h-full'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 group cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 group-hover:text-zinc-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                    </svg>
                    <h2 className='text-xl group-hover:text-zinc-500'>Biblioteca</h2>
                </div>
                <div>
                    <button onClick={abrirCaixaDeTexto}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 hover:text-zinc-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    {mostrarCaixaDeTexto && (
                        <div className="relative">
                            <div className='absolute left-[50vh] px-10 py-3 flex flex-col gap-2 rounded-md bg-zinc-100 '>
                                <p className='text-center text-lg'>Adicionar nova Playlist</p>
                                <Formulario onAdicionar={adicionarCard}/>
                                <button className='bg-green-400 text-white px-2 py-1 rounded-md hover:bg-green-700' onClick={fecharCaixaDeTexto}>Fechar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='overflow-y-auto h-[90%]'>
                <div className="flex flex-col gap-2">
                {cards.map((card) => (
                <Card
                    key={card.id}
                    nome={card.nome}
                    onEditar={() => {
                    const novoNome = prompt('Novo nome:', card.nome);
                    if (novoNome) editarCard(card.id, novoNome);
                    }}
                    onExcluir={() => excluirCard(card.id)}
                />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}
