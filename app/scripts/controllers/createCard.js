'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('createCardCtrl', function ($scope,$routeParams,$location,userDecks,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
	 $scope.cardCount=$rootScope.cardCount;
	 $scope.deleteCard=function(id)
	 {
		 console.log(id);
	 }
  });
