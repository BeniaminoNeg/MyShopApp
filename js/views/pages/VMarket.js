define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
  
	var MProdotto = require('../../models/MProdotto');
	var MSupermercato = require('../../models/MSupermercato');
  
	var VMarket = Utils.Page.extend({
		constructorName: 'VMarket',
      
		Supermercato: MSupermercato,
      
     	initialize: function(options) {
     		this.template=Utils.templates.market;
     		this.Supermercato= options.supermercato;
     	},
      
     	tagName: 'li',
     	className: 'table-view-cell media',
     	id: 'market',

     	events: {
     		'tap #market': 'viewProdotti',
     	},
       
     	render: function() {
     		this.$el.html(this.template(this.Prodotto.toJSON()));
     		this.checkPreferitoLocally();
     		return this;
     	},
       
     	viewProdotti: function(){
     		this.$el.find('#tabellaMarkets').remove();
    	   
     		var market = this.Supermercato.get('Ids');
    	   
    		var listaProdotti = new CollProdotti();
    		var listaSupermercati = new CollSupermercati();

    		var thisView = this;
    	      
    		listaProdotti.setProdottiSupermercato(market);
    		listaProdotti.fetch().done(function(data){
    			listaSupermercati.add(this.Supermercato);

    			var view = new VHome({
    				listaProdotti: listaProdotti,
    				listaSupermercati: listaSupermercati
    			});
	      	    view.render();
	    	    thisView.$el.append(view.el);
    		});
     	}
	});
	
	return VMarket;
});