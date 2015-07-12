define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	
	var VMarket = require('views/pages/VMarket');
  
	var CollSupermercati = require('../../collections/CollSupermercato');
  
	var MSupermercato = require('../../models/MSupermercato');

	var VMarkets = Utils.Page.extend({
		constructorName: 'VMarkets',
	  
		listaSupermercati: CollSupermercati,
	  
		initialize: function(options) {
			this.template=Utils.templates.tabella;
			this.listaSupermecati = options.listaSupermecati
		},
      
		tagName: 'ul',
		id: 'tabellaMarkets',
		className: 'table-view',

		events: {
		},
       
		render: function() {
			this.$el.find('ul').children().remove();
			this.addAll();
			return this;
		},
       
		addAll: function () {
			this.$el.find('ul').children().remove();
			_.each(this.listaSupermercati.models, $.proxy(this, 'addOne'));
		},

		addOne: function (Supermercato) {
			var view = new VMarket({
				Supermercato: Supermercato
			});
    	    view.render();
    	    this.$el.append(view.el);
		}
	});
  
	return VMarkets;
});