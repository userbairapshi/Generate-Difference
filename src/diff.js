import { parse } from '../parse/parser.js';
import { findDifferences } from './formatDiff.js';
import { chooseFormatter } from '../formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const formatter = chooseFormatter(formatName);
  const diff = findDifferences(data1, data2, formatter);

  return formatter(diff);
};

export { genDiff };
