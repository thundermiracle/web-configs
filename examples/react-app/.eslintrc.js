module.exports = {
  extends: [
    'plugin:@web-configs/react',
    'plugin:@web-configs/typescript',
    'plugin:@web-configs/prettier',
    'plugin:@web-configs/node',
  ],
  rules: {
    '@web-configs/images-no-direct-imports': 'off',
  },
};
