#!/usr/bin/env node

const program = require('commander');
// const chalk = require('chalk');
const path = require('path');
const { default: init } = require('../dist');

function wrapCommand(fn) {
  return (...args) =>
    fn(...args).catch((err) => {
      console.error(err.stack);
      process.exitCode = 1;
    });
}

program
  .version(require('../package.json').version)
  .usage('<command> [options]');

program
  .command('init [siteName]')
  .description('Initialize Docusaurus website with Sylk preset.')
  .action((siteName = 'sylk-project') => {
    wrapCommand(init)(siteName);
  });

program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  console.log(`  ${`\n  Unknown command ${cmd}.`}`);
  console.log();
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}