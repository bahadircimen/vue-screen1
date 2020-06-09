let config = {
	presets: [
		[
			"@babel/env", {
			"targets": {
				"browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
			},
			"useBuiltIns": "entry",
			"corejs": "3.0.0"
		}
		],
		[
			'@vue/app', {
			polyfills: [
				'es6.array.iterator',
				'es6.promise'
			]
		}
		]
	],
	plugins: [
		"minify-dead-code-elimination",
		["@babel/plugin-transform-runtime", {"regenerator": true}],
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-optional-chaining",
		["babel-plugin-root-import", {
			"paths": [
				{
					"rootPathSuffix": "./src/components",
					"rootPathPrefix": "@components/"
				},
				{
					"rootPathSuffix": "./src/utils",
					"rootPathPrefix": "@utils/"
				},
				{
					"rootPathSuffix": "./src/containers",
					"rootPathPrefix": "@containers/"
				},
				{
					"rootPathSuffix": "./src/screens",
					"rootPathPrefix": "@screens/"
				}
			]
		}],
		"babel-plugin-transform-remove-undefined",
		"transform-merge-sibling-variables",
		"transform-minify-booleans"
	],
};
if (process.env.NODE_ENV !== "development") {
	config.plugins.push(["transform-remove-console", {"exclude": ["error", "warn"]}],);
}
module.exports = config;
