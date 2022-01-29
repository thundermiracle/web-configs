module.exports = {
  extends: ['plugin:@web-configs/typescript', 'plugin:@web-configs/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
