"use client"

import React, { useEffect } from 'react';
import Vibrant from 'node-vibrant';

const YourComponent: React.FC = () => {
  useEffect(() => {
    const extractColor = async () => {
      try {
        const imagePath ='https://wallpaperaccess.com/full/2539405.jpg';
        const palette = await Vibrant.from(imagePath).getPalette();
        if (palette && palette.Vibrant) {
          console.log('Cor mais proeminente:', palette.Vibrant.getHex());
        } else {
          console.error('Nenhuma cor proeminente encontrada na paleta.');
        }
      } catch (error) {
        console.error('Erro ao extrair cor proeminente:', error);
      }
    };

    extractColor();
  }, []);

  return <div>

  </div>;
};

export default YourComponent;
