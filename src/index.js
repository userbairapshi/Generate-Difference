import { filePath1, filePath2 } from "../parse/parser.js";
import fs from 'fs'

const genDiff = (filePath1, filePath2) => {
    const obj1 = JSON.parse(fs.readFileSync(filePath1));
    const obj2 = JSON.parse(fs.readFileSync(filePath2));
    
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    
    const diff = Array.from(keys).sort()
      .map((key) => {
        if (obj1[key] === obj2[key]) {
          return `    ${key}: ${obj1[key]}`;
        }
        if (!obj1.hasOwnProperty(key)) {
          return `  + ${key}: ${obj2[key]}`;
        }
        if (!obj2.hasOwnProperty(key)) {
          return `  - ${key}: ${obj1[key]}`;
        }
        return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
      });
  
    return `{\n${diff.join('\n')}\n}`;
  };

export { genDiff };


