'use strict';

/* Directives */
//back button directive
DeckApp.directive('backButton', function(){
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
//home button directive
DeckApp.directive('homeButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', function () {
			location.path("/");
          scope.$apply();
        });
	  
      }
    }
});