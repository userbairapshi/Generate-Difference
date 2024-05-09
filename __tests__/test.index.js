import genDiff from '../src/genDiff.js';
import { filePath1, filePath2 } from '../parse/parser.js';
import fs from 'fs';
import { expect, test, describe } from 'jest';


describe('gendiff', () => {
  test('should return a comparison of flat files JSON', () => {
    const expectedDiffFilePath = '__fixtured__/file1.txt';
    const expectedDiffContent = fs.readFileSync(expectedDiffFilePath, 'utf-8');

    const expectedDiffJson = JSON.stringify(expectedDiffContent.replace(/\r?\n|\r/g, ''));
    const resultDiffJson = JSON.stringify(genDiff(filePath1, filePath2).replace(/\r?\n|\r/g, ''));

    expect(resultDiffJson).toEqual(expectedDiffJson);
  });
});