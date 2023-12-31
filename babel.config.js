module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~assets': './assets',
            '~lib': './src/lib',
            '~const': './src/const',
          },
        },
      ],
    ],
  };
};
