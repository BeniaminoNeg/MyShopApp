define(function(require){

	var Backbone = require("backbone");
	var MProdotto = require("../models/MProdotto");


	var CollProdotti = Backbone.Collection.extend({
			constructorName: "CollProdotti",
			model: MProdotto,
            url:"",                        
            
            fetchProdottiHome : function () {
                this.url="http://localhost/MyShopWeb/index.php?func=HomeProd";
                this.fetch();
                
            },
            
            fetchProdottiRicerca : function () {
                this.url="http://localhost/MyShopWeb/index.php?tobecontinued";
                
            },
            
            getIdsProdotti: function(){
            	var prodotto = new MProdotto();
            	var i = 0;
            	var stringIds;
            	do{
            		prodotto = this.at(i);
            		stringIds += prodotto.get(Ids) + ",";
            		i++;
            	}while(prodotto)
            	return stringIds;
            }
                       
		});

	return CollProdotti;
	       });

		