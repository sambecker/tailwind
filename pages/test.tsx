import { NextPage } from 'next';
import { joinClasses } from '../src/utility/css';
import useElementClasses from '../src/utility/useBodyClasses';

interface Props {}

const TestPage: NextPage<Props> = () => {
  // Use index.tsx's `PageComponent` implementation
  useElementClasses(
    joinClasses([
      'py-4 px-6 m-auto max-w-8xl',
      'bg-slate-100',
    ]),
    typeof document !== 'undefined' ? document.body : undefined,
  );

  return(
    <div className={joinClasses([
      'px-3 py-2',
      'inline-block',
      'bg-white',
      'rounded-xl',
      'border border-slate-300',
    ])}>
      Test Page For Checkly
    </div>
  );
};

export default TestPage;
