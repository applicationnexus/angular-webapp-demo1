'use strict';

/* Directives */
//back button directive
angular.module('deckApp').directive('backButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', function () {
          history.back();
          scope.$apply();
        });
	  
      }
    }
});