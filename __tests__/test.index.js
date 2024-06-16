import genDiff from '../src/genDiff.js';
import { filePath1, filePath2, fileYaml1, fileYaml2, filePath3, filePath4, fileYaml3, fileYaml4 } from '../parse/path.js';
import fs from 'fs';
import { describe, test, expect } from '@jest/globals';
import yaml from 'yaml';

  const expectedDiffFilePath = '__fixtured__/file1.txt';
  const expectedDiffContent = fs.readFileSync(expectedDiffFilePath, 'utf-8');

  const expectedPathFile2 = '__fixtured__/file2.txt';
  const expectedDiffContent2 = fs.readFileSync(expectedPathFile2, 'utf-8');
describe('gendiff', () => {

  test('should return a comparison of flat files JSON', () => {
    const expectedDiffJson = JSON.stringify(expectedDiffContent.replace(/\r?\n|\r/g, ''));
    const resultDiffJson = JSON.stringify(genDiff(filePath1, filePath2).replace(/\r?\n|\r/g, ''));
    expect(resultDiffJson).toEqual(expectedDiffJson);
  });

  test('should return a comparison of flat files yaml', () => {
    const expectedDiffYaml = yaml.stringify(expectedDiffContent.replace(/\r?\n|\r/g, ''));
    const resultDiffYaml = yaml.stringify(genDiff(fileYaml1, fileYaml2).replace(/\r?\n|\r/g, ''));
    expect(resultDiffYaml).toEqual(expectedDiffYaml);
  });

  test('should return a comparison of flat nested files JSON', () => {
    const expectedDiffJson2 = JSON.stringify(expectedDiffContent2);
    const resultDiffJson2 = JSON.stringify(genDiff(filePath3, filePath4));
    expect(resultDiffJson2).toEqual(expectedDiffJson2);
  });

  test('should return a comparison of flat nested files yaml', () => {
    const expectDiffYaml2 = yaml.stringify(expectedDiffContent2);
    const resultDiffYaml2 = yaml.stringify(genDiff(fileYaml3, fileYaml4));
    expect(resultDiffYaml2).toEqual(expectDiffYaml2);
  });
});

describe ('formatters', () => {
  const expectedFlatPath = '__fixtured__/file3.txt';
  const expectedFlatContent = fs.readFileSync(expectedFlatPath, 'utf-8');
  test('should return flat format plain', () => {
    expect(genDiff(filePath3, filePath4, 'plain')).toEqual(expectedFlatContent);
  });
});