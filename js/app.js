'use strict';

/* App Module */

var DeckApp = angular.module('DeckApp', [
  'ngRoute',
  'phonecatAnimations',
  'deckControllers',
  'phonecatFilters',
  'deckServices',
  'checklistCtrl',
  
]);

DeckApp.config(['$routeProvider',
  function($routeProvider) {
	
    $routeProvider.
		  when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
	  when('/manageDecks', {
        templateUrl: 'partials/manageDecks.html',
        controller: 'manageDecksCtrl'
      }).
	   when('/createDeck', {
        templateUrl: 'partials/createDeck.html',
        controller: 'createDeckCtrl'
      }).
	  when('/edit:id', {
        templateUrl: 'partials/createDeck.html',
        controller: 'editDeckCtrl'
      }).
	   when('/import', {
        templateUrl: 'partials/import.html',
        controller: 'importCtrl'
      }).
	   when('/export', {
        templateUrl: 'partials/export.html',
        controller: 'exportDeckCtrl'
      }).
	   when('/decksList', {
        templateUrl: 'partials/decksList.html',
        controller: 'decksListCtrl'
      }).
	   when('/decksListEdit', {
        templateUrl: 'partials/decksList.html',
        controller: 'decksListEditCtrl'
      }).
	   when('/decksListDelete', {
        templateUrl: 'partials/decksList.html',
        controller: 'decksListDeleteCtrl'
      }).
	  when('/purchaseDeck', {
        templateUrl: 'partials/purchaseDeck.html',
        controller: 'purchaseDeckCtrl'
      }).
	  when('/createCard:id', {
        templateUrl: 'partials/createCard.html',
        controller: 'createCardCtrl'
      }).
	   when('/download', {
        templateUrl: 'partials/download.html',
        controller: 'downloadCtrl'
      }).
	   when('/deckStudyList', {
        templateUrl: 'partials/deckStudyList.html',
        controller: 'deckStudyListCtrl'
      }).
      otherwise({
        redirectTo: 'home'
      });
  }]);
  
  
DeckApp.directive('backButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', function () {
          history.back();
          scope.$apply();
        });
	  
      }
    }
});
DeckApp.directive('homeButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', function () {
			location.path("/");
          scope.$apply();
        });
	  
      }
    }
});