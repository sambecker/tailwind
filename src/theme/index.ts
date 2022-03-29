export type TailwindColor = 'grey' | 'teal' | 'indigo' | 'orange';

export const TAILWIND_COLORS: TailwindColor[] = [
  'grey',
  'teal',
  'indigo',
  'orange',
];

export const getDarkTextColor = (color: TailwindColor) => {
  switch (color) {
  case 'grey': return 'text-slate-700';
  case 'teal': return 'text-teal-900';
  case 'indigo': return 'text-indigo-900';
  case 'orange': return 'text-orange-900';
  }
};
