define (function(require) {
	var Backbone = require('backbone');
	var Utils = require('utils');
  
	var MProdotto = require('../../models/MProdotto');
	var MSupermercato = require('../../models/MSupermercato');
	var MImmagine = require('../../models/MImmagine');

  
	var VBoxProdotto = Utils.Page.extend({
		constructorName: 'VBoxProdotto',
      
		Prodotto: MProdotto,
		Supermercato: MSupermercato,
		ImmagineProd: MImmagine,
		ImmagineSup: MImmagine,
      
		initialize: function(options) {
			this.template =Utils.templates.prodotto;
			this.Prodotto = options.Prodotto;
			this.Supermercato = options.Supermercato;
		},
      
		tagName: 'li',
		className: 'table-view-cell media',

		events: {
			'tap #dettagli': 'Dettagli',
			'tap #tofollow': 'Follow'
		},
       
		render: function() {
			var JSON = this.Prodotto.toJSON();
			JSON['Supermercato'] = this.Supermercato.toJSON();
			this.$el.html(this.template(JSON));
			this.checkPreferitoLocally();
			this.getImmagini();
			return this;
		},       
       
		Dettagli: function (e) {
			if($(this.el).find('#dettagli').attr('class') == 'no') {
				$(this.el).find('#dettagli').children('.icon').removeClass('icon-down-nav');
				$(this.el).find('#dettagli').children('.icon').addClass('icon-up-nav');
				$(this.el).find('#dettagli').children('div').removeClass('displaynone');
				$(this.el).find('#dettagli').children('div').addClass('displayblock');
				$(this.el).find('#dettagli').removeClass('no');
			} else {
				$(this.el).find('#dettagli').children('.icon').removeClass("icon-up-nav");
				$(this.el).find('#dettagli').children('.icon').addClass('icon-down-nav');
				$(this.el).find('#dettagli').children('div').removeClass('displayblock');
				$(this.el).find('#dettagli').children('div').addClass('displaynone');
				$(this.el).find('#dettagli').addClass('no');
			}
		},
       
		Follow: function (e) {
			if($(this.el).find('#tofollow').attr('class') == 'followed') {
				$(this.el).find('#tofollow').removeClass("followed");
				this.removePreferitoLocally($(this.el).find('#id').text());
				$(this.el).find('#tofollow').children('span').removeClass('icon icon-star-filled');
				$(this.el).find('#tofollow').children('span').addClass('icon icon-star');
			} else {
				$(this.el).find('#tofollow').addClass('followed');
				this.addPreferitoLocally($(this.el).find('#id').text());
				$(this.el).find('#tofollow').children('span').removeClass('icon icon-star');
				$(this.el).find('#tofollow').children('span').addClass('icon icon-star-filled');
			}
		},
       
		addPreferitoLocally: function(toFollow) {
			var currentFollowed = window.localStorage.getItem('followed');
			currentFollowed += toFollow;
			currentFollowed += ',';
			window.localStorage.setItem('followed', currentFollowed);
        },
        
        removePreferitoLocally: function(toUnfollow){
        	var currentFollowed = window.localStorage.getItem('followed');
        	var ESPR = new RegExp(toUnfollow + '\,');
        	currentFollowed = currentFollowed.replace(ESPR, '');
        	window.localStorage.setItem('followed', currentFollowed);
        },
        
        checkPreferitoLocally: function() {
        	var currentFollowed = window.localStorage.getItem('followed');
        	if(currentFollowed != null){
        		var id = $(this.el).find('#id').text();
        		if (currentFollowed.search(id) != '-1') {
        			$(this.el).find('#tofollow').addClass('followed');
		    		$(this.el).find('#tofollow').children('span').removeClass('icon icon-star');
		            $(this.el).find('#tofollow').children('span').addClass('icon icon-star-filled');
        		}
        	}
        },
        
        getImmagini: function() {
        	var id = this.Prodotto.get('Id');
        	var ids = this.Supermercato.get('Ids');
        	this.ImmagineProd = new MImmagine();
        	this.ImmagineSup = new MImmagine();
        	this.ImmagineProd.setImmagine(id);
        	this.ImmagineSup.setImmagine(ids);
        	
        	var thisView = this;
        	
			this.ImmagineProd.fetch().done(function(data) {
				$(thisView.el).find('#imgProd').attr('src', 'data:image/' + thisView.ImmagineProd.get('Type') +';base64,' + thisView.ImmagineProd.get('Immagine'));
				thisView.ImmagineSup.fetch().done(function(data) {
					$(thisView.el).find('#imgSup').attr('src', 'data:image/' + thisView.ImmagineSup.get('Type') +';base64,' + thisView.ImmagineSup.get('Immagine'));
				})
			});
        	
			/*
        	var thisView = this;
        	$.getJSON(url, function(data) {
        		$(thisView.el).find('#imgProd').attr('src', data);
        		url = 'http://localhost/MyShopWeb/index.php?func=GetImmagine&Id=' + ids;
            	$.getJSON(url, function(data) {
            		$(thisView.el).find('#imgSup').attr('src', data);
            	})
        	})	
        	*/
        }
	});
	
	return VBoxProdotto;
});