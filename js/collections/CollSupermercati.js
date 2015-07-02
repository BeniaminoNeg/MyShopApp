define(function(require){

var Backbone = require("backbone");
var MSupermercato = require("../models/MSupermercato");
var CollProdotti = require("../collections/CollProdotti");


var CollSupermercati = Backbone.Collection.extend({
		constructorName: "CollSupermercati",
		model: MSupermercato,
                url:"",
                
                fetchSupermercatiHome: function (listaProdotti) {
                	var stringIds = listaProdotti.getIdsProdotti();
                    this.url = "http://localhost/MyShopWeb/index.php?func=HomeSup&dati="+stringIds;
                    this.fetch();
                }
	});

return CollSupermercati;
       });
