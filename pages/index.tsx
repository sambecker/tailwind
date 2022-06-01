import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { joinClasses } from '../src/utility/css';
import Button from '../src/components/Button';
import Box from '../src/components/Box';
import { generateItems, Items } from '../src/app';
import { getDarkTextColor, TailwindColor } from '../src/theme';
import Animation from '../src/components/Animation';
import Link from 'next/link';
import useTheme from '../src/theme/useTheme';
import useSWR from 'swr';
import { fetchJson } from '../src/utility/fetch';

const TITLE = 'Responsive Tailwind demo';

interface Props {
  initialItems: Items
  initialColor?: TailwindColor
}

const Home: NextPage<Props> = ({ initialItems, initialColor }) => {
  const [items, setItems] = useState(initialItems);

  const [apiResultName, setApiResultName] = useState<string>();

  const { data, error } = useSWR<{ name: string }>('/api/hello', fetchJson);

  if (!apiResultName && data && !error) {
    setApiResultName(data.name);
  }

  const { selectedColor } = useTheme(initialColor);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-12">
        <h1
          className={joinClasses([
            'text-3xl leading-none md:text-6xl mb-8 md:mb-24 font-bold',
            getDarkTextColor(selectedColor),
          ])}
        >
          {TITLE}
        </h1>

        <Animation initialColor={initialColor} />

        <Link href="/test">
          <a className={joinClasses([
            'inline-block',
            'font-mono',
            'font-bold',
            'mb-8',
            'hover:underline',
            getDarkTextColor(selectedColor),
          ])}>
            Test Page
          </a>
        </Link>
        
        {items.length === 0 &&
          <Button
            onClick={() => setItems(generateItems())}
            className="relative -top-3"
            color={selectedColor}
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
          {/* eslint-disable-next-line */}
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
                  color={selectedColor}
                >
                  {text}
                </Box>
              </motion.div>)}
          </AnimatePresence>
        </div>

        {apiResultName && <h2 className={joinClasses([
          'font-mono',
          'font-bold',
          'mt-8',
          getDarkTextColor(selectedColor),
        ])}>
          API Result: {apiResultName}
        </h2>}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      initialItems: generateItems(),
    },
  };
};

export default Home;
