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
  
  var MProdotto = require("../../models/MProdotto");

  var VHome = Backbone.View.extend({
      
	  constructorName: "VHome",
	  
      listaProdotti: CollProdotti,
  	  listaSupemercati: CollSupermercati,
	  
      initialize: function() {
          //this.template=Utils.templates.tabella;
          
      },
      
      tagName: "ul",
      id: "tabella",
      className: "table-view",

      events: {
    	  
       },
       render: function() {
    	    //this.$el.html($('content').append(this.template()));
    	    this.addAll();
    	    return this;
       },
       
       addAll: function () {
    	    // clear out the container each time you render index (find,children, remove -> tutte fun. jquery/zepto)
    	    
    	   //$(this.el).find('tabella').children().remove();
    	      var listaProdotti2 = new CollProdotti([
    	                                    		{
    	                                    		  "Id":"009",
    	                                    		  "Nome":"Riso Scotti ai funghi porcini",
    	                                    		  "Immagine": "../img/es_prodotto.jpg",
    	                                    		  "Descrizione":"Riso scotti ai funghi porcini 210g",
    	                                    		  "Prezzo":"1.55",
    	                                    		  "SupermercatoId":"00003"
    	                                    		},
    	                                    		  
    	                                    		{
    	                                			  "Id":"010",
    	                                			  "Nome":"Riso scotti agli asparagi",
    	                                			  "Immagine": "../img/es_prodotto.jpg",
    	                                			  "Descrizione":"Riso scotti agli asparagi gr.210",
    	                                			  "Prezzo":"1.55",
    	                                			  "SupermercatoId":"00002"
    	                                    		}
    	                                      ]);
    	   
    	   $(this.el).html($('tabella').children().remove());
    	   
    	   //.models -> access to the JavaScript array of models inside of the collection
    	    //.proxy -> this è l'elemento della collection, che passiamo alla fun. addOne
    	    //alert(listaProdotti2.at(1).get("Id"));  //prova per vedere se funzionava la collection
    	    
    	   _.each(listaProdotti2.models, function (Prodotto) {
       	    var view = new VBoxProdotto({
      	      Prodotto: Prodotto
      	    });
       	    $(this.el).html($('tabella').append(view.render().el));
      	  });
    	  },

    	  addOne: function (Prodotto) {
    	    var view = new VBoxProdotto({
    	      Prodotto: Prodotto
    	    });
    	    //this.$el.find('tabella').append(view.render().el);
    	    $(this.el).html($('tabella').append(view.render().el));
    	  },
   
  });
  return VHome;
});


