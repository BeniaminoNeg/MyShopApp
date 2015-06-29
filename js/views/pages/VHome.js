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
         //implementare sia grafuca che logica
       },
       
       addPreferito: function (e) {
        //implementare
       },
       
       removePreferito: function (e) {
         $(this.el).removeClass("icon-up-nav");
         $(this.el).addClass("icon-down-nav");
         $(this.el).children("<div>").removeClass("displayblock");
         $(this.el).children("<div>").addClass("displaynone");
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
  });
  return VHome;
});


