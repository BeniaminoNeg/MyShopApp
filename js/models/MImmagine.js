define(function(require) {
	var Backbone = require('backbone');

	var MImmagine = Backbone.Model.extend({
		defaults: {
			Size: '',
			Type: '',
			Immagine: '',
			Id: '',
		},
		
		constructorName: 'MImmagine',

		initialize: function (){},
		
        setImmagine : function(id) {
        	//in locale http://localhost/MyShopWeb/call.php?func=...
        	this.url='http://myshopp.altervista.org//call.php?func=GetImmagine&Id=' + id;
        },
	});
	
	return MImmagine;
});