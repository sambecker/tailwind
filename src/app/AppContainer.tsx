import { FC, ReactNode } from 'react';
import { TailwindColor } from '../theme';
import ThemeChooser from '../theme/ThemeChooser';
import useTheme from '../theme/useTheme';
import { joinClasses } from '../utility/css';
import useElementClasses from '../utility/useBodyClasses';

interface Props {
  initialColor?: TailwindColor
  children: ReactNode
}

const AppContainer: FC<Props> = ({ initialColor, children }) => {
  const { selectedColor } = useTheme(initialColor, true);

  const backgroundForColor = () => {
    switch (selectedColor) {
    case 'grey':
      return 'bg-slate-50';
    case 'teal':
      return 'bg-teal-50';
    case 'indigo':
      return 'bg-indigo-50';
    case 'orange':
      return 'bg-orange-50';
    }
  };

  useElementClasses(
    joinClasses([
      'py-4 px-6 m-auto max-w-8xl',
      backgroundForColor(),
    ]),
    typeof document !== 'undefined' ? document.body : undefined,
    true,
  );

  return <>
    {children}
    <footer className="my-6">
      <ThemeChooser initialColor={initialColor} />
    </footer>
  </>;
};

export default AppContainer;
