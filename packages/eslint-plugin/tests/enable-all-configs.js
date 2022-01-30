module.exports = {
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  extends: [
    'plugin:@web-configs/core',
    'plugin:@web-configs/es5',
    'plugin:@web-configs/esnext',
    'plugin:@web-configs/typescript',
    'plugin:@web-configs/react',

    // Augmenting configs - When extending, these go after the core config
    'plugin:@web-configs/graphql',
    'plugin:@web-configs/jest',
    'plugin:@web-configs/node',
    'plugin:@web-configs/webpack',

    // Prettier config - When extending, this must go last
    'plugin:@web-configs/prettier',
  ],
};
