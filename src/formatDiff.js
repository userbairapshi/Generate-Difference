import _ from 'lodash';
import { stylish } from './stylish.js';

const findDifferences = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

  const diff = keys.flatMap((key) => {
    if (!_.has(obj2, key)) {
      return `  - ${key}: ${stylish(obj1[key], 2)}`;
    }
    if (!_.has(obj1, key)) {
      return `  + ${key}: ${stylish(obj2[key], 2)}`;
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return `    ${key}: ${findDifferences(obj1[key], obj2[key]).split('\n').join('\n    ')}`;
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return [
        `  - ${key}: ${stylish(obj1[key], 2)}`,
        `  + ${key}: ${stylish(obj2[key], 2)}`
      ];
    }
    return `    ${key}: ${stylish(obj1[key], 2)}`;
  });

  return `{\n${diff.join('\n')}\n}`;
};


export { findDifferences };
