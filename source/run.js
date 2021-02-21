/**
 * Copyright 2021 Eric Bednarz <https://m.bednarz.dev>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { promisify } from 'util';
import glob from 'glob';
import { io_factory, load } from './test-io.js';

const { argv, cwd, exit } = process;

const pattern = '**/*.test.{js,mjs}';
const ignore = '**/node_modules/**';
const options = {
  ignore,
};
const pwd = cwd();

const is_argument = value =>
  value.startsWith('-');

const argument_list = argv.filter(is_argument);
const silent = argument_list.includes('-s');

const find = promisify(glob);

const {
  on_glob_resolved,
  on_suites_resolved,
  on_rejected,
} = io_factory({
  exit,
  pwd,
  silent,
});

find(pattern, options)
  .then(on_glob_resolved)
  .then(load)
  .then(on_suites_resolved)
  .catch(on_rejected);
