import React from 'react'

export default function Sidebar() {
  return (
    <div className='p-1 flex flex-col gap-2'>
        <h1 className='text-green-400  text-3xl text-center py-6 bg-zinc-100 rounded-md'>
            SonicVoltex
        </h1>
        <div className='py-2 bg-zinc-100 flex flex-col gap-2'>
            <div className='flex items-center w-full gap-3 group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 group-hover:text-zinc-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <h2 className='text-xl group-hover:text-zinc-500'>Início</h2>
            </div>
            <div className='flex items-center gap-3 group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 group-hover:text-zinc-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <h2 className='text-xl group-hover:text-zinc-500'>Buscar</h2>
            </div>

        </div>
    </div>
  )
}
