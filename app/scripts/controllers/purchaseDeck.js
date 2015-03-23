'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('purchaseDeckCtrl', function ($scope,$routeParams,$location,purchaseDecks,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.purchaseDecks=purchaseDecks.query();
	  
	$scope.cancel=function(){
		$rootScope.cancel($location); //this function declared in app_functions.js
	}
	$rootScope.element_display(['header-back-btn','header-home-btn'],[],'Purchase Decks');
  
  });
