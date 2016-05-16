module.exports = {
  context: __dirname,
  entry: "./js/anupsegu.js",
  output: {
    path: "./js",
    publicPath: "/js/",
  	filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
};
