'use strict';

/**
 * @ngdoc overview
 * @name angularProjectGitApp
 * @description
 * # angularProjectGitApp
 *
 * Main module of the application.
 */
angular
  .module('deckApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
   $routeProvider.
      when('/', {
        templateUrl: 'views/home.html', //home page (Manage decks,Stats, info and other options link)
        controller: 'HomeCtrl' 
      }).
    when('/manageDecks', {
        templateUrl: 'views/manageDecks.html', //create, edit, delete, download and purchase deck links
        controller: 'manageDecksCtrl'
      }).
     when('/createDeck', {
        templateUrl: 'views/createDeck.html', //create new deck
        controller: 'createDeckCtrl'
      }).
    when('/edit/:id', {
        templateUrl: 'views/createDeck.html', // Edit existing deck
        controller: 'editDeckCtrl'
      }).
     when('/import', {
        templateUrl: 'views/import.html', //import decks
        controller: 'importCtrl'
      }).
     when('/export', {
        templateUrl: 'views/export.html', //export decks
        controller: 'exportDeckCtrl'
      }).
     when('/decksList', {
        templateUrl: 'views/decksList.html', // List of all decks 
        controller: 'decksListCtrl'
      }).
     when('/decksListEdit', {
        templateUrl: 'views/decksList.html', // edit the deck list
        controller: 'decksListEditCtrl'
      }).
     when('/decksListDelete', {
        templateUrl: 'views/decksList.html', // delete deck from deck list
        controller: 'decksListDeleteCtrl'
      }).
    when('/purchaseDeck', {
        templateUrl: 'views/purchaseDeck.html',// Purchase the deck
        controller: 'purchaseDeckCtrl'
      }).
    when('/createCard/:id', {
        templateUrl: 'views/createCard.html',// Create new cards in deck
        controller: 'createCardCtrl'
      }).
     when('/download', {
        templateUrl: 'views/download.html', // Download the deck
        controller: 'downloadCtrl'
      }).
     when('/deckStudyList', {
        templateUrl: 'views/deckStudyList.html', // Deck study list
        controller: 'deckStudyListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  });
