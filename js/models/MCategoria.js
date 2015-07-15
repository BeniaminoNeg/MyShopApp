define(function(require) {
	var Backbone = require('backbone');

	var MCategoria = Backbone.Model.extend({
		defaults: {
			Nome: '',
			Immagine: '',
		},
                
		constructorName: 'Categoria',

		initialize: function (){},
	});

	return MCategoria;
});