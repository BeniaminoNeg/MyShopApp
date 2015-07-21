define(function(require){
	var Backbone = require('backbone');
	var MSupermercato = require('../models/MSupermercato');	
	
	var CollSupermercati = Backbone.Collection.extend({
		constructorName: 'CollSupermercati',
		
		model: MSupermercato,
	        
	    setSupMarket: function () {
	        this.url = 'http://localhost/MyShopWeb/call.php?func=Sup';
	        //this.url = 'http://myshopp.altervista.org/call.php?func=Sup';
	    },
	
		setSupHome: function (IdsSups) {
			this.url = 'http://localhost/MyShopWeb/call.php?func=RicercaSup&dati=' + IdsSups;
			//this.url = 'http://myshopp.altervista.org/call.php?func=RicercaSup&dati=' + IdsSups;
		},
/*
 * prova inseire immagini nei model
        getImmagini: function(){
        	_.each(this.models, function(data){
        		data.getImmagine();
        	})
    	    //_.each(this.models, $.proxy(this.__proto__.model.prototype, 'getImmagine'));
        }
*/
	});
	
	return CollSupermercati;
});