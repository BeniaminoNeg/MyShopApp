define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  
  var Prodotto = require("models/MProdotto");
  var Utente = require("models/MUtente");
  var Supermercato = require("models/MSupermercato");
  
  var CollProdotti = require("collections/CollProdotti");
  var CollSupermercati = require("collections/CollSupermercati");
  
  var StructureView = require("views/StructureView");
  var VHome = require("views/pages/VHome");
  var VCategorie = require("views/pages/VCategorie");
  var VMarket = require("views/pages/VMarket");
  var VRicerca = require("views/pages/VRicerca");
  var VSpotlight = require("views/pages/VSpotlight");

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
      this.structureView.setTitleContentElement("Home");
      //hide the back button
      this.structureView.setDisplayNoneBackBtnElement();
      // create a model with an arbitrary attribute for testing the template engine
      var listaProdotti = new CollProdotti([
    		{
    		  "Id":"009",
    		  "Nome":"Riso Scotti ai funghi porcini",
    		  "Immagine": "../img/es_prodotto.jpg",
    		  "Descrizione":"Riso scotti ai funghi porcini 210g",
    		  "Prezzo":"1.55",
    		  "SupermercatoId":"00003"
    		},
    		  
    		{
			  "Id":"010",
			  "Nome":"Riso scotti agli asparagi",
			  "Immagine": "../img/es_prodotto.jpg",
			  "Descrizione":"Riso scotti agli asparagi gr.210",
			  "Prezzo":"1.55",
			  "SupermercatoId":"00002"
    		}
      ]);
      
      var listaSupermercati = new CollSupermercati([
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
    			 "Id":"00001"}
    		  ]);
      
      //var listaProdotti = new CollProdotti();
      //listaProdotti.fetchProdottiHome();
      //var listaSupermercati = new CollSupermercati();
      //listaSupermercati.fetchSupermercatiHome(listaProdotti);
      
      // create the view
      var page = new VHome({
        listaProdotti: listaProdotti,
        listaSupermercati: listaSupermercati,
      })
      // show the view
      console.log(page.el);
      this.changePage(page);
    },

    Spotlight: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav2");
      //set title
      this.structureView.setTitleContentElement("Spotlight");
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
      //set title
      this.structureView.setTitleContentElement("Categorie");
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
      //set title
      this.structureView.setTitleContentElement("Market");
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
      //set title
      this.structureView.setTitleContentElement("Ricerca");
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
        this.structureView.trigger("inTheDOM");
      }
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },

  });

  return AppRouter;

});