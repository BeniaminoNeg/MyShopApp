define(function(require) {

	var Backbone = require("backbone");
	var Indirizzo = require("models/MIndirizzo");

        var MSupermercato = Backbone.Model.extend({
	    		defaults: {
	    			Nome: '',
	    			Logo: '',
	    			Indirizzo: '',
	    			Id: ''
	    		},
                
                constructorName: "MSupermercato",

                initialize: function (){},
                
        });

        return MSupermercato;
        
});