/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var MioModel = require("models/.");
  var Utils = require("utils");
  
  var VCategorie = Utils.Page.extend({
      
      constructorName: "VCategorie",
      
      model:MioModel,
      
      initialize: function() {
          this.template=Utils.templates.spotlight;
          
      },
      
      id: "nav3",
      className: "tab-item",

      events: {
         "tap #nav1": "goToHome",
         "tap #nav2": "goToSpotlight",
         "tap #nav4": "goToMarket",
         "tap #nav5": "goToRicerca"
       },
       
       render: function() {
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
       },
       
       goToHome: function(e) {
        Backbone.history.navigate("home", {
        trigger: true
        });
       },
       
       goToSpotlight: function(e) {
        Backbone.history.navigate("spotlight", {
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
  return VCategorie;
});
