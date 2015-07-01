define(function(require){

var Backbone = require("backbone");
var MSupermercato = require("../models/MSupermercato");


var CollSupermercati = Backbone.Collection.extend({
		constructorName: "CollSupermercati",
		model: MSupermercato,
                url:"",
                
                fetchSupermercatiHome: function (arrayIdp) {
                    this.url = "http://localhost/MyShopWeb/index.php?func=HomeSup&Id0="+arrayIdp[0]+"&Id1="+arrayIdp[1]+"&Id2="+arrayIdp[2]+"&Id3="+arrayIdp[3]+"&Id4="+arrayIdp[4]+"&Id5="+arrayIdp[5];
                    this.fetch();
                }
	});

return CollSupermercati;
       });
