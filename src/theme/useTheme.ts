import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TailwindColor } from '.';
import { useAppState } from '../state';
import { themeActions } from './state';

const useTheme = (
  initialColor?: TailwindColor,
  shouldStoreInitialState?: boolean, // Only set to 'true' once in application
) => {
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const dispatch = useDispatch();

  const { selectedColor } = useAppState('theme');

  useEffect(() => {
    if (!hasLoadedOnce) {
      setHasLoadedOnce(true);
      if (initialColor && shouldStoreInitialState) {
        dispatch(themeActions.setColor(initialColor));
      }
    }
  }, [hasLoadedOnce, initialColor, shouldStoreInitialState, dispatch]);

  return {
    selectedColor: !hasLoadedOnce && initialColor
      ? initialColor
      : selectedColor,
  };
};

export default useTheme;
