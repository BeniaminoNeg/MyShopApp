define(function(require) {
	var Backbone = require('backbone');

	var MImmagine = require('models/MImmagine');

	var MProdotto = Backbone.Model.extend({
		defaults: {
	        Id: '',
			Nome: '',
			//Immagine: '', //prova inserire immagini nei model
			Descrizione: '',
			Prezzo: '',
			SupermercatoId: '',
	    },
                
	    constructorName: 'MProdotto',

	    initialize: function (){},
/*
 * prova inserire immagini nei model
	    getImmagine: function(){
        	Immagine = new MImmagine;
        	this.set('Immagine', Immagine);
        	this.get('Immagine').setImmagine(this.get('Id'));
        	
        	var thisProdotto = this;
        	
			this.get('Immagine').fetch().done(function(data){
				thisProdotto.get('Immagine').setImmagineToHtml();
			})
	    }
*/
	});

	return MProdotto;    
});