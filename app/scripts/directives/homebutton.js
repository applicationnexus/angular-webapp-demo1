'use strict';

/* Directives */
//back button directive
angular.module('deckApp').directive('homeButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element,attrs) {
        element.bind('click', function () {
      location.path("/");
          scope.$apply();
        });
    
      }
    }
});