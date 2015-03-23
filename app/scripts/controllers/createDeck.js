'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('createDeckCtrl', function ($scope,$routeParams,$window,$location,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.path=$location.$$path;
  $scope.category='';
  $scope.setname='';
  $scope.cancel=function()
  {
     $rootScope.cancel($location); //this function define in home.js
    
  };
  $scope.create=function(setname,category)
  {
    console.log("Create");
    var deck={};
    $rootScope.deckCount++;
    deck.id=$rootScope.deckCount;
    deck.name=setname;
    deck.category=category
    $rootScope.decks.push(deck);
    $location.path("/decksList");
    // $window.alert(setname+' '+category);
  }
  $rootScope.element_display(['header-back-btn','header-home-btn'],[],'Create Decks');
  });
