import React, { ReactNode } from 'react'

interface CardActionsProps{
    children: ReactNode,
}

export default function CardActions({children}: CardActionsProps) {
  return (
    <div>
        {children}
    </div>
  )
}
