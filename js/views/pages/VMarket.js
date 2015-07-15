define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	
	var CollProdotti = require("../../collections/CollProdotti");
	var CollSupermercati = require('../../collections/CollSupermercati');
  
	var MProdotto = require('../../models/MProdotto');
	var MSupermercato = require('../../models/MSupermercato');
	var MImmagine = require('../../models/MImmagine');

  
	var VMarket = Utils.Page.extend({
		constructorName: 'VMarket',
      
		Supermercato: MSupermercato,
      
     	initialize: function(options) {
     		this.template=Utils.templates.market;
     		this.Supermercato= options.Supermercato;
     	},
      
     	tagName: 'li',
     	className: 'table-view-cell media',
     	id: 'market',

     	events: {
     		'tap #market': 'viewCatalogo',
     	},
       
     	render: function() {
     		this.$el.html(this.template(this.Supermercato.toJSON()));
			this.getLogo();
     		return this;
     	},
       
     	viewCatalogo: function(){
     		this.$el.find('#tabellaMarkets').remove();
    	   
     		var ids = this.Supermercato.get('Ids');
    	   
    		var listaProdotti = new CollProdotti();
    		var listaSupermercati = new CollSupermercati();

    		var thisView = this;
    	      
    		listaProdotti.setProdottiMarket(ids);
    		listaProdotti.fetch().done(function(data){
    			listaSupermercati.add(this.Supermercato);

    			var view = new VHome({
    				listaProdotti: listaProdotti,
    				listaSupermercati: listaSupermercati
    			});
	      	    view.render();
	    	    thisView.$el.append(view.el);
    		});
     	},
     	
        getLogo: function() {
        	var ids = this.Supermercato.get('Ids');
        	this.ImmagineSup = new MImmagine();
        	this.ImmagineSup.setImmagine(ids);
        	
        	var thisView = this;
        	
			thisView.ImmagineSup.fetch().done(function(data) {
				$(thisView.el).find('#logo').attr('src', 'data:image/' + thisView.ImmagineSup.get('Type') +';base64,' + thisView.ImmagineSup.get('Immagine'));
			});
        }
	});
	
	return VMarket;
});