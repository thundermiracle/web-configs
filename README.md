[comment]: # (NOTE: This file is generated and should not be modify directly. Update `templates/ROOT_README.hbs.md` instead)

# Web Configs

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This repository contains common configurations for building web apps. The original version is [here](https://github.com/shopify/web-configs/).

## Usage

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own `README` and documentation describing usage.

### Package Index

| Name | NPM | Size |
| ------- | --- | --- |
| [@web-configs/babel-preset](packages/babel-preset) | [![npm version](https://badge.fury.io/js/%40web-configs%2Fbabel-preset.svg)](https://badge.fury.io/js/%40web-configs%2Fbabel-preset) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fbabel-preset.svg)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fbabel-preset.svg) |
| [@web-configs/browserslist-config](packages/browserslist-config) | [![npm version](https://badge.fury.io/js/%40web-configs%2Fbrowserslist-config.svg)](https://badge.fury.io/js/%40web-configs%2Fbrowserslist-config) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fbrowserslist-config.svg)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fbrowserslist-config.svg) |
| [@web-configs/eslint-plugin](packages/eslint-plugin) | [![npm version](https://badge.fury.io/js/%40web-configs%2Feslint-plugin.svg)](https://badge.fury.io/js/%40web-configs%2Feslint-plugin) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Feslint-plugin.svg)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Feslint-plugin.svg) |
| [@web-configs/prettier](packages/prettier-config) | [![npm version](https://badge.fury.io/js/%40web-configs%2Fprettier.svg)](https://badge.fury.io/js/%40web-configs%2Fprettier) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fprettier.svg)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fprettier.svg) |
| [@web-configs/stylelint-plugin](packages/stylelint-plugin) | [![npm version](https://badge.fury.io/js/%40web-configs%2Fstylelint-plugin.svg)](https://badge.fury.io/js/%40web-configs%2Fstylelint-plugin) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fstylelint-plugin.svg)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Fstylelint-plugin.svg) |
| [@web-configs/typescript](packages/typescript-configs) | [![npm version](https://badge.fury.io/js/%40web-configs%2Ftypescript.svg)](https://badge.fury.io/js/%40web-configs%2Ftypescript) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Ftypescript.svg)](https://img.shields.io/bundlephobia/minzip/%40web-configs%2Ftypescript.svg) |

## Contribution

ThunderMiracle has also adopted a Code of Conduct that we expect contributors to adhere to. Please read the [full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Ways to contribute

There are many ways to contribute, some of which are:

- Filing [bug reports](https://github.com/thundermiracle/web-configs/issues/new?template=BUG_REPORT.md)
- Requesting new features or packages via [an issue](https://github.com/thundermiracle/web-configs/issues/new/choose)
- Improving the existing codebase by picking up an issue, improving tests, or furthering documentation

### Development

#### Getting Started

```bash
yarn # install project dependencies
yarn lerna bootstrap
```

#### Documentation

If your change affects the public API of any packages within this repository (i.e. adding or changing arguments to a function, adding a new function, changing the return value, etc), please ensure the documentation is updated,  and a changelog is added to reflect this. Documentation is in the `README.md` files of each package. If further documentation is needed please communicate via a GitHub issue.

#### Testing

The packages in this repository are used in mission-critical production scenarios. As such, we do not merge any untested code. 

To run the full test suite, simply run `dev test` or `yarn test`.

### Releasing

The release process currently involves some manual steps to complete. Once your PR has been merged, our team will orchestrate when to cut a new release.

**Note** Version numbers in `package.json` files should never be altered manually. This will be done via scripts as part of the release process.

## License

MIT &copy; [thundermiracle](https://thundermiracle.com/), see [LICENSE.md](LICENSE.md) for details.
