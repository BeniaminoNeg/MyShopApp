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
  
  var VHome = Utils.Page.extend({
      
      constructorName: "VHome",
      
      model: MProdotto,
      
      initialize: function() {
          this.template=Utils.templates.home;
          
      },
      
      id: "nav1",
      className: "tab-item",

      events: {
         "tap .details-no": "ProdPiuDettagli",
         "tap .details-si": "ProdMenoDettagli",
         
         "tap .followed": "addPreferito",
         "tap .unfollowed": "removePreferito"
       },
       
       render: function() {
           var CollProd = new CollProdotti();
       //jQuery.getJSON("http://localhost/MyShopWeb/Controller/CHome",elaboraJSON);//VORREI FARE QUÌ LE ISTANZE DEI MODEL
       $(this.el).html(this.template(this.model.toJSON()));//Binding tra template e dato
       return this;
       },
       
       elaboraJSON : function (data) {
           var jsonpars= $.parse(data);
           for(i=0; i<data.length; i++){
               p[i]= new MProdotto (data.Id, data.Nome, data.Immagine)
               
           }
           Backbone.Model.create()
           var Prodotto1= eval (p1); 
           var Prodotto1= new MProdotto(p1.immagine);
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
  return VHome;
});


