'use strict';

/**
 * @ngdoc function
 * @name angularProjectGitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectGitApp
 */
angular.module('deckApp')
  .controller('HomeCtrl', function ($scope,$routeParams,$location,userDecks,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.cards=[];
    $rootScope.cardCount=0;

    $scope.path=$location.$$path;
      $rootScope.decks=userDecks.query()
      $rootScope.deckCount=$rootScope.decks.length;
     
    $rootScope.element_display=function(show_option,hide_option,title)
    {
      document.getElementById('main-title').innerHTML=title;
      for(var i=0;i<show_option.length;i++)
      {
        if(document.getElementById(show_option[i]))
        document.getElementById(show_option[i]).style.display="block";
      }
      for(var i=0;i<hide_option.length;i++)
      {
        if(document.getElementById(hide_option[i]))
        document.getElementById(hide_option[i]).style.display="none";
      }
    }
    $rootScope.cancel=function(location)
    {
      var answer = confirm("Are you sure? \nThis cannot be undone.");
        console.log(answer);
          if (answer) {
          location.path("/manageDecks");
           }
    }
    $rootScope.element_display([],['header-back-btn','header-home-btn'],'Qcards');
  });
