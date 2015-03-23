'use strict';

/* Service */
angular.module('deckApp').factory('downloadDecks', function(){
var items={};
items.query=function(){
	return [{"id":1,"name":"Deck 1"},{"id":2,"name":"Deck 2"},{"id":3,"name":"Deck 3"},{"id":4,"name":"Deck 4"},{"id":5,"name":"Deck 5"},{"id":6,"name":"Deck 6"},{"id":7,"name":"Deck 7"},{"id":8,"name":"Deck 8"}];
	};
   return items;
  
});