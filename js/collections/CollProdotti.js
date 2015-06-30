define(function(require){

var Prodotti = Backbone.Collection.extend({
		constructorName: "Prodotti",
		model: MProdotto,
                url: "http://localhost/MyShopWeb/Controller/CHome.php"
	});

return Prodotti;
       });

	