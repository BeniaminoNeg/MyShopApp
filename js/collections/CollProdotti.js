define(function(require){

	var Backbone = require("backbone");
	var MProdotto = require("../models/MProdotto");


	var CollProdotti = Backbone.Collection.extend({
			constructorName: "CollProdotti",
			model: MProdotto,
			
            setUrlProdottiHome : function () {
                this.url="http://localhost/MyShopWeb/index.php?func=HomeProdotti";              
            },
            
            setUrlProdottiSpotlight : function(followed){
            	this.url="http://localhost/MyShopWeb/index.php?func=SpotlightProdotti&dati=" + followed;
            },
            
            setUrlProdottiCategoria: function(categoria){
            	this.url="http://localhost/MyShopWeb/index.php?func=CategorieProdotti&dati=" + categoria;
            },
            
            setUrlProdottiRicerca : function (value) {
                this.url="http://localhost/MyShopWeb/index.php?func=RicercaProdotto" + value;
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

		