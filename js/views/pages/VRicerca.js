define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var CollProdotti = require("../../collections/CollProdotti");
  var CollSupermercati = require("../../collections/CollSupermercati");

  
  var VHome = require("views/pages/VHome");
  
  var VRicerca = Utils.Page.extend({
      
      constructorName: "VRicerca",
            
      initialize: function(options) {
          this.template=Utils.templates.ricerca;
      },
      
      tagName: "div",
      className: "bar bar-standard bar-header-secondary",

      events: {
         "tap #ricerca": "ricercaProdotti",
       },
       
       render: function() {
    	   this.$el.html(this.template());
    	   return this;
       },
       
       ricercaProdotti: function(){
    	   this.$el.find('#tabella').remove();
    	   
    	   var ricerca = this.$el.find('#value').attr('value');
    	   
    	      var listaProdotti = new CollProdotti();
    	      var listaSupermercati = new CollSupermercati();

    	      var thisView = this;
    	      
       	      listaProdotti.setProdottiRicerca(ricerca);
    	      listaProdotti.fetch().done(function(data){
    	    	  var IdsProdotti = listaProdotti.getIdsProdotti();    	  
    	    	  listaSupermercati.setSupHome(IdsProdotti);
    	    	  listaSupermercati.fetch().done(function(data){
    	              // create the view
    	              var view = new VHome({
    	                listaProdotti: listaProdotti,
    	                listaSupermercati: listaSupermercati
    	              });
    	              // show the view
    	      	    view.render();
    	    	    thisView.$el.append(view.el);
    	    	  })
    	      });
    	   
       }
       
  });
  return VRicerca;
});