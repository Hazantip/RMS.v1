// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production'),
	__DEV__: false
};

const sassLoaders = [
	'css-loader?sourceMap',
	'postcss-loader',
	'sass-loader?outputStyle=compressed'
];

const PATHS = {
	app: path.resolve(__dirname, './src/js'),
	styles: path.resolve(__dirname, './src/styles'),
	images: path.resolve(__dirname, './src/images'),
	dist: path.resolve(__dirname, './dist')
};

export default {
	debug: true,
	devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
	noInfo: false, // set to false to see a list of every file being bundled.
	entry: path.resolve(PATHS.app, 'index.js'),
	target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
	output: {
		path: PATHS.dist,
		publicPath: '/',
		filename: 'js/[name].js',
		library: '[name]'
	},
	stats: {
		colors: true
	},
	plugins: [
		// Hash the files using MD5 so that their names change when the content changes.
		new WebpackMd5Hash(),

		// Optimize the order that items are bundled. This assures the hash is deterministic.
		new webpack.optimize.OccurenceOrderPlugin(),

		// Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
		new webpack.DefinePlugin(GLOBALS),

		new CopyWebpackPlugin([{from: PATHS.images, to: 'images'}]),

		// Generate an external css file with a hash in the filename
		new ExtractTextPlugin('css/[name].css'),

		// Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
		new HtmlWebpackPlugin({
			template: 'src/index.ejs',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true,
			// Note that you can add custom options here if you need to handle other custom logic in index.html
			// To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
			trackJSToken: ''
		}),

		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel'], include: PATHS.app, exclude: /node_modules/},

			{test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file?name=fonts/[name].[ext]?[hash]'},
			{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]?[hash]"},
			{test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]?[hash]'},
			{test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]?[hash]'},

			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loaders: [
					// root=. - to make support for relative URLs
					'url-loader?limit=10000&root=.&name=images/[name].[ext]'
					,'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
				]
			},
			{test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},

			{test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))},
			{test: /\.css$/, include: PATHS.styles, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')}
		]
	},
	postcss: function () {
		return [autoprefixer({
			browsers: ['last 2 versions', 'IE > 10']
		})];
	}
};


// Loader guides:
// https://github.com/webpack/css-loader#root-relative-urls
// http://stackoverflow.com/questions/33058964/configure-webpack-to-output-images-fonts-in-a-separate-subfolders
// http://stackoverflow.com/questions/34014151/how-to-configure-font-file-output-directory-from-font-awesome-webpack-in-webpack?rq=1
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts
