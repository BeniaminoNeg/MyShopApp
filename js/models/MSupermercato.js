define(function(require) {

	var Backbone = require("backbone");
	var Indirizzo = require("MIndirizzo");
	var Prodotto = require ("MProdotto");

	var MSupermercato = Backbone.Model.extend({
		defaults: {
			Nome: '',
			Catalogo: '',
			Logo: '',
			Indirizzo: '',
			Id: ''
		},
		constructorName: "MSupermercato"

		initialize: function (){
			})
		addProdotto: function (Prodotto) {
			var IdCercato= Prodotto.Id;
			if (this.VerificaProdotto(IdCercato)==false)
				{
				Lunghezza = this.Catalogo.length;
				this.Catalogo[Lunghezza]=Prodotto;
				}
		}

		getProdotto: function (IdProdotto) {
			prodottocercato = false;
			for (var value in Catalogo)
			{
				if (Typeof(value)!=null)
				{
					if (value.Id == IdProdotto)
					{
						prodottocercato=value;
					}
				}

			}
			return prodottocercato;
		}


		VerificaProdotto: function (IdProdotto) {
			prodottotrovato = false;
			for (var value in Catalogo)
			{
				if (Typeof(value)!=null)
				{
					if (value.Id == IdProdotto)
					{
						prodottotrovato=true;
					}
				}

			}
			return prodottotrovato;
		}
		return MSupermercato;
	});
