import { FC } from 'react';
import { joinClasses } from '../utility/css';

interface Props {
  className?: string
  onClick: () => void
  isDark?: boolean
}

const ComponentName: FC<Props>= ({ className, onClick, isDark, children }) => {
  return(
    <button
      className={joinClasses([
        className,
        'pt-0.5 pb-1 px-4 -ml-0.5 border-2',
        'text-sm font-bold select-none',
        'bg-white text-teal-500 rounded-full active:bg-teal-100 active:text-teal-600 active:shadow-lg',
        isDark
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
