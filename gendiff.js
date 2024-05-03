#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<file1> <file2>')
  .action((file1, file2) => {
    console.log('Display diff logic goes here');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}