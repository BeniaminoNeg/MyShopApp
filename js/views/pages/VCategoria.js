define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
  
	var MCategoria = require('../../models/MCategoria');
  
	var CollProdotti = require('../../collections/CollProdotti');
  
	var VCategoria = Utils.Page.extend({
		constructorName: 'VCategoria',
      
		Categoria: MCategoria,
      
		initialize: function(options) {
			this.template=Utils.templates.categoria;
			this.Categoria= options.Categoria;
		},
      
		tagName: 'li',
		className: 'table-view-cell media',
		id: 'categoria',

		events: {
			'tap #categoria': 'viewProdotti',
		},
       
		render: function() {
			this.$el.html(this.template(this.Prodotto.toJSON()));
			this.checkPreferitoLocally();
			return this;
		},
       
		viewProdotti: function() {
			this.$el.find('#tabellaCategorie').remove();
    	   
			var categoria = this.Categoria.get('Nome');
    	   
			var listaProdotti = new CollProdotti();
    	    var listaSupermercati = new CollSupermercati();

    	    var thisView = this;
    	      
       	   	listaProdotti.setProdottiCategoria(categoria);
       	   	listaProdotti.fetch().done(function(data) {
       	   		var IdsProdotti = listaProdotti.getIdsProdotti();    	  
       	   		listaSupermercati.setSupHome(IdsProdotti);
       	   		listaSupermercati.fetch().done(function(data) {
       	   			var view = new VHome({
       	   				listaProdotti: listaProdotti,
    	                listaSupermercati: listaSupermercati
       	   			});
    	      	    view.render();
    	    	    thisView.$el.append(view.el);
       	   		})
       	   	});
		}
	});
  
	return VCategoria;
});