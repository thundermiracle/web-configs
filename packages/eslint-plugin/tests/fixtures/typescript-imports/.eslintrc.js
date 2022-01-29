module.exports = {
  extends: ['plugin:@web-configs/typescript', 'plugin:@web-configs/node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
