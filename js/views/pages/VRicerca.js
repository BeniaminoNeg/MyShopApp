define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  var MCategoria = require("../../models/MCategoria");
  
  var CollProdotti = require("../../collections/CollProdotti");
  
  var VRicerca = Utils.Page.extend({
      
      constructorName: "VRicerca",
      
      Categoria: MCategoria,
      
      initialize: function(options) {
          this.template=Utils.templates.ricerca;
      },
      
      tagName: "div",
      className: "bar bar-standard bar-header-secondary",

      events: {
         "tap .table-view-cell media": "viewProdotti",
       },
       
       render: function() {
    	   this.$el.html(this.template(this.Prodotto.toJSON()));
    	   this.checkPreferitoLocally();
    	   return this;
       },
       
       viewProdotti: function(){
    	   
    	   var ricerca = this.$el.find('#ricerca').text();
    	   var listaProdotti = new CollProdotti();
    	   listaProdotti.setUrlProdottiRicerca(ricerca);
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
  return VRicerca;
});