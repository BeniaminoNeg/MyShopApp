/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  var VBoxProdotto = require("view/pages/VBoxProdotto");
  
  var VHome = Utils.Page.extend({
      
      initialize: function() {
          this.template=Utils.templates.tabella;
          
      },
      
      id: "home",
      className: "table-view",

      events: {
    	  
       },
       
       render: function() {
    	   
    	   this.addAll
    	   
    	   $(this.el).html(boxProdotto(this.listaProdotti.toJSON(), this.listaSupermercati.toJSON()));//Binding tra template e dato
    	   
    	   this.$el.find('body').children().remove();
    	   $(this.el).html(boxProdotto(this.listaProdotti.toJSON(), this.listaSupermercati.toJSON()));//Binding tra template e dato
    	   return this;
       },
       
       addAll: function(){
    	   var boxProdotto = new VBoxProdotto({
 		      notes: this.notes,
 		      note: note
 		    });
 		    this.$el.find("tbody").append(view.render().el);
       },
       
       elaboraJSON : function (data) {
           var jsonpars= $.parse(data);
           for(i=0; i<data.length; i++){
               p[i]= new MProdotto (data.Id, data.Nome, data.Immagine)
               
           }
           Backbone.Model.create()
           var Prodotto1= eval (p1); 
           var Prodotto1= new MProdotto(p1.immagine);
       }
  });
  return VBoxProdotto;
});


