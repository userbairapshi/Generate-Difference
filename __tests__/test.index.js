
import genDiff  from '../bin/index.js';
import { data1, data2 } from '../parse/path.js';
import { describe, test, expect } from '@jest/globals';


describe('gendiff', () => {

  const expectedDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff', () => {
    expect(genDiff(data1, data2)).toEqual(expectedDiff);
});
});