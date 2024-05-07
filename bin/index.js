#!/usr/bin/env node

import { data1, data2 } from "../parse/path.js";

const genDiff = (data1, data2) =>{
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = Array.from(new Set(keys1.concat(keys2))).sort();
  
  const diff = allKeys.map((key) => {
    if (!data1.hasOwnProperty.call(key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!data2.hasOwnProperty.call(key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] === data2[key]) {
      return `    ${key}: ${data1[key]}`;
    }
    return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
  });
  
  return `{\n${diff.join('\n')}\n}`;
}

console.log(genDiff(data1, data2));

export default genDiff;

