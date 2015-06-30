define(function(require){

var Backbone = require("backbone");
var MSupermercato = require("../models/MSupermercato");


var Supermercati = Backbone.Collection.extend({
		constructorName: "Supermercati",
		model: MSupermercato
	});

return Supermercati;
       });
