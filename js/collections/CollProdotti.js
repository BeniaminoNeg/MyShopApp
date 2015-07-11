define(function(require){

	var Backbone = require("backbone");
	var MProdotto = require("../models/MProdotto");


	var CollProdotti = Backbone.Collection.extend({
			constructorName: "CollProdotti",
			model: MProdotto,
			
            setProdottiHome : function () {
                this.url="http://localhost/MyShopWeb/index.php?func=HomeProd";
            },
            
            setProdottiSpotlight : function(followed){
            	this.url="http://localhost/MyShopWeb/index.php?func=SpotProdApp&dati=" + followed;
            },
            
            setProdottiCategoria: function(categoria){
            	this.url="http://localhost/MyShopWeb/index.php?func=CategorieProdotti&dati=" + categoria;
            },
            
            setProdottiRicerca : function (value) {
                this.url="http://localhost/MyShopWeb/index.php?func=RicercaProdotto" + value;
            },
            
            getIdsProdotti: function(){
            	var i = 0;
            	var arrayIds = [];
            	var stringIds = "";
            	while(this.at(i)){
                		if (!this.isInArray(this.at(i).get("SupermercatoId"), arrayIds)) {
                			stringIds += this.at(i).get("SupermercatoId") + ",";
                    		arrayIds[i] = this.at(i).get("SupermercatoId"); 
                		}
                		i++;
            	}
            	return stringIds;
            },
             
            isInArray: function(valore, array){
            	return array.indexOf(valore) > -1;
            }
            
		});

	return CollProdotti;
	       });

		