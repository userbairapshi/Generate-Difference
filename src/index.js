
import fs from 'fs'
import path from 'path';
import process from 'process';

const genDiff = (filePath1, filePath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filePath1);
  const absolutePath2 = path.resolve(process.cwd(), filePath2);

  const obj1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf-8'));
  const obj2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf-8'));

  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  const diff = Array.from(keys).sort()
    .map((key) => {
      if (obj1[key] === obj2[key]) {
        return `    ${key}: ${obj1[key]}`;
      }
      if (!Object.hasOwnProperty.call(obj1, key)) {
        return `  + ${key}: ${obj2[key]}`;
      }
      if (!Object.hasOwnProperty.call(obj2, key)) {
        return `  - ${key}: ${obj1[key]}`;
      }
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    });

  return `{\n${diff.join('\n')}\n}`;
};

export { genDiff };