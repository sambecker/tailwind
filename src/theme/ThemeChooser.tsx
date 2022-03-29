import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { storeColorLocally, TAILWIND_COLORS } from '.';
import { useAppState } from '../state';
import { joinClasses } from '../utility/css';
import { themeActions } from './state';

const ThemeChooser: FC = () => {
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
          onClick={() => {
            dispatch(themeActions.setColor(color));
            storeColorLocally(color);
          }}
        >
          {color}
        </button>)}
    </div>
  );
};

export default ThemeChooser;
