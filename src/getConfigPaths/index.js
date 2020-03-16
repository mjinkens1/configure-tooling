const getConfigPaths = platform => {
  switch (platform) {
    case 'react':
      return {
        eslint: '@itemizecorp/eslint-config/configs/react-web/tooling-config',
        husky: '@itemizecorp/husky-config/react',
      };

    case 'react-native':
      return {
        eslint:
          '@itemizecorp/eslint-config/configs/react-native/tooling-config',
        husky: '@itemizecorp/husky-config/react-native',
      };

    default:
      return {
        eslint: '@itemizecorp/eslint-config/configs/react-web/tooling-config',
        husky: '@itemizecorp/husky-config/react',
      };
  }
};

module.exports = getConfigPaths;
