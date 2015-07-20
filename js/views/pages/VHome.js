define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	
	var VBoxProdotto = require('views/pages/VBoxProdotto');
  
	var CollProdotti = require("../../collections/CollProdotti");
	var CollSupermercati = require('../../collections/CollSupermercati');
  
	var MProdotto = require('../../models/MProdotto');
	var MSupermercato = require('../../models/MSupermercato');
  
	var VHome = Utils.Page.extend({
		constructorName: 'VHome',
	  
		listaProdotti: CollProdotti,
  	  	listaSupemercati: CollSupermercati,
  	  	result: '',
	  
  	  	initialize: function(options) {
  	  		this.listaProdotti= options.listaProdotti;
  	  		this.listaSupermercati= options.listaSupermercati;
  	  		this.result = options.result;
  	  	},
  	  	
  	  	tagName: 'ul',
  	  	id: 'tabella',
  	  	className: 'table-view',
  	  	
  	  	events: {
  	  	},
  	  	
  	  	render: function() {
  	  		this.$el.find('#tabella').remove();
  	  		if(this.result == 'empty') {
  	  			this.noProdotti();
  	  		} else {
  	  			this.addAll();
  	  		}
  	  		return this;
  	  	},
       
  	  	addAll: function () {
  	  		// clear out the container each time you render index (find,children, remove -> tutte fun. jquery/zepto)
    	    this.$el.find('#tabella').children().remove();
    	    //.models -> access to the JavaScript array of models inside of the collection
    	    //.proxy -> this è l'elemento della collection, che passiamo alla fun. addOne
    	    _.each(this.listaProdotti.models, $.proxy(this, 'addOne'));
  	  	},

  	  	addOne: function (Prodotto) {
			var Supermercato = this.listaSupermercati.where({Ids: Prodotto.get('SupermercatoId')});
	    	var view = new VBoxProdotto({
	    		Prodotto: Prodotto,
	    		Supermercato: Supermercato['0'],
	    	});
	    	view.render();
	    	this.$el.append(view.el);
  	  	},
  	  	
        noProdotti: function(){
     	   //this.$el.append('<div class=\'emptyResult\'><a><img class=\'\' src=\'../img/empty.png\'></a></div>')
     	   this.$el.append('<table id=\'offline\'\'><tr><td valign=\'middle\' align=\'center\'><img src=\'./img/empty.png\'><p>Non ci sono prodotti in questa sezione</p></td></tr></table>');
        }
	});
	
	return VHome;
});