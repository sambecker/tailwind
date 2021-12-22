import { FC } from 'react';
import { useAppState } from '../state';
import { joinClasses } from '../utility/css';
import useElementClasses from '../utility/useBodyClasses';

interface Props {}

const App: FC<Props> = ({ children }) => {
  const { color } = useAppState('theme');

  const backgroundForColor = () => {
    switch (color) {
    case 'teal':
      return 'bg-teal-50';
    case 'indigo':
      return 'bg-indigo-50';
    }
  };

  useElementClasses(
    joinClasses([
      'py-4 px-6 m-auto max-w-8xl',
      backgroundForColor(),
    ]),
    typeof document !== 'undefined' ? document.body : undefined,
  );

  return <>
    {children}
  </>;
};

export default App;