# `@web-configs/stylelint-plugin`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE) [![npm version](https://badge.fury.io/js/%40web-configs%2Fstylelint-plugin.svg)](https://badge.fury.io/js/%40web-configs%2Fstylelint-plugin.svg)

ThunderMiracle's stylelint rules and config

## Installation

Install [stylelint](https://stylelint.io/) and `@web-configs/stylelint-plugin`:

**With Yarn**
```
yarn add --dev stylelint @web-configs/stylelint-plugin
```

**With npm**
```
npm install stylelint @web-configs/stylelint-plugin --save-dev
```


## Usage

ThunderMiracle's stylelint rules come bundled in `@web-configs/stylelint-plugin`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.
```
"stylelint": {
  "extends": ["@web-configs/stylelint-plugin"]
}
```

Now you can run stylelint by adding the following linting script to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.
```
"scripts": {
  "stylelint": "stylelint 'src/**/*.scss'"
}
```
Run it:

**With Yarn**
```
yarn run stylelint
```

**With npm**
```
npm run stylelint
```

## Prettier

This config also includes a prettier config which can be extended to format `.scss`.
Using the [`stylelint-prettier`](https://github.com/bpscott/stylelint-prettier) plugin, prettier changes are exposed as stylelint rule violations.

Install [`prettier`](https://github.com/prettier/prettier):

```
$ yarn add --dev prettier
```

Extend the config in your `package.json`:

```json
"stylelint": {
  "extends": [
    "@web-configs/stylelint-plugin/prettier"
  ]
}
```

Add a prettier config in `package.json`:

```json
"prettier": {
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true
}
```

Prettier fixes shall be reported when you run `stylelint **/*.css` and shall be autofixed when you run `stylelint --fix **/*.scss`.
