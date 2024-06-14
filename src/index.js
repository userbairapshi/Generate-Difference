import { parse } from '../parse/parser.js';
import { stylish } from '../src/stylish.js';
import { findDifferences } from '../src/formatDiff.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const diff = findDifferences(data1, data2);

  switch (format) {
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export { genDiff };