import genDiff from '../src/genDiff.js';
import { filePath1, filePath2, fileYaml1, fileYaml2 } from '../parse/path.js';
import fs from 'fs';
import { describe, test, expect } from '@jest/globals';
import yaml from 'yaml';

  const expectedDiffFilePath = '__fixtured__/file1.txt';
  const expectedDiffContent = fs.readFileSync(expectedDiffFilePath, 'utf-8');

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
});