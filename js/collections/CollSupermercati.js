define(function(require){
	var Backbone = require('backbone');
	var MSupermercato = require('../models/MSupermercato');
	var CollProdotti = require('../collections/CollProdotti');
	
	
	var CollSupermercati = Backbone.Collection.extend({
		constructorName: 'CollSupermercati',
		
		model: MSupermercato,
	        
	    setSupMarket: function () {
	        this.url = 'http://localhost/MyShopWeb/index.php?func=Sup';
	    },
	
		setSupHome: function (IdsSups) {
			this.url = 'http://localhost/MyShopWeb/index.php?func=RicercaSup&dati=' + IdsSups;
		}
	});
	
	return CollSupermercati;
});