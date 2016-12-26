var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry:{
		bundle:['./src/app.js']
	},
	output:{
		path: __dirname,
		publicPath:'/',
		filename:'dist/[name].js'
	},
	module:{
		loaders:[
			{ test: /\.html$/, loaders:['html']},
			{ test: /\.js$/, loaders:['babel'], exclude:/node_modules/}
		]
	},
	resolve:{
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	plugins:[
	/*
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})

		*/
	]
}