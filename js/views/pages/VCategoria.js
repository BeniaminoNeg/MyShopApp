define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var MProdotto = require("../../models/MProdotto");
  var MSupermercato = require("../../models/MSupermercato");
  
  var VBoxProdotto = Utils.Page.extend({
      
      constructorName: "VBoxProdotto",
      
      Prodotto: MProdotto,
      
      initialize: function(options) {
          this.template=Utils.templates.prodotto;
          this.Prodotto= options.Prodotto;
      },
      
      tagName: "li",
      className: "table-view-cell media",

      events: {
         "tap .table-view-cell media": "viewProdotti",
       },
       
       render: function() {
    	   this.$el.html(this.template(this.Prodotto.toJSON()));
    	   this.checkPreferitoLocally();
    	   return this;
       },
       
       viewProdotti: function(){
    	   //tap sulla categoria fa visualizzare i prodotti correlati
       }
       
  });
  return VBoxProdotto;
});