/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  var VBoxProdotto = require("views/pages/VBoxProdotto");
  
  var CollProdotti = require("../../collections/CollProdotti");
  var CollSupermercati = require("../../collections/CollSupermercati");

  var VHome = Backbone.View.extend({
      
	  constructorName: "VHome",
	  
      listaProdotti: CollProdotti,
  	  listaSupemercati: CollSupermercati,
	  
      initialize: function() {
          this.template=Utils.templates.tabella;
          
      },
      
      tagName: "ul",
      id: "tabella",
      className: "table-view",

      events: {
    	  
       },
       render: function() {
    	    this.$el.html($('content').append(this.template()));
    	    this.addAll();
    	    return this;
       },
       
       addAll: function () {
    	    // clear out the container each time you render index (find,children, remove -> tutte fun. jquery/zepto)
    	    this.$el.find('tabella').children().remove();
    	    //.models -> access to the JavaScript array of models inside of the collection
    	    //.proxy -> this è l'elemento della collection, che passiamo alla fun. addOne
    	    _.each(this.listaProdotti.models, $.proxy(this, 'addOne'));
    	  },

    	  addOne: function (Prodotto) {
    	    var view = new VBoxProdotto({
    	      Prodotto: Prodotto
    	    });
    	    this.$el.find('tabella').append(view.render().el);
    	  },
   
  });
  return VHome;
});


