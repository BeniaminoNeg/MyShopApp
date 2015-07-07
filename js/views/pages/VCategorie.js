/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define (function(require) {
	  var Backbone = require("backbone");
	  var MProdotto = require("../../models/MProdotto");
	  var Utils = require("utils");
	  var CollProdotti = require("../../collections/CollProdotti");
  
  var VCategorie = Utils.Page.extend({
      
      constructorName: "VCategorie",
      
      model: MProdotto,
      
      initialize: function() {
          this.template=Utils.templates.spotlight;
          
      },
      
      tagName: "ul",
      id: "tabella",
      className: "table-view",

      events: {

       },
       
       render: function() {
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
       },
       
  });
  return VCategorie;
});
