import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from 'classnames';

const CardRootVariants = cva(
  'flex w-full rounded ',
  {
    variants: {
      variant: {
        default:'justify-between items-center hover:bg-white rounded-md p-2 group dark:hover:bg-zinc-800',
        favorites: 'justify-between items-center hover:bg-white rounded-md  group dark:hover:bg-zinc-800 bg-zinc-100 dark:bg-zinc-900 pr-3',
        musics: 'flex-col-reverse justify-center group  hover:bg-white dark:hover:bg-zinc-800 object-cover p-4',
      },
    },
  }
);

interface CardRootProps extends VariantProps<typeof CardRootVariants> {
  children: ReactNode;
  className?: string;
}

function CardRoot({ children, variant, className }: CardRootProps) {
  return <div className={cn(CardRootVariants({ variant }), className)}>{children}</div>;
}

export default CardRoot;
