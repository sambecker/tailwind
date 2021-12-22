import { combineReducers } from 'redux';
import { useSelector } from 'react-redux';
import theme, { ThemeState } from './theme';

export interface AppState {
  theme: ThemeState
}

const reducer = combineReducers({
  theme,
});

export const useAppState = (key: keyof AppState) => {
  const slice = useSelector((state: AppState) => state[key] );
  return slice;
};

// export const useAppState = <T>(selector: (state: AppState) => T): T =>
//   useSelector(selector);

export default reducer;