import React from 'react'

interface CardProps {
    title: string;
  }

  const Card: React.FC<CardProps> = ({ title }) => {
    return (
      <div>
        <h1>{title}</h1>
        
      </div>
    );
  }
  
  export default Card;