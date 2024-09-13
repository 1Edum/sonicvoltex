import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from 'classnames';

const CardRootVariants = cva(
  'flex w-full rounded ',
  {
    variants: {
      variant: {
        default:'justify-between items-center hover:bg-white rounded-md p-2 group dark:hover:bg-zinc-800',
        favorites: 'justify-between items-center hover:bg-white rounded-md  group dark:hover:bg-zinc-800 bg-zinc-200 dark:bg-zinc-700',
        musics: 'flex-col-reverse justify-center group  hover:bg-white dark:hover:bg-zinc-800 object-cover p-4 ',
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
