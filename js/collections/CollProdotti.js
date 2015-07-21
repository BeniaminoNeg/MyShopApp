define(function(require){
	var Backbone = require('backbone');
	var MProdotto = require('../models/MProdotto');

	var CollProdotti = Backbone.Collection.extend({
		constructorName: 'CollProdotti',
		
		model: MProdotto,
		
        setProdottiHome : function() {
        	this.url='http://localhost/MyShopWeb/call.php?func=HomeProd';
        	//this.url='http://myshopp.altervista.org/call.php?func=HomeProd';
        },
        
        setProdottiSpotlight : function(followed) {
        	followed = followed.slice(0, -1);
        	this.url='http://localhost/MyShopWeb/call.php?func=SpotProdApp&dati=' + followed;
        	//this.url='http://myshopp.altervista.org/call.php?func=SpotProdApp&dati=' + followed;
        },
        
        setProdottiCategoria: function(categoria) {
        	this.url='http://localhost/MyShopWeb/call.php?func=RicercaPerCategoria&Categoria=' + categoria;
        	//this.url='http://myshopp.altervista.org/call.php?func=RicercaPerCategoria&Categoria=' + categoria;
        },
        
        setProdottiMarket : function(Ids) {
        	this.url='http://localhost/MyShopWeb/call.php?func=Catalogo&Ids=' + Ids;
        	//this.url='http://myshopp.altervista.org/call.php?func=Catalogo&Ids=' + Ids;

        },
        
        setProdottiRicerca : function (value) {
        	this.url='http://localhost/MyShopWeb/call.php?func=RicercaPerNome&nome=' + value;
        	//this.url='http://myshopp.altervista.org/call.php?func=RicercaPerNome&nome=' + value;
        },
/* 
 * prova inserire immagini nei model
        getImmagini: function(){
        	_.each(this.models, function(data){
        		data.getImmagine();
        	})
    	   // _.each(this.models, $.proxy(this.__proto__.model.prototype, 'getImmagine'));
        },
*/        
        getIdsProdotti: function(){
        	var i = 0;
        	var j = 0;
        	var arrayIds = [];
        	while(this.at(i)){
        		if (!this.isInArray(this.at(i).get('SupermercatoId'), arrayIds)) {
               		arrayIds[j] = this.at(i).get('SupermercatoId'); 
               		j++;
           		}
        		i++;
        	}
       		stringIds = arrayIds.join(',');
       		return stringIds;
        },
         
        isInArray: function(valore, array){
        	return array.indexOf(valore) > -1;
        }
	});

	return CollProdotti;
});