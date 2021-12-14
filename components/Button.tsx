import { FC } from 'react';
import { joinClasses } from '../utility/css';

interface Props {
  className?: string
  onClick: () => void
  dark?: boolean
  large?: boolean
}

const ComponentName: FC<Props>= ({
  className,
  onClick,
  dark,
  large,
  children,
}) => {
  return(
    <button
      className={joinClasses([
        className,
        'border-2',
        'font-bold select-none',
        large
          ? 'text-2xl pt-1 pb-2 px-5'
          : 'text-sm pt-0.5 pb-1 px-4',
        'bg-white text-teal-500 rounded-full active:bg-teal-100 active:text-teal-600 active:shadow-lg',
        dark
          ? 'border-teal-500 active:shadow-teal-500/25'
          : 'border-white active:border-teal-100 active:shadow-teal-800/25',
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ComponentName;
