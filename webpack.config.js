module.exports = {
  context: __dirname,
  entry: "./js/anupsegu.js",
  output: {
    path: "./lib",
    publicPath: "/lib/",
  	filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
};
