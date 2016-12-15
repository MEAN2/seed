let srcPath = './app/src/';

module.exports = {
  entry: {
    app: srcPath + 'app.ts',
    vendor: srcPath + 'vendor.ts'
  },
  
  output: {
    filename: '[name].js',
    path: './build'
  }
};
