import { parse } from "../parse/parser.js";

const genDiff = (file1, file2) => {
  const obj1 = parse(file1);
  const obj2 = parse(file2);
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

