import { NextPage } from 'next';
import Link from 'next/link';
import { joinClasses } from '../src/utility/css';

interface Props {}

const TestPage: NextPage<Props> = () => {
  return(
    <div className={joinClasses([
      'space-x-2',
    ])}>
      <div className={joinClasses([
        'px-3 py-2',
        'inline-block',
        'bg-white',
        'rounded-xl',
        'border border-slate-300',
      ])}>
        Test Page For Checkly
      </div>
      <Link href="/">
        <a className={joinClasses([
          'px-3 py-2',
          'inline-block',
          'bg-white',
          'rounded-xl',
          'border border-slate-300',
          'active:bg-slate-300',
        ])}>
          Home
        </a>
      </Link>
    </div>
  );
};

export default TestPage;
