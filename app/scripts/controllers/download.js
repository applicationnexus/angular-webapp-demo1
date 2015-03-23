'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('downloadCtrl', function ($scope,$routeParams,downloadDecks,$location,userDecks,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  	$scope.downloadDecks=downloadDecks.query();
	$scope.cancel=function(){
	 	$rootScope.cancel($location); //this function declared in app_functions.js
	}
	$rootScope.element_display(['header-back-btn','header-home-btn'],[],'Download Decks');
  });
