define(function(require){

	var Backbone = require("backbone");
	var MProdotto = require("../models/MProdotto");


	var CollProdotti = Backbone.Collection.extend({
			constructorName: "CollProdotti",
			model: MProdotto,
                        url:"",
			//url: "http://localhost/MyShopWeb/Controller/CHome.php",
                        
                        
                        fetchProdottiHome : function () {
                            this.url="http://localhost/MyShopWeb/index.php?func=HomeProd";
                            this.fetch();
                            
                        },
                        
                        fetchProdottiRicerca : function () {
                            this.url="http://localhost/MyShopWeb/index.php?tobecontinued";
                            //
                            
                        }
                       
		});

	return CollProdotti;
	       });

		