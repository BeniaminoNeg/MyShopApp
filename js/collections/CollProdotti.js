define(function(require){
	var Backbone = require('backbone');
	var MProdotto = require('../models/MProdotto');

	var CollProdotti = Backbone.Collection.extend({
		constructorName: 'CollProdotti',
		
		model: MProdotto,
		
        setProdottiHome : function() {
        	//in locale http://localhost/MyShopWeb/call.php?func=...
        	this.url='http://myshopp.altervista.org/call.php?func=HomeProd';
        },
        
        setProdottiSpotlight : function(followed) {
        	followed = followed.slice(0, -1);
        	//in locale http://localhost/MyShopWeb/call.php?func=...
        	this.url='http://myshopp.altervista.org/call.php?func=SpotProdApp&dati=' + followed;
        },
        
        setProdottiCategoria: function(categoria) {
        	//in locale http://localhost/MyShopWeb/call.php?func=...
        	this.url='http://myshopp.altervista.org/call.php?func=RicercaPerCategoria&Categoria=' + categoria;
        },
        
        setProdottiMarket : function(Ids) {
        	//in locale http://localhost/MyShopWeb/call.php?func=...
        	this.url='http://myshopp.altervista.org/call.php?func=Catalogo&Ids=' + Ids;
        },
        
        setProdottiRicerca : function (value) {
        	//in locale http://localhost/MyShopWeb/call.php?func=...
        	this.url='http://myshopp.altervista.org/call.php?func=RicercaPerNome&nome=' + value;
        },
        
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