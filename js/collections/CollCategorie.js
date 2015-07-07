define(function(require){

var Backbone = require("backbone");
var MCategoria = require("../models/MCategoria");

var CollCategorie = Backbone.Collection.extend({
		constructorName: "CollCategorie",
		model: MCategorie,
                
            setUrlCategorie: function () {
                this.url = "http://localhost/MyShopWeb/index.php?func=Categorie";
            }
	});

return CollCategorie;
       });