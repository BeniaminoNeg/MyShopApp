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
      
      id: "home",
      className: "table-view",

      events: {
    	  
       },
       render: function() {
    	    this.$el.html($('#content').append(this.template()));
    	    this.addAll();
    	    return this;
       },
       
       addAll: function () {
    	    // clear out the container each time you render index (find,children, remove -> tutte fun. jquery/zepto)
    	    this.$el.find('ul').children().remove();
    	    //.models -> access to the JavaScript array of models inside of the collection
    	    //.proxy -> this è l'elemento della collection, che passiamo alla fun. addOne
    	    _.each(this.listaProdotti.models, $.proxy(this, 'addOne'));
    	  },

    	  addOne: function (Prodotto) {
    	    var view = new VBoxProdotto({
    	      Prodotto: Prodotto
    	    });
    	    this.$el.find("ul").append(view.render().el);
    	  },
       
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
  });
  return VBoxProdotto;
});


