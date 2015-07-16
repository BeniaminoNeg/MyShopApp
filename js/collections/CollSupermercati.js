define(function(require){
	var Backbone = require('backbone');
	var MSupermercato = require('../models/MSupermercato');
	var CollProdotti = require('../collections/CollProdotti');
	
	
	var CollSupermercati = Backbone.Collection.extend({
		constructorName: 'CollSupermercati',
		
		model: MSupermercato,
	        
	    setSupMarket: function () {
	    	//in locale http://localhost/MyShopWeb/index.php?func=...
	        this.url = 'http://myshopp.altervista.org/index.php?func=Sup';
	    },
	
		setSupHome: function (IdsSups) {
			//in locale http://localhost/MyShopWeb/index.php?func=...
			this.url = 'http://myshopp.altervista.org/index.php?func=RicercaSup&dati=' + IdsSups;
		}
	});
	
	return CollSupermercati;
});