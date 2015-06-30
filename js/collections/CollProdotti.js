define(function(require){

	var Backbone = require("backbone");
	var MProdotto = require("models/MProdotto");


	var Prodotti = Backbone.Collection.extend({
			constructorName: "Prodotti",
			model: MProdotto,
			url: "http://localhost/MyShopWeb/Controller/CHome.php"
		});

	return Prodotti;
	       });

		