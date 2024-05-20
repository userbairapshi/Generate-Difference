import { parse } from '../parse/parser.js';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const obj1 = parse(path1);
  const obj2 = parse(path2);

  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const diff = Array.from(keys).sort().map((key) => {
    if (_.isObject(obj1[key]) && obj1[key] !== null &&
        _.isObject(obj2[key]) && obj2[key] !== null) {
      return `    ${key}: ${genDiff(JSON.stringify(obj1[key]), JSON.stringify(obj2[key]))}`;
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return `    ${key}: ${obj1[key]}`;
    }

    if (!_.has(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }

    if (!_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
  });
  return `{\n${diff.join('\n')}\n}`;
};

export { genDiff };

