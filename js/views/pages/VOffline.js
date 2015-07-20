define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');

	var VOffline = Utils.Page.extend({
		constructorName: 'VOffline',
		            
		initialize: function(options) {
			this.template=Utils.templates.offline;
		},
      
		tagName: 'table',
		className: 'ricarica',
		id: 'offline',

		events: {
			'tap #offline': 'ricarica',
		},
       
		render: function() {
			this.$el.html(this.template());
			return this;
		},

		ricarica: function() {
			
	    	Backbone.history.navigate('home' , {
		        trigger: true,
		        });
		}
	});
  
	return VOffline;
});