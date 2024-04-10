import React, { useState } from 'react';

interface FormularioProps {
  onAdicionar: (nome: string) => void;
}

const Formulario: React.FC<FormularioProps> = ({ onAdicionar }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nome.trim()) return;
    onAdicionar(nome);
    setNome('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-between gap-4'>
      <input
        type="text"
        className='border-2 px-2 py-1 focus:outline-none'
        placeholder="Nome da Playlist"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit" className='bg-green-400 text-white px-2 py-1 rounded-md hover:bg-green-700'>Adicionar</button>
    </form>
  );
};

export default Formulario;
