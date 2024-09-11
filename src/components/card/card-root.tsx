import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from 'classnames'; // Certifique-se de instalar a biblioteca `classnames` antes de usar

const CardRootVariants = cva(
  'flex w-full rounded ',
  {
    variants: {
      variant: {
        default:'justify-between items-center hover:bg-zinc-300 rounded-md p-2 dark:hover:bg-zinc-800',
        teste: 'flex-col-reverse justify-center group  hover:bg-white dark:hover:bg-zinc-800 object-cover p-4',
      },
    },
  }
);

interface CardRootProps extends VariantProps<typeof CardRootVariants> {
  children: ReactNode;
  key?: number;
}

function CardRoot({ children, variant }: CardRootProps) {
  return <div className={cn(CardRootVariants({ variant }))}>{children}</div>;
}

export default CardRoot;
