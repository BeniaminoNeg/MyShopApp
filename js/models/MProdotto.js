define(function(require) {

	var Backbone = require("backbone");

        var MProdotto = Backbone.Model.extend({
                defaults: {
                    Id: '',
					Nome: '',
					Immagine: '',
					Descrizione: '',
					Prezzo: '',
					SupermercatoId: ''
                },
                constructorName: "MProdotto",

                initialize: function (){},
                
                toJSON: function(options) {
                    return _.clone(this.attributes);
                  },
        });

        return MProdotto;
        
});