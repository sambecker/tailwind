import { FC } from 'react';
import { joinClasses } from '../utility/css';
import Button from './Button';
import { TailwindColor } from '../theme';

interface Props {
  title: string
  cta: string
  onCtaClick: () => void
  color?: TailwindColor
}

const Box: FC<Props> = ({
  title,
  cta,
  onCtaClick,
  color = 'teal',
  children,
}) => {
  const classesForBox = () => {
    switch (color) {
    case 'teal':
      return 'bg-teal-500 shadow-teal-500/50';
    case 'indigo':
      return 'bg-indigo-500 shadow-indigo-500/50';
    case 'orange':
      return 'bg-orange-500 shadow-orange-500/50';
    case 'grey':
      return 'bg-slate-500 shadow-slate-500/50';
    }
  };

  const classesForText = () => {
    switch (color) {
    case 'teal':
      return 'text-teal-200';
    case 'indigo':
      return 'text-indigo-200';
    case 'orange':
      return 'text-orange-200';
    case 'grey':
      return 'text-slate-200';
    }
  };

  return(
    <div
      className={joinClasses([
        'flex flex-col items-start',
        'px-4 pt-2 pb-4',
        'text-white rounded-lg shadow-lg',
        classesForBox(),
      ])}
    >
      <div className="mb-8 grow">
        <h3 className="text-2xl font-bold mb-1">
          {title}
        </h3>
        <p
          className={joinClasses([
            'leading-6',
            classesForText(),
          ])}
        >
          {children}
        </p>
      </div>
      <Button
        className="-ml-0.5"
        onClick={onCtaClick}
        color={color}
      >
        {cta}
      </Button>
    </div>
  );
};

export default Box;
