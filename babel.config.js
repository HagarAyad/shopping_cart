module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          ,
        ],
        alias: {
          '~api': './src/api',
          '~navigation': './src/navigation',
          '~components': './src/components',
          '~screens': './src/screens',
          '~store': './src/store',
          '~theme': './src/theme',
          '~assets': './src/assets',
          '~types': './src/types',
        },
      },
    ],
  ],
};
