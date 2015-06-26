define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var CollSupermercati = require("collections/CollSupermercati");
  var CollProdotti = require("collections/CollProdotti");
  var StructureView = require("views/StructureView");
  var Utente = require("models/MUtente");
  var MyView = require("views/pages/MyView");
  var MapView = require("views/pages/MapView");

  var AppRouter = Backbone.Router.extend({

    constructorName: "AppRouter",

    routes: {
      // the default is the structure view  
      //SINISTRA HTML DESTRA FUNZIONE ROUTER
      "": "showStructure", 
      "home":"Home",
      "spotlight":"Spotlight",
      "categorie": "Categorie",
      "market": "Market",
      "ricerca" : "Ricerca"
    },

    firstView: "home",

    initialize: function(options) {
      this.currentView = undefined;
    },

    Home: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
      var listaprodotti = new Prodotti({
        //key: "testValue"
      });
      var listasupermercati = new Supermercati({
        //non sappiamo cosa ci va qua
      })
      // create the view
      var page = new VInEvidenza({
        listaprodotti: listaprodotti,
        listasupermercati: listasupermercati

      });
      // show the view
      this.changePage(page);
    },

    Spotlight: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav2");
      // create a model with an arbitrary attribute for testing the template engine
      var listaprodotti = new Prodotti({
        //key: "testValue"
      });
      var listasupermercati = new Supermercati({
        //non sappiamo cosa ci va qua
      })
      var utente = new MUtente ({
        // comeeeeee???????????
      })
      // create the view
      var page = new VSpotlight({
        listaprodotti: listaprodotti,
        listasupermercati: listasupermercati,
        utente : utente

      });
      // show the view
      this.changePage(page);
    },

    Categorie: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav3");
      // create the view and show it
      var listaprodotti = new Prodotti({
        //key: "testValue"
      });
      var listasupermercati = new Supermercati({
        //non sappiamo cosa ci va qua
      })
      var page = new VCategorie({
        listaprodotti: listaprodotti,
        listasupermercati: listasupermercati,
      });
      this.changePage(page);
    },

     Market: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav4");
      // create the view and show it
      var listaprodotti = new Prodotti({
        //key: "testValue"
      });
      var listasupermercati = new Supermercati({
        //non sappiamo cosa ci va qua
      })
      var page = new VMarket({
        listaprodotti: listaprodotti,
        listasupermercati: listasupermercati,
      });
      this.changePage(page);
    },

    Ricerca: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav5");
      // create the view and show it
      var listaprodotti = new Prodotti({
        //key: "testValue"
      });
      var listasupermercati = new Supermercati({
        //non sappiamo cosa ci va qua
      })
      var page = new VRicerca({
        listaprodotti: listaprodotti,
        listasupermercati: listasupermercati,
      });
      this.changePage(page);
    },

    // load the structure view
    showStructure: function() {
      if (!this.structureView) {
        this.structureView = new StructureView();
        // put the el element of the structure view into the DOM
        document.body.appendChild(this.structureView.render().el);
        this.structureView.trigger("inTheDOM");
      }
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },

  });

  return AppRouter;

});