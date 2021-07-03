const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, '..', 'src'),
      '@/api': path.resolve(__dirname, '..', 'src', 'api'),
      '@/app': path.resolve(__dirname, '..', 'src', 'app'),
      '@/assets': path.resolve(__dirname, '..', 'src', 'assets'),
      '@/components': path.resolve(__dirname, '..', 'src', 'components'),
      '@/constants': path.resolve(__dirname, '..', 'src', 'constants'),
      '@/fetch': path.resolve(__dirname, '..', 'src', 'fetch'),
      '@/hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
      '@/layouts': path.resolve(__dirname, '..', 'src', 'layouts'),
      '@/lib': path.resolve(__dirname, '..', 'src', 'lib'),
      '@/pages': path.resolve(__dirname, '..', 'src', 'pages'),
      '@/routes': path.resolve(__dirname, '..', 'src', 'routes'),
      '@/types': path.resolve(__dirname, '..', 'src', 'types'),
      '@/ui': path.resolve(__dirname, '..', 'src', 'ui'),
      '@/ui/components': path.resolve(
        __dirname,
        '..',
        'src',
        'ui',
        'components'
      ),
      '@/utils': path.resolve(__dirname, '..', 'src', 'utils'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}
