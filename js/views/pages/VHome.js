/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  var VBoxProdotto = require("view/pages/VBoxProdotto");
  
  var VHome = Backbone.View.extend({
      
      initialize: function() {
          this.template=Utils.templates.tabella;
          
      },
      
      id: "home",
      className: "table-view",

      events: {
    	  
       },
       
<<<<<<< Updated upstream
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
=======
       render: function() {           
       //jQuery.getJSON("http://localhost/MyShopWeb/Controller/CHome",elaboraJSON);//VORREI FARE QUÌ LE ISTANZE DEI MODEL
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
>>>>>>> Stashed changes
       },
       
       /*elaboraJSON : function (data) {
           var jsonpars= $.parse(data);
           for(i=0; i<data.length; i++){
               p[i]= new MProdotto (data.Id, data.Nome, data.Immagine)
               
           }
           Backbone.Model.create()
           var Prodotto1= eval (p1); 
           var Prodotto1= new MProdotto(p1.immagine);
<<<<<<< Updated upstream
       }
=======
       },*/
       
       
       ProdPiuDettagli: function (e) {//ci manca il pulsante per tenere traccia
         $(this.el).removeClass("icon-down-nav");
         $(this.el).addClass("icon-up-nav");
         $(this.el).children("<div>").removeClass("displaynone");
         $(this.el).children("<div>").addClass("displayblock");
       },
       
       ProdMenoDettagli: function (e) {
         $(this.el).removeClass(".icon-up-nav");
         $(this.el).addClass(".icon-down-nav");
         $(this.el).children("<div>").removeClass("displayblock");
         $(this.el).children("<div>").addClass("displaynone");
       },
       
       addPreferito: function (e) {
         $(this.el).removeClass("unfollowed");
         $(this.el).addClass("followed");
         $(this.addPreferitoLocally($(this.el).parent(".id").getData()));
         $(this.el).children("<span>").removeClass("icon icon-star");
         $(this.el).children("<span>").addClass("icon icon-star-filled");
       },
       
       removePreferito: function (e) {
         $(this.el).removeClass("followed");
         $(this.el).addClass("unfollowed");
         $(this.removePreferitoLocally($(this.el).parent(".id").getData()));
         $(this.el).children("<span>").removeClass("icon icon-star-filled");
         $(this.el).children("<span>").addClass("icon icon-star");
       },
       
       addPreferitoLocally: function(toFollow) {
        var currentfollowed = JSON.parse(window.localStorage.getItem("followed"));
        if(!currentfollowed){
            currentfollowed = new Array();
        }
        currentfollowed.push("toFollow");
        window.localStorage.setItem("followed", JSON.stringify(user));
        },
        
       removePreferitoLocally: function(toUnfollow){
        var currentfollowed = JSON.parse(window.localStorage.getItem("followed"));
        currentfollowed.removeEl = function(toUnfollow) {
            this.splice(array.indexOf(toUnfollow), 1);
        };
        window.localStorage.setItem("followed", JSON.stringify(user));
        }
>>>>>>> Stashed changes
  });
  return VBoxProdotto;
});


