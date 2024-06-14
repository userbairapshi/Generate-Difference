#!/usr/bin/env node

import { Command } from 'commander';
import process from 'process';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filePath1> <filePath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filePath1, filePath2, options) => {
    console.log(genDiff(filePath1, filePath2, options.format));
  });

program.parse(process.argv);