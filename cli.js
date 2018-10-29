#! /usr/bin/env node
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('friendmaker', { horizontalLayout: 'full' }),
  ),
);
