// here we put the paths to all the libraries and framework we will use
require.config({
	paths: {
		jquery: '../lib/zepto/zepto', // ../lib/jquery/jquery', 
		underscore: '../lib/underscore/underscore',
		backbone: '../lib/backbone/backbone',
		text: '../lib/require/text',
		async: '../lib/require/async',
		handlebars: '../lib/handlebars/handlebars',
		templates: '../templates',
		leaflet: '../lib/leaflet/leaflet',
		spin: '../lib/spin/spin.min',
		preloader: '../lib/preloader/pre-loader',
		utils: '../lib/utils/utils'
	},
	
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
		'leaflet': {
			exports: 'L'
		}
	}
});

	// We launch the App
require(['backbone', 'utils'], function(Backbone, Utils) {
	require(['preloader', 'router'], function(PreLoader, AppRouter) {
		
		
		
		 Utils.loadTemplates().once('templatesLoaded', function() {
		    		startRouter();
		    	})
		
		    	function startRouter() {
		    		// launch the router
		    		var router = new AppRouter();
		    		Backbone.history.start();
	    }
	});
});