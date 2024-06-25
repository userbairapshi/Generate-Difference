import fs from 'fs';
import parse from './parse/parser.js';
import findDifferences from './formatDiff.js';
import chooseFormatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = fs.readFileSync(filepath1, 'utf-8');
  const content2 = fs.readFileSync(filepath2, 'utf-8');

  const type1 = filepath1.split('.').pop();
  const type2 = filepath2.split('.').pop();

  const data1 = parse(content1, type1);
  const data2 = parse(content2, type2);

  const formatter = chooseFormatter(formatName);
  const diff = findDifferences(data1, data2);

  return formatter(diff);
};

export default genDiff;
