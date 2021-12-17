import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { LoremIpsum } from 'lorem-ipsum';
import { joinClasses } from '../utility/css';
import Button from '../components/Button';
import Box from '../components/Box';

const INITIAL_ITEMS = [
  'One',
  'Two',
  'Three',
  'Four',
].map(item => ({
  title: item,
  text: new LoremIpsum().generateWords(30),
}));

const TITLE = 'Responsive Tailwind demo';

export type TailwindColor = 'teal' | 'indigo';

const Home: NextPage = () => {
  const [color] = useState<TailwindColor>('indigo');
  const [items, setItems] = useState(INITIAL_ITEMS);

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
          ])}
        >
          {TITLE}
        </h1>
        
        {items.length === 0 &&
          <Button
            onClick={() => setItems(INITIAL_ITEMS)}
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
                transition={{ duration: 0.5 }}
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

export default Home;
