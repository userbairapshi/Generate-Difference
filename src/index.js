import fs from 'fs';
import parse from './parse/parser.js';
import findDifferences from './formatDiff.js';
import chooseFormatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const readFile1 = fs.readFileSync(filepath1, 'utf-8');
  const readFile2 = fs.readFileSync(filepath2, 'utf-8');
  const data1 = parse(readFile1);
  const data2 = parse(readFile2);

  const formatter = chooseFormatter(formatName);
  const diff = findDifferences(data1, data2, formatter);

  return formatter(diff);
};

export default genDiff;
