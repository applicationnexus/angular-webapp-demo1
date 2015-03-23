'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('importCtrl', function ($scope,$routeParams,$location,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.cancel=function()
  {
    $rootScope.cancel($location); //this function declared in app_functions.js
    
  };
  $scope.importBtn=function(setname,category)
  {
    console.log("Create");
    var deck={};
    deck.name=setname;
    deck.category=category
    $rootScope.decks.push(deck);
    $location.path("/decksList");
    // $window.alert(setname+' '+category);
  }
  $rootScope.element_display(['header-back-btn','header-home-btn'],[],'Import Deck');
  });
