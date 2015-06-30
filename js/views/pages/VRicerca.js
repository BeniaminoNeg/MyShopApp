/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var MioModel = require("models/.");
  var Utils = require("utils");
  
  var VRicerca = Utils.Page.extend({
      
      constructorName: "VRicerca",
      
      model:MioModel,
      
      initialize: function() {
          this.template=Utils.templates.ricerca;
          
      },
      
      id: "nav5",
      className: "tab-item",

      events: {
         "tap #ricerca": "ricercaProdotti"
       },
       
       render: function() {
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
       },
       
       ricercaProdotti: function(){
           if(document.ricerca.onsubmit && !document.ricerca.onsubmit()){
                return;
           }
           document.ricerca.submit();
        }  
      
  });
  return VCategorie;
});
