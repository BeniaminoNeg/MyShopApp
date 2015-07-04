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
            	var i = 0;
            	var stringIds;
            	while(this.at(i)){
            		stringIds += this.at(i).get("Ids") + ","; //nel caso di piu prodotti da medesimo Sup avremo piu id uguali
            		i++;
            	}
            	return stringIds;
            }
                       
		});

	return CollProdotti;
	       });

		