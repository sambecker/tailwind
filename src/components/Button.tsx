import { FC, ReactNode } from 'react';
import { TailwindColor } from '../theme';
import { joinClasses } from '../utility/css';

interface Props {
  className?: string
  onClick: () => void
  color?: TailwindColor
  dark?: boolean
  large?: boolean
  children?: ReactNode
}

const ComponentName: FC<Props>= ({
  className,
  onClick,
  color = 'teal',
  dark,
  large,
  children,
}) => {
  const classesForColor = () => {
    switch (color) {
    case 'grey':
      return joinClasses([
        'text-slate-500 active:bg-slate-100 active:text-slate-600',
        dark
          ? 'border-slate-500 active:shadow-slate-500/25'
          : 'border-white active:border-slate-100 active:shadow-slate-800/25',
      ]);
    case 'teal':
      return joinClasses([
        'text-teal-500 active:bg-teal-100 active:text-teal-600',
        dark
          ? 'border-teal-500 active:shadow-teal-500/25'
          : 'border-white active:border-teal-100 active:shadow-teal-800/25',
      ]);
    case 'indigo':
      return joinClasses([
        'text-indigo-500 active:bg-indigo-100 active:text-indigo-600',
        dark
          ? 'border-indigo-500 active:shadow-indigo-500/25'
          : 'border-white active:border-indigo-100 active:shadow-indigo-800/25',
      ]);
    case 'orange':
      return joinClasses([
        'text-orange-500 active:bg-orange-200 active:text-orange-600',
        dark
          ? 'border-orange-500 active:shadow-orange-500/25'
          : 'border-white active:border-orange-100 active:shadow-orange-800/25',
      ]);
    }
  };

  return(
    <button
      className={joinClasses([
        className,
        'border-2',
        'font-bold select-none',
        large
          ? 'text-2xl pt-1 pb-2 px-5'
          : 'text-sm pt-0.5 pb-1 px-4',
        'bg-white rounded-full active:shadow-lg',
        classesForColor(),
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ComponentName;
