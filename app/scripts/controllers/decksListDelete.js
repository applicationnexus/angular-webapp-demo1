'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('decksListDeleteCtrl', function ($scope,$routeParams,$location,userDecks,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
	  $rootScope.element_display(['header-back-btn','header-home-btn'],[],'Decks');
	  $scope.option='delete';
	  $scope.decks=$rootScope.decks;
	  $scope.user = {
	    deckList: []
	  };
  });
