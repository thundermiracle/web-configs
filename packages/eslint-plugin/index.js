module.exports = {
  configs: {
    // Core configs - When extending, one of these should go first
    core: require('./lib/config/core'),
    es5: require('./lib/config/es5'),
    esnext: require('./lib/config/esnext'),
    react: require('./lib/config/react'),
    typescript: require('./lib/config/typescript'),
    'typescript-type-checking': require('./lib/config/typescript-type-checking'),

    // Augmenting configs - When extending, these go after the core config
    graphql: require('./lib/config/graphql'),
    jest: require('./lib/config/jest'),
    node: require('./lib/config/node'),
    github: require('./lib/config/github'),

    // Prettier config - When extending, this must go last
    prettier: require('./lib/config/prettier'),
  },
};
