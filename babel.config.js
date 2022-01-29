module.exports = {
  targets: 'current node',
  presets: [
    ['@web-configs/babel-preset', { modules: 'commonjs', typescript: true }],
  ],
};
