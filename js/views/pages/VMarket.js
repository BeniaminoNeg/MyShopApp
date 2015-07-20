define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
	  
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
     		'tap #supermercato': 'viewProdotti',
			'tap .map': 'viewMappa', 
     	},
       
     	render: function() {
     		this.$el.html(this.template(this.Supermercato.toJSON()));
			this.getLogo();
     		return this;
     	},
       
  	  	viewProdotti: function(e){
  	  			Backbone.history.navigate('markets/' + $(e.currentTarget).find('#ids').text() + '_' + $(e.currentTarget).find('#nome').text(), { //S00001_Conad
		        trigger: true,
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
        },
        
  	  	//COLLEGAMENTO ESTERNO A GOOGLE MAPS 'https://www.google.it/maps/search/'stringhe successive divise da +
  	  	viewMappa: function(e){
  	  		console.log('https://www.google.it/maps/search/' + $(this.el).find('#nome').text() + ' ' +
						$(this.el).find('#città').text() + ' ' +
							$(this.el).find('#via').text());
  	  		var ref = cordova.InAppBrowser.open('https://www.google.it/maps/search/' + $(this.el).find('#nome').text() + ' ' +
  	  																					$(this.el).find('#città').text() + ' ' +
  	  																					$(this.el).find('#via').text(),
  	  																					'_self', 'location=yes');
  	  	}
	});
	
	return VMarket;
});