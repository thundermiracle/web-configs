module.exports = {
  // Require (or disallow) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
  '@web-configs/binary-assignment-parens': ['error', 'always'],
  // Require (or disallow) semicolons for class properties.
  '@web-configs/class-property-semi': 'error',
  // Prevent images from being directly imported
  '@web-configs/images-no-direct-imports': 'error',
  // Disallow jest allMocks methods.
  '@web-configs/jest/no-all-mocks-methods': 'off',
  // Disallow jest snapshots.
  '@web-configs/jest/no-snapshots': 'off',
  // Disallow complex expressions embedded in in JSX.
  '@web-configs/jsx-no-complex-expressions': 'off',
  // Disallow hardcoded content in JSX.
  '@web-configs/jsx-no-hardcoded-content': 'off',
  // Disallow useless wrapping elements in favour of fragment shorthand in JSX.
  '@web-configs/jsx-prefer-fragment-wrappers': 'off',
  // Prefer that imports from within a directory extend to the file from where they are importing without relying on an index file.
  '@web-configs/no-ancestor-directory-import': 'off',
  // Disallow the use of debugger (without fixer to prevent autofix on save in editors)
  '@web-configs/no-debugger': 'error',
  // Prevent namespace import declarations
  '@web-configs/no-namespace-imports': 'off',
  // Prevent the usage of unnecessary computed properties.
  '@web-configs/no-useless-computed-properties': 'error',
  // Prevent the declaration of classes consisting only of static members.
  '@web-configs/no-fully-static-classes': 'error',
  // Prefer the use of the `sectioned` props in Polaris components instead of wrapping all contents in a `Section` component.
  '@web-configs/polaris-prefer-sectioned-prop': 'off',
  // Disallow the use of Polaris’s `Stack.Item` without any custom props.
  '@web-configs/polaris-no-bare-stack-item': 'off',
  // Prefer class properties to assignment of literals in constructors.
  '@web-configs/prefer-class-properties': 'off',
  // Prefer early returns over full-body conditional wrapping in function declarations.
  '@web-configs/prefer-early-return': ['error', { maximumStatements: 1 }],
  // Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope.
  '@web-configs/prefer-module-scope-constants': 'error',
  // Prefer Twine over Bindings as the name for twine imports.
  '@web-configs/prefer-twine': 'error',
  // Restrict the number of returned items from React hooks.
  '@web-configs/react-hooks-strict-return': 'off',
  // Require that React component state be initialized when it has a non-empty type.
  '@web-configs/react-initialize-state': 'off',
  // Disallow multiple render methods in React component classes.
  '@web-configs/react-no-multiple-render-methods': 'off',
  // Prefer all non-React-specific members be marked private in React class components.
  '@web-configs/react-prefer-private-members': 'off',
  // Require input elements to have autocomplete values
  '@web-configs/react-require-autocomplete': 'off',
  // Require that React component state be typed in TypeScript.
  '@web-configs/react-type-state': 'off',
  // Prevent importing the entirety of a package.
  '@web-configs/restrict-full-import': 'off',
  // Restrict the use of specified sinon features.
  '@web-configs/sinon-no-restricted-features': 'off',
  // Require the use of meaningful sinon assertions through sinon.assert or sinon-chai.
  '@web-configs/sinon-prefer-meaningful-assertions': 'off',
  // Prevent module imports between components.
  '@web-configs/strict-component-boundaries': 'error',
  // Enforces all TypeScript enums to be in pascal case
  '@web-configs/typescript/prefer-pascal-case-enums': 'off',
  // Enforces all TypeScript enums to be singular
  '@web-configs/typescript/prefer-singular-enums': 'off',
  // Prefer buildClientSchema for schema building.
  '@web-configs/typescript/prefer-build-client-schema': 'error',
  // Require that all dynamic imports contain a `webpackChunkName` comment.
  '@web-configs/webpack/no-unnamed-dynamic-imports': 'off',
};
