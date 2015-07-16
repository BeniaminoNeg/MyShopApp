define(function(require){
	var Backbone = require('backbone');
	var MSupermercato = require('../models/MSupermercato');
	var CollProdotti = require('../collections/CollProdotti');
	
	
	var CollSupermercati = Backbone.Collection.extend({
		constructorName: 'CollSupermercati',
		
		model: MSupermercato,
	        
	    setSupMarket: function () {
	    	//in locale http://localhost/MyShopWeb/call.php?func=...
	        this.url = 'http://myshopp.altervista.org/call.php?func=Sup';
	    },
	
		setSupHome: function (IdsSups) {
			//in locale http://localhost/MyShopWeb/call.php?func=...
			this.url = 'http://myshopp.altervista.org/call.php?func=RicercaSup&dati=' + IdsSups;
		}
	});
	
	return CollSupermercati;
});