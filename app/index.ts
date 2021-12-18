import { LoremIpsum } from 'lorem-ipsum';

export type Items = {
  title: string
  text: string
}[];

const ITEM_TITLES = [
  'One',
  'Two',
  'Three',
  'Four',
];

export const generateItems = (items = ITEM_TITLES): Items =>
  items.map(item => ({
    title: item,
    text: new LoremIpsum().generateWords(30),
  }));
