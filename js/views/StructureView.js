define(function(require) {
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Utils = require('utils');

	var StructureView = Backbone.View.extend({
		constructorName: 'StructureView',
	
		id: 'main',
	
		events: {
			'tap #nav1': 'goToHome',
			'tap #nav2': 'goToSpotlight',
			'tap #nav3': 'goToCategorie',
			'tap #nav4': 'goToMarket',
			'tap #nav5': 'goToRicerca',
	    	  
			'tap #back': 'goBack'
		},
	
	    initialize: function(options) {
	    	// load the precompiled template
	    	this.template = Utils.templates.structure;
	    	//this.on("inTheDOM", this.rendered);
	    	//bind the back event to the goBack function
	    	//document.getElementById("back").addEventListener("back", this.goBack(), false);
	    },
	
	    render: function() {
	    	// load the template
	    	this.el.innerHTML = this.template({});
	    	// cache a reference to the content element
	    	this.contentElement = this.$el.find('#content')[0];
	    	return this;
	    },
	
	    goToHome: function(e) {
	    	Backbone.history.navigate('home', {
	    		trigger: true
	    	});
	    },
	       
	    goToSpotlight: function(e) {
	    	Backbone.history.navigate('spotlight', {
	    		trigger: true
	    	});
	    },
	       
	    goToCategorie: function(e) {
	    	Backbone.history.navigate('categorie', {
	        trigger: true
	        });
	       },
	       
		goToMarket: function(e) {
		    Backbone.history.navigate('markets', {
		    	trigger: true
		    });
		},
		   
		goToRicerca: function(e) {
			Backbone.history.navigate('ricerca', {
				trigger: true
			});
		},
		
		//generic go-back function
		goBack: function() {
			window.history.back();
		},
	
	    setActiveTabBarElement: function(elementId) {
	    	// here we assume that at any time at least one tab bar element is active
	    	document.getElementsByClassName('active')[0].classList.remove('active');
	    	document.getElementsByClassName('active')[0].classList.remove('active');
	    	document.getElementsByClassName('active')[0].classList.remove('active');
	    	document.getElementById(elementId).classList.add('active');
	    	document.getElementById(elementId).getElementsByClassName('icon')[0].classList.add('active');
	    	document.getElementById(elementId).getElementsByClassName('tab-label')[0].classList.add('active');
	    },
	    
	    setTitleContentElement: function(title) {
	    	document.getElementById('title').innerHTML= title;
	    },
	    
	    setDisplayBackBtnElement: function() {
	    	document.getElementById('back').classList.remove('displaynone');
	    },
	    
	    setDisplayNoneBackBtnElement: function() {
	    	if(document.getElementById('back').classList){
	    		document.getElementById('back').classList.add('displaynone');
	    	}
		}
	});
	
	return StructureView;
});