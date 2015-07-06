define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var MProdotto = require("../../models/MProdotto");
  var MSupermercato = require("../../models/MSupermercato");
  
  var VBoxProdotto = Utils.Page.extend({
      
      constructorName: "VBoxProdotto",
      
      Prodotto: MProdotto,
      
      initialize: function(options) {
          this.template=Utils.templates.prodotto;
          this.Prodotto= options.Prodotto;
      },
      
      tagName: "li",
      className: "table-view-cell media",

      events: {
         "tap #dettagli": "ProdDettagli",
         
         "tap .followed": "addPreferito",
         "tap .unfollowed": "removePreferito"
       },
       
       render: function() {
    	   this.$el.html(this.template(this.Prodotto.toJSON()))
    	  //this.$el.append(this.template(this.Prodotto.toJSON));
    	   //this.$el.html(_.template($('<ul>').html(), this.Prodotto.toJSON()));    	   
    	   return this;
       },       
       
       ProdDettagli: function (e) {//ci manca il pulsante per tenere traccia
    	  if($(this.el).find('#dettagli').attr('class') == 'no'){
    		 $(this.el).find('#dettagli').children(".icon").removeClass("icon-down-nav");
    		 $(this.el).find('#dettagli').children(".icon").addClass("icon-up-nav");
    		 $(this.el).find('#dettagli').children("div").removeClass("displaynone");
    		 $(this.el).find('#dettagli').children("div").addClass("displayblock");
    		 $(this.el).find('#dettagli').removeClass("no");
    	   }else{
      		 $(this.el).find('#dettagli').children(".icon").removeClass("icon-up-nav");
    		 $(this.el).find('#dettagli').children(".icon").addClass("icon-down-nav");
    		 $(this.el).find('#dettagli').children("div").removeClass("displayblock");
    		 $(this.el).find('#dettagli').children("div").addClass("displaynone");
    		 $(this.el).find('#dettagli').addClass("no");
    	   }
         console.log(this.el);
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
       
       addPreferitoLocally: function(e) {
        var currentfollowed = JSON.parse(window.localStorage.getItem("followed"));
        if(!currentfollowed){
            currentfollowed = new Array();
        }
        currentfollowed.push("toFollow");
        window.localStorage.setItem("followed", JSON.stringify(user));
        },
        
       removePreferitoLocally: function(e){
        var currentfollowed = JSON.parse(window.localStorage.getItem("followed"));
        currentfollowed.removeEl = function(toUnfollow) {
            this.splice(array.indexOf(toUnfollow), 1);
        };
        window.localStorage.setItem("followed", JSON.stringify(user));
        }
  });
  return VBoxProdotto;
});


