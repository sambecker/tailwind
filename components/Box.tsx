import { FC } from 'react';
import { joinClasses } from '../utility/css';
import Button from '../components/Button';

interface Props {
  title: string
  cta: string
  onCtaClick: () => void
}

const Box: FC<Props> = ({ title, cta, onCtaClick, children }) => {
  return(
    <div
      className={joinClasses([
        'flex flex-col items-start',
        'px-4 pt-2 pb-4',
        'text-white bg-teal-500  rounded-lg',
        'shadow-lg shadow-teal-500/50',
      ])}
    >
      <div className="mb-8 grow">
        <h3 className="text-2xl font-bold mb-1">
          {title}
        </h3>
        <p className="text-teal-200 leading-6">
          {children}
        </p>
      </div>
      <Button
        className="-ml-0.5"
        onClick={onCtaClick}
      >
        {cta}
      </Button>
    </div>
  );
};

export default Box;
