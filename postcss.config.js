module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: require('./package.json').browserslist
    }),
    require('postcss-pxtorem')({
      rootValue: '16',
      propList: ['*'],
      minPixelValue: 2
    })
  ]
}
