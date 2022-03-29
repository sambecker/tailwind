import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TAILWIND_COLORS } from '.';
import { useAppState } from '../state';
import { joinClasses } from '../utility/css';
import { themeActions } from './state';

interface Props {}

const ThemeChooser: FC<Props> = () => {
  const { selectedColor } = useAppState('theme');

  const dispatch = useDispatch();

  return(
    <div className="space-x-6">
      {TAILWIND_COLORS.map(color =>
        <button
          key={color}
          className={joinClasses([
            'capitalize',
            'active:font-bold',
            color === selectedColor && 'font-bold',
          ])}
          onClick={() => dispatch(themeActions.setColor(color))}
        >
          {color}
        </button>)}
    </div>
  );
};

export default ThemeChooser;
