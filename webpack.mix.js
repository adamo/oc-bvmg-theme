let mix = require('laravel-mix');

mix.setPublicPath('/')
mix.js('./assets/src/main.js', 'assets/js/').sass('./assets/scss/main.scss', 'assets/css/');

mix.browserSync({
	proxy: 'bvmg.local',
	host: 'bvmg.local',
	notify: false,
	files: ["./assets/css/*.css",
			"./**/*.htm",
			"./assets/js/*.js",
			]
});

mix.minify(["./assets/css/main.css","./assets/js/main.js"]);
mix.sourceMaps(); // Enable sourcemaps

mix.options({
  processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

mix.webpackConfig({
    devtool: "inline-source-map",
  	plugins: [{
    	apply(compiler) {
      		// Intercept done hook to modify CustomTasksPlugin tap function
	      	compiler.hooks.done.intercept({
	        	register: (tapInfo) => {
	          		let firstRun = true;
	          		if (tapInfo.name === "CustomTasksPlugin") {
	            		const fn = tapInfo.fn;
	            		tapInfo.fn = (stats, callback, ...args) => {
		              		// Only run tap function (tasks) for first build
		              		if (firstRun) {
		                		fn(stats, callback, ...args);
		                		firstRun = false;
		              		} else {
		                		callback();
		              		}
		            	};
	          		}
	          		return tapInfo;
	        	}
	      	})
	    }
	}],
});

mix.version();