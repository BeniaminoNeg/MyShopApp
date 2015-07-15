define(function(require) {
	var Backbone = require('backbone');
	
	var Indirizzo = require('models/MIndirizzo');

	var MSupermercato = Backbone.Model.extend({
		defaults: {
			Nome: '',
			Logo: '',
			Indirizzo: '',
			Ids: '',
                        
		},
                
		constructorName: 'MSupermercato',

		initialize: function (){},
	});

	return MSupermercato;
});
//COLLEGAMENTO ESTERNO A GOOGLE MAPS 'https://www.google.it/maps/search/'stringhe successive divise da +