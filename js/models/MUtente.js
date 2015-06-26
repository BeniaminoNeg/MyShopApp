define(function(require) {

	var Backbone = require("backbone");

	var MUtente = Backbone.Model.extend({
		defaults: {
			Nome: '',
			Cognome: '',
			Passwd: '',
			Email: '',
			ProdottiOsservati: ''
		},
                
		constructorName: "MUtente",

		initialize: function (){},
                
	});
                
	return MUtente;
});
