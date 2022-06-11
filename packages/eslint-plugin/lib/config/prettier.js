module.exports = {
  extends: ['prettier'],

  plugins: ['prettier'],

  rules: {
    ...require('./rules/prettier'),
    // rules to disable to prefer prettier
    '@babel/semi': 'off',
    '@babel/object-curly-spacing': 'off',
    '@web-configs/class-property-semi': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 'off',

    // Special rule for 'lines-around-comment'
    // https://github.com/prettier/eslint-config-prettier/blob/984de70e8c6b57684b444283561019389ccebd11/README.md#lines-around-comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
      },
    ],

    // Special rule for 'no-unexpected-multiline'
    // https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#no-unexpected-multiline
    'no-unexpected-multiline': 'error',
  },

  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/prettier-typescript'),
    },
  ],
};
