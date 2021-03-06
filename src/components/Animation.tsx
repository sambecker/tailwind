import { FC } from 'react';
import { joinClasses } from '../utility/css';
import useTheme from '../theme/useTheme';
import { TailwindColor } from '../theme';

interface Props {
  initialColor?: TailwindColor
}

const WIDTH   = 'w-32';
const HEIGHT  = 'h-32';

const Animation: FC<Props> = ({ initialColor }) => {
  const { selectedColor } = useTheme(initialColor);

  const backgroundColor = () => {
    switch (selectedColor) {
    case 'grey':
      return 'bg-slate-500';
    case 'teal':
      return 'bg-teal-500';
    case 'indigo':
      return 'bg-indigo-500';
    case 'orange':
      return 'bg-orange-500';
    }
  };

  const hoverForColor = () => {
    switch (selectedColor) {
    case 'grey':
      return 'group-hover:bg-slate-900';
    case 'teal':
      return 'group-hover:bg-teal-900';
    case 'indigo':
      return 'group-hover:bg-indigo-900';
    case 'orange':
      return 'group-hover:bg-orange-900';
    }
  };

  return(
    <div className={joinClasses([
      'group',
      'relative',
      HEIGHT,
      'mb-12',
    ])}>
      <div className={joinClasses([
        'absolute',
        'flex items-center justify-center',
        'text-white',
        backgroundColor(),
        hoverForColor(),
        `${WIDTH} ${HEIGHT}`,
        'rounded-2xl',
        'left-0 group-hover:translate-x-[10rem]',
        'transition-all duration-500',
        'select-none',
      ])}>
        <div className={joinClasses([
          'relative -top-[0.1rem]',
        ])}>
          Hover
        </div>
      </div>
    </div>
  );
};

export default Animation;
