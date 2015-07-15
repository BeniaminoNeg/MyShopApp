define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	
	var VCategorie = Utils.Page.extend({
		constructorName: 'VCategorie',
	  	  
		initialize: function(options) {
			this.template=Utils.templates.categorie;
		},
      
		tagName: 'ul',
		id: 'tabellaCategorie',
  	  	className: 'table-view',

  	  	events: {
			'tap .categoria': 'viewProdotti',
  	  	},
       
  	  	render: function() {
			this.$el.html(this.template());
  	  		return this;
  	  	},
  	  	
  	  	viewProdotti: function(e){
	    	Backbone.history.navigate('categorie/' + $(e.currentTarget).find('#nome').text() , {
		        trigger: true,
		        replace: true
		        });
  	  	}
       
	});
	
	return VCategorie;
});
