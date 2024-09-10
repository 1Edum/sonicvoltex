import React, { ButtonHTMLAttributes, ElementType } from 'react'

interface CardActionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: ElementType,
}


function CardAction({icon: Icon, ...rest}: CardActionProps) {
  return (
    <button {...rest}>
        <Icon />
    </button>
  )
}

export default CardAction