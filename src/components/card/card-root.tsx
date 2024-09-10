import React, { ReactNode } from 'react'

interface CardRootProps {
    children: ReactNode,
    key?: number
}

function CardRoot({children}: CardRootProps) {
  return (
    <div className='w-full flex justify-between items-center hover:bg-zinc-300 rounded-md p-2 dark:hover:bg-zinc-800'>
        {children}
    </div>
  )
}

export default CardRoot