'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('decksListCtrl', function ($scope,$routeParams,$location,userDecks,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.option='createCard';
	  $scope.decks=$rootScope.decks;
	  $rootScope.element_display(['header-back-btn','header-home-btn'],[],'Decks');
  });
