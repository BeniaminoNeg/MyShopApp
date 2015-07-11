define(function(require){

var Backbone = require("backbone");
var MSupermercato = require("../models/MSupermercato");
var CollProdotti = require("../collections/CollProdotti");


var CollSupermercati = Backbone.Collection.extend({
		constructorName: "CollSupermercati",
		model: MSupermercato,
                
            setSupMarket: function (listaProdotti) {
                this.url = "http://localhost/MyShopWeb/index.php?func=Market";
            },

			setSupHome: function (IdsSups) {
			    this.url = "http://localhost/MyShopWeb/index.php?func=HomeSup&dati=" + IdsSups;
			}
	});

return CollSupermercati;
       });
