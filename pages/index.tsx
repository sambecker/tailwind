import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { joinClasses } from '../src/utility/css';
import Button from '../src/components/Button';
import Box from '../src/components/Box';
import { useAppState } from '../src/state';
import { generateItems, Items } from '../src/app';

const TITLE = 'Responsive Tailwind demo';

interface Props {
  initialItems: Items
}

const Home: NextPage<Props> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const { color } = useAppState('theme');

  const textColor = () => {
    switch (color) {
    case 'teal': return 'text-teal-900';
    case 'indigo': return 'text-indigo-900';
    }
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-3">
        <h1
          className={joinClasses([
            'text-3xl leading-none md:text-6xl mb-8 md:mb-24 font-bold',
            textColor(),
          ])}
        >
          {TITLE}
        </h1>
        
        {items.length === 0 &&
          <Button
            onClick={() => setItems(generateItems())}
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
    </>
  );
};

Home.getInitialProps = (): Props => ({
  initialItems: generateItems(),
});

export default Home;
