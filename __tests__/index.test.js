import fs from 'fs';
import yaml from 'yaml';
import genDiff from '../src/index.js';
import {
  filePath1, filePath2, fileYaml1, fileYaml2, filePath3, filePath4, fileYaml3, fileYaml4,
} from '../parse/path.js';

describe('gendiff', () => {
  test('should return a comparison of flat files JSON', () => {
    const expectedDiffContent = fs.readFileSync('__fixtured__/file1.txt', 'utf-8').replace(/\r?\n|\r/g, '');
    const resultDiffJson = genDiff(filePath1, filePath2).replace(/\r?\n|\r/g, '');
    expect(resultDiffJson).toEqual(expectedDiffContent);
  });

  test('should return a comparison of flat files yaml', () => {
    const expectedDiffContent = fs.readFileSync('__fixtured__/file1.txt', 'utf-8').replace(/\r?\n|\r/g, '');
    const resultDiffYaml = yaml.stringify(genDiff(fileYaml1, fileYaml2).replace(/\r?\n|\r/g, ''));
    expect(resultDiffYaml).toEqual(yaml.stringify(expectedDiffContent));
  });

  test('should return a comparison of nested files JSON', () => {
    const expectedDiffContent2 = fs.readFileSync('__fixtured__/file2.txt', 'utf-8');
    const resultDiffJson2 = genDiff(filePath3, filePath4);
    expect(resultDiffJson2).toEqual(expectedDiffContent2);
  });

  test('should return a comparison of nested files yaml', () => {
    const expectedDiffContent2 = fs.readFileSync('__fixtured__/file2.txt', 'utf-8');
    const resultDiffYaml2 = yaml.stringify(genDiff(fileYaml3, fileYaml4));
    expect(resultDiffYaml2).toEqual(yaml.stringify(expectedDiffContent2));
  });
});

describe('formatters', () => {
  test('should return flat format plain', () => {
    const expectedFlatContent = fs.readFileSync('__fixtured__/file3.txt', 'utf-8');
    expect(genDiff(filePath3, filePath4, 'plain')).toEqual(expectedFlatContent);
  });

  test('should return flat format json', () => {
    const jsonResult = fs.readFileSync('__fixtured__/file4.txt', 'utf-8');
    expect(genDiff(filePath3, filePath4, 'json')).toEqual(jsonResult);
  });
});
