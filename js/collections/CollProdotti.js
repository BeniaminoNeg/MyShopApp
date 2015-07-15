define(function(require){
	var Backbone = require('backbone');
	var MProdotto = require('../models/MProdotto');

	var CollProdotti = Backbone.Collection.extend({
		constructorName: 'CollProdotti',
		
		model: MProdotto,
		
        setProdottiHome : function() {
        	this.url='http://localhost/MyShopWeb/index.php?func=HomeProd';
        },
        
        setProdottiSpotlight : function(followed) {
        	followed = followed.slice(0, -1);
        	this.url='http://localhost/MyShopWeb/index.php?func=SpotProdApp&dati=' + followed;
        },
        
        setProdottiCategoria: function(categoria) {
        	this.url='http://localhost/MyShopWeb/index.php?func=RicercaPerCategoria&Categoria=' + categoria;
        },
        
        setProdottiMarket : function(Ids) {
        	this.url='http://localhost/MyShopWeb/index.php?func=Catalogo&Ids=' + Ids;
        },
        
        setProdottiRicerca : function (value) {
            this.url='http://localhost/MyShopWeb/index.php?func=RicercaPerNome&nome=' + value;
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