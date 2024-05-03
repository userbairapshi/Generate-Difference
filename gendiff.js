#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    console.log('Filepath 1:', filepath1);
    console.log('Filepath 2:', filepath2);
    console.log('Format:', options.format || 'default');
    console.log('Display diff logic goes here');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}