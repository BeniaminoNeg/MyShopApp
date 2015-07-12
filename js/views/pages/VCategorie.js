define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	
	var VCategoria = require('views/pages/VCategoria');
  
	var CollCategorie = require('../../collections/CollCategorie');
  
	var MCategoria = require('../../models/MCategoria');

	var VCategorie = Utils.Page.extend({
		constructorName: 'VCategorie',
	  
		listaCategorie: CollCategorie,
	  
		initialize: function(options) {
			this.template=Utils.templates.tabella;
			this.listaCategorie = options.listaCategorie;
		},
      
		tagName: 'ul',
		id: 'tabellaCategorie',
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
    	  	_.each(this.listaCategorie.models, $.proxy(this, 'addOne'));
  	  	},

  	  	addOne: function (Categoria) {
  	  		var view = new VCategoria({
  	  			Categoria: Categoria
  	  		});
  	  		view.render();
  	  		this.$el.append(view.el);
  	  	}
	});
	
	return VCategorie;
});
