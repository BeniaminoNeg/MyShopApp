define(function(require) {
	var Backbone = require('backbone');

	var MImmagine = Backbone.Model.extend({
		defaults: {
			Size: '',
			Type: '',
			Immagine: '',
			//ImmagineHtml: '', //prova inserire immagini nei model
			Id: '',
		},
		
		constructorName: 'MImmagine',

		initialize: function (){},
		
        setImmagine: function(id) {
        	this.url='http://localhost/MyShopWeb/call.php?func=GetImmagine&Id=' + id;
        	//this.url='http://myshopp.altervista.org//call.php?func=GetImmagine&Id=' + id;
        },
/*
 * prova inserire immagini nei model
        setImmagineToHtml: function(){
			this.set('ImmagineHtml',  'data:image/' + this.get('Type') + ';base64,' + this.get('Immagine'));
        } 
*/
	});
	
	return MImmagine;
});