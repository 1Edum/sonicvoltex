import { Bell, Settings, UserRound } from 'lucide-react';
import React from 'react'

interface SectionTopProps{
    state : string
    setState: (newState: string) => void;
}

export default function SectionTop( {state, setState }: SectionTopProps) {
  return (
    <header className={"flex items-center justify-end gap-x-3 px-3 py-6 h-[84px] " }>
        <div className='icons'>
        <Settings />
        </div>
        <div className='icons'>
            <Bell />
        </div>
        <div className='icons'>
            <UserRound />
        </div>
            <button onClick={() => setState(state === 'dark' ? 'light' : 'dark')}>
                Change State
            </button>
    </header>
  )
}
