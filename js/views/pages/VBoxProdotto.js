define (function(require) {
  var Backbone = require("backbone");
  var Utils = require("utils");
  
  var MProdotto = require("../../models/MProdotto");
  var MSupermercato = require("../../models/MSupermercato");
  
  var VBoxProdotto = Utils.Page.extend({
      
      constructorName: "VBoxProdotto",
      
      Prodotto: MProdotto,
      
      initialize: function(options) {
          this.template=Utils.templates.prodotto;
          this.Prodotto= options.Prodotto;
      },
      
      tagName: "li",
      className: "table-view-cell media",

      events: {
         "tap #dettagli": "Dettagli",
         
         "tap #tofollow": "Follow"
       },
       
       render: function() {
    	   this.$el.html(this.template(this.Prodotto.toJSON()));
    	   this.checkPreferitoLocally();
    	   return this;
       },       
       
       Dettagli: function (e) {
    	  if($(this.el).find('#dettagli').attr('class') == 'no'){
    		 $(this.el).find('#dettagli').children(".icon").removeClass("icon-down-nav");
    		 $(this.el).find('#dettagli').children(".icon").addClass("icon-up-nav");
    		 $(this.el).find('#dettagli').children("div").removeClass("displaynone");
    		 $(this.el).find('#dettagli').children("div").addClass("displayblock");
    		 $(this.el).find('#dettagli').removeClass("no");
    	   }else{
      		 $(this.el).find('#dettagli').children(".icon").removeClass("icon-up-nav");
    		 $(this.el).find('#dettagli').children(".icon").addClass("icon-down-nav");
    		 $(this.el).find('#dettagli').children("div").removeClass("displayblock");
    		 $(this.el).find('#dettagli').children("div").addClass("displaynone");
    		 $(this.el).find('#dettagli').addClass("no");
    	   }
       },
       
      Follow: function (e) {
         if($(this.el).find('#tofollow').attr('class') == 'followed'){
	         $(this.el).find('#tofollow').removeClass("followed");
	         this.removePreferitoLocally($(this.el).find('#id').text()); //da sistemare l'addpreferitolocally
	         $(this.el).find('#tofollow').children("span").removeClass("icon icon-star-filled");
	         $(this.el).find('#tofollow').children("span").addClass("icon icon-star");
         }else{
	         $(this.el).find('#tofollow').addClass("followed");
	         this.addPreferitoLocally($(this.el).find('#id').text()); //da sistemare l'addpreferitolocally
	         $(this.el).find('#tofollow').children("span").removeClass("icon icon-star");
	         $(this.el).find('#tofollow').children("span").addClass("icon icon-star-filled");
         }
       },
       
       addPreferitoLocally: function(toFollow) {
        var currentfollowed = window.localStorage.getItem("followed");
        currentfollowed += toFollow;
        currentfollowed += ',';
        window.localStorage.setItem("followed", currentfollowed);
        },
        
       removePreferitoLocally: function(toUnfollow){
        var currentfollowed = window.localStorage.getItem("followed");
        var ESPR = new RegExp(toUnfollow + '\,');
        currentfollowed = currentfollowed.replace(ESPR, "");
        window.localStorage.setItem("followed", currentfollowed);
        },
        
        checkPreferitoLocally: function(){
	    	var currentfollowed = window.localStorage.getItem("followed");
	    	if(!currentfollowe){
		    	var id = $(this.el).find('#id').text();
		    	if (currentfollowed.search(id) != '-1'){
		    		$(this.el).find('#tofollow').addClass("followed");
		    		$(this.el).find('#tofollow').children("span").removeClass("icon icon-star");
		            $(this.el).find('#tofollow').children("span").addClass("icon icon-star-filled");
	        	}
        	}
        }
  });
  return VBoxProdotto;
});


