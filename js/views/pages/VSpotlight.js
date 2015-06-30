/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
  var Backbone = require("backbone");
  var MioModel = require("models/.");
  var Utils = require("utils");
  
  var VSpotlight = Utils.Page.extend({
      
      constructorName: "VSpotlight",
      
      model:MioModel,
      
      initialize: function() {
          this.template=Utils.templates.spotlight;
          
      },
      
      id: "nav2",
      className: "tab-item",

      events: {
    	  
       },
       
       render: function() {
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
       },
       
  });
  return VSpotlight;
});
