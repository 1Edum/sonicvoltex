import React from 'react'

interface CardDescriptionProps{
    description: string;
}

function CardDescription({description}: CardDescriptionProps) {
  return (
    <div className='text-xs'>
        {description}
    </div>
  )
}

export default CardDescription