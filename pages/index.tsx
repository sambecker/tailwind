import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { joinClasses } from '../src/utility/css';
import Button from '../src/components/Button';
import Box from '../src/components/Box';
import { generateItems, Items } from '../src/app';
import ThemeChooser from '../src/theme/ThemeChooser';
import {
  COLOR_COOKIE_KEY,
  getDarkTextColor,
  TailwindColor,
} from '../src/theme';
import { useDispatch } from 'react-redux';
import { themeActions } from '../src/theme/state';
import { useAppState } from '../src/state';

const TITLE = 'Responsive Tailwind demo';

interface Props {
  initialItems: Items
  initialColor?: TailwindColor
}

const Home: NextPage<Props> = ({ initialItems, initialColor }) => {
  const [items, setItems] = useState(initialItems);

  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const dispatch = useDispatch();

  const { selectedColor } = useAppState('theme');

  useEffect(() => {
    if (!hasLoadedOnce) {
      setHasLoadedOnce(true);
      if (initialColor) {
        dispatch(themeActions.setColor(initialColor));
      }
    }
  }, [hasLoadedOnce, initialColor, dispatch]);
  
  const color = !hasLoadedOnce && initialColor
    ? initialColor
    : selectedColor;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-3 mb-12">
        <h1
          className={joinClasses([
            'text-3xl leading-none md:text-6xl mb-8 md:mb-24 font-bold',
            getDarkTextColor(color),
          ])}
        >
          {TITLE}
        </h1>
        
        {items.length === 0 &&
          <Button
            onClick={() => setItems(generateItems())}
            className="relative -top-3"
            color={color}
            dark
            large
          >
            Restore boxes
          </Button>}

        <div className={joinClasses([
          'grid',
          'grid-cols-1 md:grid-cols-3 xl:grid-cols-4',
          'gap-6 md:gap-4',
        ])}>
          <AnimatePresence>
            {items.map(({ title, text }) =>
              <motion.div
                key={title}
                className="flex"
                initial={{ scale: 1, opacity: 1, filter: 'blur(0)' }}
                exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
                transition={{ duration: 0.25 }}
              >
                <Box
                  title={title}
                  cta="Close"
                  onCtaClick={() =>
                    setItems(items.filter(i => i.title !== title))}
                  color={color}
                >
                  {text}
                </Box>
              </motion.div>)}
          </AnimatePresence>
        </div>
      </main>

      <footer className="mb-6">
        <ThemeChooser />
      </footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const initialColor =
    req.cookies[COLOR_COOKIE_KEY] as TailwindColor | undefined;
  return {
    props: {
      initialItems: generateItems(),
      ...initialColor !== undefined && { initialColor },
    },
  };
};

export default Home;
