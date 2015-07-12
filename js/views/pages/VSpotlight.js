define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	
	var VBoxProdotto = require('views/pages/VBoxProdotto');
  
	var CollProdotti = require('../../collections/CollProdotti');
	var CollSupermercati = require('../../collections/CollSupermercati');
  
	var MProdotto = require('../../models/MProdotto');

	var VSpotlight = Utils.Page.extend({
		constructorName: 'VSpotlight',
	  
		currentFollowed: '',
		listaProdotti: CollProdotti,
  	  	listaSupemercati: CollSupermercati,
	  
  	  	initialize: function(options) {
  	  		this.listaProdotti= options.listaProdotti;
  	  		this.listaSupermercati= options.listaSupermercati;
  	  		this.currentFollowed = options.currentFollowed;
          
  	  	},
      
  	  	tagName: 'ul',
  	  	id: 'tabella',
  	  	className: 'table-view',

  	  	events: {
  	  	},
      
  	  	render: function() {
  	  		this.$el.find('ul').children().remove();
  	  		if(this.currentFollowed == 'niente') {
  	  			this.noFollowed();
  	  		} else {
  	  			this.addAll();
  	  		}
  	  		return this;
  	  	},
       
       addAll: function() {
    	   this.$el.find('ul').children().remove();
    	   _.each(this.listaProdotti.models, $.proxy(this, 'addOne'));
       },

       addOne: function(Prodotto) {
    	   var view = new VBoxProdotto({
    		   Prodotto: Prodotto
    	   });
    	   view.render();
    	   this.$el.append(view.el);
       },
    	  
       noFollowed: function(){
    	   this.$el.append('<li>Per ora non stai seguendo nessun prodotto</li>')
       }
	});
	
	return VSpotlight;
});