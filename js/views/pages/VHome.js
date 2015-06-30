/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var MioModel = require("models/.");
  var Utils = require("utils");
  
  var VHome = Utils.Page.extend({
      
      constructorName: "VHome",
      
      model:MioModel,
      
      initialize: function() {
          this.template=Utils.templates.home;
          
      },
      
      id: "nav1",
      className: "tab-item",

      events: {
         "tap #nav2": "goToSpotlight",
         "tap #nav3": "goToCategorie",
         "tap #nav4": "goToMarket",
         "tap #nav5": "goToRicerca",
         
         "tap #details-no": "ProdPiuDettagli",
         "tap #details-si": "ProdMenoDettagli",
         
         "tap #followed": "addPreferito",
         "tap #unfollowed": "removePreferito"
         
       },
       
       render: function() {
       jQuery.getJSON("http://localhost/MyShopWeb/Controller/CHome",elaboraJSON);//VORREI FARE QUÌ LE ISTANZE DEI MODEL
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
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
       
       //ad addpreferito e removepreferito mancano le interazioni con la parte di memoria dove memorizzare i preferiti
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
       
       
       goToSpotlight: function(e) {
        Backbone.history.navigate("spotlight", {
        trigger: true
        });
       },
       
       goToCategorie: function(e) {
        Backbone.history.navigate("categorie", {
        trigger: true
        });
       },
       
       goToMarket: function(e) {
        Backbone.history.navigate("market", {
        trigger: true
        });
       },
       
       goToRicerca: function(e) {
        Backbone.history.navigate("ricerca", {
        trigger: true
        });
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
  return VHome;
});


