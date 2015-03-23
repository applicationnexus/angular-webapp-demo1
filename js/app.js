'use strict';

/* App Module */

var DeckApp = angular.module('DeckApp', [
  'ngRoute',
  'deckAnimations',
  'deckControllers',
  'deckFilters',
  'deckServices',
  'checklistCtrl',
  
]);
DeckApp.config(['$routeProvider',
  function($routeProvider) {
	
    $routeProvider.
		  when('/', {
        templateUrl: 'partials/home.html', //home page (Manage decks,Stats, info and other options link)
        controller: 'HomeCtrl' 
      }).
	  when('/manageDecks', {
        templateUrl: 'partials/manageDecks.html', //create, edit, delete, download and purchase deck links
        controller: 'manageDecksCtrl'
      }).
	   when('/createDeck', {
        templateUrl: 'partials/createDeck.html', //create new deck
        controller: 'createDeckCtrl'
      }).
	  when('/edit:id', {
        templateUrl: 'partials/createDeck.html', // Edit existing deck
        controller: 'editDeckCtrl'
      }).
	   when('/import', {
        templateUrl: 'partials/import.html', //import decks
        controller: 'importCtrl'
      }).
	   when('/export', {
        templateUrl: 'partials/export.html', //export decks
        controller: 'exportDeckCtrl'
      }).
	   when('/decksList', {
        templateUrl: 'partials/decksList.html', // List of all decks 
        controller: 'decksListCtrl'
      }).
	   when('/decksListEdit', {
        templateUrl: 'partials/decksList.html', // edit the deck list
        controller: 'decksListEditCtrl'
      }).
	   when('/decksListDelete', {
        templateUrl: 'partials/decksList.html', // delete deck from deck list
        controller: 'decksListDeleteCtrl'
      }).
	  when('/purchaseDeck', {
        templateUrl: 'partials/purchaseDeck.html',// Purchase the deck
        controller: 'purchaseDeckCtrl'
      }).
	  when('/createCard:id', {
        templateUrl: 'partials/createCard.html',// Create new cards in deck
        controller: 'createCardCtrl'
      }).
	   when('/download', {
        templateUrl: 'partials/download.html', // Download the deck
        controller: 'downloadCtrl'
      }).
	   when('/deckStudyList', {
        templateUrl: 'partials/deckStudyList.html', // Deck study list
        controller: 'deckStudyListCtrl'
      }).
      otherwise({
        redirectTo: 'home'
      });
  }]);
  
  
