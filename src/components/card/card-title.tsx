import React from 'react'

interface CardTitleProps{
    title: string;
}

function CardTitle({title}: CardTitleProps) {
  return (
    <div className='text-base text-sidebar'>
        {title}
    </div>
  )
}

export default CardTitle