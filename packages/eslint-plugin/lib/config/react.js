module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  plugins: ['react', 'jsx-a11y', 'react-hooks', '@web-configs'],

  rules: {
    ...require('./rules/react'),
    ...require('./rules/react-hooks'),
    ...require('./rules/jsx-a11y'),
    '@web-configs/react-hooks-strict-return': 'error',
    '@web-configs/react-initialize-state': 'error',
    '@web-configs/react-no-multiple-render-methods': 'error',
    '@web-configs/react-prefer-private-members': 'error',
    '@web-configs/react-require-autocomplete': 'error',
    '@web-configs/react-type-state': 'error',
    '@web-configs/jsx-no-complex-expressions': 'error',
    '@web-configs/jsx-no-hardcoded-content': 'error',
    '@web-configs/jsx-prefer-fragment-wrappers': 'error',
    'consistent-return': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/react-typescript'),
    },
    {
      files: ['*.test.*'],
      rules: {
        '@web-configs/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
};
