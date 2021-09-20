module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.json', '.svg', '.ttf'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
        },
      },
    ],
    'react-native-reanimated/plugin', // reanimated plugin has to be listed last
  ],
};
