define(function(require){
	var Backbone = require('backbone');
	var MCategoria = require('../models/MCategoria');
	
	var CollCategorie = Backbone.Collection.extend({
		constructorName: 'CollCategorie',
		
		model: MCategoria,
	                
		setCategorie: function () {
			this.url = 'http://localhost/MyShopWeb/index.php?func=Categorie';
			this.fetch;
	            }
	});
	
	return CollCategorie;
});