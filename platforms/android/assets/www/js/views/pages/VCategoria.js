define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var MCategoria = require("../../models/MCategoria");
  
  var CollProdotti = require("../../collections/CollProdotti");
  
  var VCategoria = Utils.Page.extend({
      
      constructorName: "VCategoria",
      
      Categoria: MCategoria,
      
      initialize: function(options) {
          this.template=Utils.templates.categoria;
          this.Categoria= options.Categoria;
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
    	   
    	   var categoria = this.$el.find('#nome').text();
    	   var listaProdotti = new CollProdotti();
    	   listaProdotti.setUrlProdottiCategoria(categoria);
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
  return VCategoria;
});