define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  
  var Utente = require("models/MUtente");
  
  var CollProdotti = require("collections/CollProdotti");
  var CollSupermercati = require("collections/CollSupermercati");
  var CollCategorie = require("collections/CollCategorie");
  
  var StructureView = require("views/StructureView");
  var VHome = require("views/pages/VHome");
  var VCategorie = require("views/pages/VCategorie");
  var VMarkets = require("views/pages/VMarket");
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
      
      var thisRouter = this;
      
      var listaProdotti = new CollProdotti();
      listaProdotti.setUrlProdottiHome();
      listaProdotti.fetch().done(function(data){
          // create the view
          var page = new VHome({
            listaProdotti: listaProdotti,
          });
          // show the view
          thisRouter.changePage(page);
      });

    },

    Spotlight: function() {
        // highlight the nav1 tab bar element as the current one
        this.structureView.setActiveTabBarElement("nav2");
        //set title
        this.structureView.setTitleContentElement("Spotlight");
        //hide the back button
        this.structureView.setDisplayNoneBackBtnElement();

       var currentFollowed = window.localStorage.getItem("followed");
       
       if(currentFollowed != null){
    	   var listaProdotti = new CollProdotti();
    	   listaProdotti.setUrlProdottiSpotlight(currentFollowed);
	       listaProdotti.fetch().done(function(data){
	           // create the view
	           var page = new VSpotlight({
	             listaProdotti: listaProdotti,
	           });
	            //show the view
	           thisRouter.changePage(page);
	       });
       }else{
    	   var page = new VSpotlight({
    		   currentFollowed : null,
    	   });
    	   thisRouter.changePage(page);
       }
       

    },

    Categorie: function() {
        // highlight the nav1 tab bar element as the current one
        this.structureView.setActiveTabBarElement("nav3");
        //set title
        this.structureView.setTitleContentElement("Categorie");
        //hide the back button
        this.structureView.setDisplayNoneBackBtnElement();
        
        var thisRouter = this;
        
        var listaCategorie= new CollCategorie();
        listaCategorie.setUrlCategorie();
        listaCategorie.fetch().done(function(data){
            // create the view
            var page = new VCategorie({
              listaCategorie: listaCategorie,
            });
            // show the view
            thisRouter.changePage(page);
        });

    },

     Market: function() {
         // highlight the nav1 tab bar element as the current one
         this.structureView.setActiveTabBarElement("nav4");
         //set title
         this.structureView.setTitleContentElement("Market");
         //hide the back button
         this.structureView.setDisplayNoneBackBtnElement();
         
         var thisRouter = this;
         
         var listaSupermercati= new CollSupermercati();
         listaSupermercati.setUrlSupermercati();
         listaSupermercati.fetch().done(function(data){
             // create the view
             var page = new VMarkets({
               listaSupermercati: listaSupermercati,
             });
             // show the view
             thisRouter.changePage(page);
         });

    },

    Ricerca: function() {
        // highlight the nav1 tab bar element as the current one
        this.structureView.setActiveTabBarElement("nav5");
        //set title
        this.structureView.setTitleContentElement("Ricerca");
        //hide the back button
        this.structureView.setDisplayNoneBackBtnElement();
        
        var page = new VRicerca();
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

// create a model with an arbitrary attribute for testing the template engine
/*var listaProdotti = new CollProdotti([
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
*/