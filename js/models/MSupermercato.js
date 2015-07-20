define(function(require) {
	var Backbone = require('backbone');
	
	var MImmagine = require('models/MImmagine');

	var MSupermercato = Backbone.Model.extend({
		defaults: {
			Nome: '',
			//Logo: '', //prova immagini nei model
			Indirizzo: '',
			Ids: '',                        
		},
                
		constructorName: 'MSupermercato',

		initialize: function (){},
/*
 * prova inserire immagini nei model
	    getImmagine: function(){
        	Logo = new MImmagine;
        	this.set('Logo', Logo);
        	this.get('Logo').setImmagine(this.get('Ids'));
        	
        	var thisSupermercato = this;
        	
			this.get('Logo').fetch().done(function(data){
				thisSupermercato.get('Logo').setImmagineToHtml();
			})
	    }
*/
	});

	return MSupermercato;
});