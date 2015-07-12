/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  var VMarket = require("views/pages/VMarket");
  
  var CollSupermercati = require("../../collections/CollSupermercato");
  
  var MSupermercato = require("../../models/MSupermercato");

  var VMarkets = Utils.Page.extend({
      
	  constructorName: "VMarkets",
	  
  	  listaSupermercati: CollSupermercati,
	  
      initialize: function(options) {
          this.template=Utils.templates.tabella;
    	  this.listaSupermecati = options.listaSupermecati
          
      },
      
      tagName: "ul",
      id: "tabellaMarkets",
      className: "table-view",

      events: {
    	  
       },
       render: function() {
    	   this.$el.find('ul').children().remove();
    	   this.addAll();
    	   return this;
       },
       
       addAll: function () {
    	    // clear out the container each time you render index (find,children, remove -> tutte fun. jquery/zepto)
    	    this.$el.find('ul').children().remove();
    	   //.models -> access to the JavaScript array of models inside of the collection
    	    //.proxy -> this è l'elemento della collection, che passiamo alla fun. addOne
    	   _.each(this.listaSupermercati.models, $.proxy(this, 'addOne'));
    	  },

    	  addOne: function (Supermercato) {
    	    var view = new VMarket({
    	      Supermercato: Supermercato
    	    });
    	    view.render();
    	    this.$el.append(view.el);
    	  },
   
  });
  return VMarkets;;
});