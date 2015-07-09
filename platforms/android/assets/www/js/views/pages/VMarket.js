define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var MProdotto = require("../../models/MProdotto");
  var MSupermercato = require("../../models/MSupermercato");
  
  var VMarket = Utils.Page.extend({
      
      constructorName: "VMarket",
      
      Supermercato: MSupermercato,
      
      initialize: function(options) {
          this.template=Utils.templates.market;
          this.Supermercato= options.supermercato;
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
    	   
    	   var supermercato = this.$el.find('#ids').text();
    	   var listaProdotti = new CollProdotti();
    	   listaProdotti.setUrlProdottiSupermercato(supermercato);
           listaProdotti.fetch().done(function(data){
               // create the view
               var page = new VHome({
                 listaProdotti: listaProdotti,
               });
               // show the view
               thisRouter.changePage(page);
           });
    	   
       }
       
  });
  return VMarket;
});