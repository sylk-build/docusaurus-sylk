#!/usr/bin/env node

import fs from 'fs';
// import chalk from 'chalk';
import path from 'path';
import { execSync } from 'child_process';

const DEFAULT_TEMPLATE = 'classic';

export default async function init(
  siteName: string,
) {
  console.log('Triggering @docusaurus/core project creation.');

  try {
    execSync(`npx @docusaurus/init@latest init --use-npm ${siteName} ${DEFAULT_TEMPLATE} `, { stdio: 'inherit' });
  } catch (err) {
    console.log('Generation of base template from @docusaurus/init failed.');
    throw err;
  }

  console.log('Installing docusaurus-sylk with recommended plugins.');

  try {
    execSync(`cd ${siteName} && npm install --save docusaurus-sylk`, { stdio: 'inherit' });
  } catch (err) {
    console.log('Installation of Sylk preset failed.');
    throw err;
  }

  console.log('Initializing docusaurus-sylk with default options and sample fixtures.')

  fs.mkdirSync(`${siteName}/sylkdocs`);
  fs.mkdirSync(`${siteName}/sylk`);
  fs.writeFileSync(`${siteName}/sidebarsSylkdocs.js`, '');

  fs.copyFileSync(path.resolve(__dirname, 'templates/docusaurus.config.js'), `${siteName}/docusaurus.config.js`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/sylk.json'), `${siteName}/sylk/TodoApp/sylk.json`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/landing_page.js'), `${siteName}/src/pages/index.js`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/landing_page.module.css'), `${siteName}/src/pages/styles.module.css`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/logo.png'), `${siteName}/static/img/logo.png`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/favicon.ico'), `${siteName}/static/img/favicon.ico`);

  console.log('Generating Sylk doc files for sample fixtures.');

  try {
    execSync(`cd ${siteName} && npx docusaurus generate-sylk-docs`, { stdio: 'inherit' });
  } catch (err) {
    console.log('Generation of Sylk docs failed.');
    throw err;
  }

  console.log('Successful setup of Docusaurus site with Sylk preset! Try it out with `npm run start` in the site directory.');
}