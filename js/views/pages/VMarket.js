/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
	  var Backbone = require("backbone");
	  var Utils = require("utils");
	  var CollSupermercati = require("../../collections/CollSupermercati");
	  var MSupermercato = require("../../models/MSupermercato");
  
  var VMarket = Utils.Page.extend({
      
      constructorName: "VMarket",
      
      model:MSupermercato,
      
      initialize: function() {
          this.template=Utils.templates.spotlight;
          
      },
      
      id: "nav4",
      className: "tab-item",

      events: {

       },
       
       render: function() {
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
       },
       

  });
  return VMarket;
});
