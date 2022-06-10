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
    'consistent-return': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/react-typescript'),
    },
  ],
};
