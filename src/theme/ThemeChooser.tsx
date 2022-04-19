import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { storeColorLocally, TailwindColor, TAILWIND_COLORS } from '.';
import { joinClasses } from '../utility/css';
import { themeActions } from './state';
import useTheme from './useTheme';

interface Props {
  initialColor?: TailwindColor
}

const ThemeChooser: FC<Props> = ({ initialColor }) => {
  const { selectedColor } = useTheme(initialColor);

  const dispatch = useDispatch();

  return(
    <div className="space-x-6">
      {TAILWIND_COLORS.map(color =>
        <button
          key={color}
          className={joinClasses([
            'capitalize',
            'active:opacity-50',
            'select-none',
            color === selectedColor && 'font-bold border-b-2 border-black',
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
