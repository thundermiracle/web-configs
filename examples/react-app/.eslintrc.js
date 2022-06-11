module.exports = {
  extends: [
    'plugin:@web-configs/react',
    'plugin:@web-configs/typescript',
    'plugin:@web-configs/prettier',
    'plugin:@web-configs/node',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
  },
};
