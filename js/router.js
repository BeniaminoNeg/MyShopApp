define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  
  var Prodotto = require("models/MProdotto");
  var Utente = require("models/MUtente");
  var Supermercato = require("models/MSupermercato");
  
  var CollProdotti = require("collections/CollProdotti");
  var CollSupermercati = require("collections/CollSupermercati");
  
  var StructureView = require("views/StructureView");
  var VCategorie = require("views/pages/VCategorie");
  var VHome = require("views/pages/VHome");
  var VMarket = require("views/pages/VMarket");
  var VRicerca = require("views/pages/VRicerca");
  var VSpotlight = require("views/pages/VSpotlight");
  var VBoxProdotto = require("views/pages/VBoxProdotto");

  var AppRouter = Backbone.Router.extend({

    constructorName: "AppRouter",

    routes: {
      // the default is the structure view  
      //SINISTRA path della view DESTRA FUNZIONE definita dentro al ROUTER
      "": "showStructure", 
      "home":"Home",
      "spotlight":"Spotlight",
      "categorie": "Categorie",
      "market": "Market",
      "ricerca" : "Ricerca"
      //note/:id/view: "show" oppure note/:id/edit : "edit" Nello show è definito un ID random 
                                    //quindi la rotta utilizza il criterio del longest match!!!!!!!!!
    },

    firstView: "home",

    initialize: function(options) {
      this.currentView = undefined;
    },

    Home: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav1");
      //set title
      this.stuctureView.setTitleContentElement("Home");
      //hide the back button
      this.structureView.setDisplayNoneBackBtnElement();
       
      // create a model with an arbitrary attribute for testing the template engine
      var listaProdotti = new CollProdotti(
        //key: "testValue"
    		{"Id":"009",
    		  "Nome":"Riso Scotti ai funghi porcini",
    		  "Immagine": "../img/es_prodotto.jpg",
    		  "Descrizione":"Riso scotti ai funghi porcini 210g",
    		  "Prezzo":"1.55",
    		  "SupermercatoId":"00003"},
    		  
    		  {"Id":"010",
    			  "Nome":"Riso scotti agli asparagi",
    			  "Immagine": "../img/es_prodotto.jpg",
    			  "Descrizione":"Riso scotti agli asparagi gr.210",
    			  "Prezzo":"1.55","SupermercatoId":"00002"});
      
      var listaSupermercati = new CollSupermercati(
    	  {"Nome":"Tigre",
    		  "Logo": "../img/es_logo.png",
    		  "Indirizzo":{"Via":"Via Preturo",
    			  					"Citt\u00e0":"Coppito",
    			  					"NumeroCivico":null},
    		  "Id":"00002"},
    		  {"Nome":"Conad",
    			  "Logo": "../img/es_logo.png",
    			 "Indirizzo":{"Via":"Via Giuseppe Saragat",
    				 				   "Citt\u00e0":"L'Aquila",
    				 				   "NumeroCivico":null},
    			 "Id":"00001"});
      // create the view
      var page = new VBoxProdotto({
        listaProdotti: listaProdotti,
        listaSupermercati: listaSupermercati
      });
      // show the view
      this.changePage(page);
    },

    Spotlight: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav2");
      //display the back button
      this.structureView.setDisplayBackBtnElement();
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
      //display the back button
      this.structureView.setDisplayBackBtnElement();
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
      //display the back button
      this.structureView.setDisplayBackBtnElement();
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
      //display the back button
      this.structureView.setDisplayBackBtnElement();
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
        this.structure.trigger("inTheDOM");
      }
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },

  });

  return AppRouter;

});