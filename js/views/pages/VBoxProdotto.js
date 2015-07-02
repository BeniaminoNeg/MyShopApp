define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var MProdotto = require("../../models/MProdotto");
  var MSupermercato = require("../../models/MSupermercato");
  
  var VBoxProdotto = Utils.Page.extend({
      
      constructorName: "VBoxProdotto",
      
      Prodotto: MProdotto,
      
      initialize: function() {
          this.template=Utils.templates.prodotto;
      },
      
      className: "table-view-cell media",

      events: {
         "tap .details-no": "ProdPiuDettagli",
         "tap .details-si": "ProdMenoDettagli",
         
         "tap .followed": "addPreferito",
         "tap .unfollowed": "removePreferito"
       },
       
       render: function() {    	   
    	   this.$el.append(this.template(this.Prodotto.toJSON));
    	   return this;
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


