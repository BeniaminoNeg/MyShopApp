define(function(require) {
	var Backbone = require('backbone');

	var MIndirizzo = Backbone.Model.extend({
		defaults: {
			Via: '',
			Città: '',
			NumeroCivico: ''
		},
		
		constructorName: 'MIndirizzo',

		initialize: function (){}
	});
	
	return MIndirizzo;
});