'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('editDeckCtrl', function ($scope,$routeParams,$location,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     for(var i=0;i<$rootScope.decks.length;i++)
    {
      if($routeParams.id==$rootScope.decks[i].id)
      {
     $scope.category=$rootScope.decks[i].category;
     $scope.setname=$rootScope.decks[i].name;
    
      }
  }
  $scope.cancel=function()
  {
    $rootScope.cancel($location); //this function define in main.js
       
    
  };
   $scope.save=function(name,category)
   {
    for(var i=0;i<$rootScope.decks.length;i++)
    {
      if($routeParams.id==$rootScope.decks[i].id)
      {
          $rootScope.decks[i].category=category;
          $rootScope.decks[i].name=name;
      }
  }
   $location.path("/decksListEdit");
  }
  $rootScope.element_display(['header-back-btn','header-home-btn'],[],'Edit Deck');
  });
