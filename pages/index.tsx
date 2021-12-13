import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { joinClasses } from '../utility/css'
import Button from '../components/Button';

const INITIAL_ITEMS = ['One', 'Two', 'Three'];

const TITLE = 'Responsive Tailwind demo';

const Home: NextPage = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-3">
        <h1 className="text-3xl md:text-6xl mb-8 md:mb-24 font-bold">
          {TITLE}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map(item =>
            <div
              key={item}
              className={joinClasses([
                'text-white bg-teal-500 px-4 pt-2 pb-4 rounded-lg shadow-lg shadow-teal-500/50',
              ])}
            >
              <div className="mb-3">{item}</div>
              <Button
                onClick={() => setItems(items.filter(i => i !== item))}
              >
                More info
              </Button>
            </div>)}
        </div>
        {items.length === 0 &&
          <Button
            onClick={() => setItems(INITIAL_ITEMS)}
            isDark
          >
            Restore
          </Button>}
      </main>
    </>
  )
}

export default Home
