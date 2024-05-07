#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filePath1> <filePath2>')
  .option('-f, --format [type]', 'output format')
  .action((filePath1, filePath2, options) => {
    console.log('Filepath 1:', filePath1);
    console.log('Filepath 2:', filePath2);
    console.log('Format:', options.format || 'default');
    console.log('Display diff logic goes here');
  });

program.parse(process.argv);


