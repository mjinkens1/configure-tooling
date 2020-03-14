const getConfigPaths = platform => {
  switch (platform) {
    case 'node':
      return {
        eslint: '@itemizecorp/eslint-config',
        husky: '@itemizecorp/husky-config',
      };

    case 'react':
      return {
        eslint: '@itemizecorp/eslint-config/web',
        husky: '@itemizecorp/husky-config/react',
      };

    case 'react-native':
      return {
        eslint: '@itemizecorp/eslint-config/react-native',
        husky: '@itemizecorp/husky-config/react-native',
      };

    default:
      return {
        eslint: '@itemizecorp/eslint-config',
        husky: '@itemizecorp/husky-config',
      };
  }
};

module.exports = getConfigPaths;
