# `@web-configs/prettier`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE) [![npm version](https://badge.fury.io/js/%40web-configs%2Fprettier.svg)](https://badge.fury.io/js/%40web-configs%2Fprettier.svg)  [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@web-configs/prettier.svg)](https://img.shields.io/bundlephobia/minzip/@web-configs/prettier.svg)

Shared prettier configuration

## Installation

```bash
$ yarn add --dev @web-configs/prettier
```

## Usage
ThunderMiracle's shared prettier config comes bundled in `@web-configs/prettier`. To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:
```
"prettier": "@web-configs/prettier"
```
Previously, rules had been defined directly in a `.prettierrc` or `package.json` 

Any previous `.prettierrc` should be removed in favour of the shared config.
