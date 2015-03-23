'use strict';

/* Service */
angular.module('deckApp').factory('userDecks',  function(){
var items={};
items.query=function(){
	return [{id: 1, name: 'Deck 1',category:"Sample1"},{id: 2, name: 'Deck 2',category:"Sample2"},{id: 3, name: 'Deck 3',category:"Sample1"},{id: 4, name: 'Deck 4',category:"Sample3"}];
	};
   return items;
  
});