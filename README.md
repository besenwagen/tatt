# `tatt` all the things [![npm version][npm-image]][npm-url]

> This is the *tatt*
  [`test` module](https://m.bednarz.dev/test.html)
  companion package for the *Node.js* runtime environment. Unlike
  [Deno](https://deno.land/),
  *Node* can only resolve modules with `file://` URLs. Crikey!

## Usage

### Installation

```bash
npm install tatt
```

### Writing tests

The only thing that differs from the
[`test` module documentation](https://m.bednarz.dev/test.html)
is that you use a *bare import* for the API functions:

```javascript
import { result, test } from 'tatt';
```

The test runner matches by file extension.
If your `package.json` enables ECMAScript modules,

```json
{
  "type": "module"
}
```

save your test suites with the extension `.test.js`, otherwise `.test.mjs`.

### Running tests

The `tatt` executable is available in `package.json` *npm scripts*, e.g.

```json
{
  "scripts": {
    "test": "tatt -s"
  }
}
```

Note: with the `-s` (for silent) flag, only the test summary
and failing tests, if any, are printed to `STDOUT`.

Run the tests in your shell:

```bash
npm test
```

Note: `test` is an `npm` subcommand itself and does not *need*
to be invoked with the `run` subcommand.

Another common use case is redirecting the full *YAML* test report
from `STDOUT` to a file:

```json
{
  "scripts": {
    "report": "tatt > report.yml"
  }
}
```

Generate the report in your shell:

```bash
npm run report
```

### Add native test coverage

Install [c8](https://www.npmjs.com/package/c8):

###

```bash
npm install c8
```

Use it in your *npm* script:

```json
{
  "scripts": {
    "test": "c8 tatt -s"
  }
}
```

Inspect the test summary and coverage result in your shell:

```bash
npm test
```

More info: [Rethinking JavaScript Test Coverage](https://blog.npmjs.org/post/178487845610/rethinking-javascript-test-coverage.html)

## License

GNU Affero General Public License

SPDX-License-Identifier: `AGPL-3.0-or-later`

[npm-image]: https://img.shields.io/npm/v/tatt.svg?style=flat-square
[npm-url]:   https://www.npmjs.com/package/tatt
