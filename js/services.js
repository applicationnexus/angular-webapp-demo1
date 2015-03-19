'use strict';

/* Services */

var deckServices = angular.module('deckServices', []);



deckServices.factory('userDecks',  function(){
var items={};
items.query=function(){
	return [{id: 1, name: 'Deck 1',category:"Sample1"},{id: 2, name: 'Deck 2',category:"Sample2"},{id: 3, name: 'Deck 3',category:"Sample1"},{id: 4, name: 'Deck 4',category:"Sample3"}];
	};
   return items;
  
});



deckServices.factory('purchaseDecks', 
  function(){
var items={};
items.query=function(){
	return [{"id":1,"name":"Purchase Deck 1","Price":"$2.00"},{"id":2,"name":"Purchase Deck 2","Price":"$1.00"},{"id":3,"name":"Purchase Deck 3","Price":"$3.00"},{"id":4,"name":"Purchase Deck 4","Price":"$2.00"},{"id":5,"name":"Purchase Deck 5","Price":"$4.00"},{"id":6,"name":"Purchase Deck 6","Price":"$2.00"},{"id":7,"name":"Purchase Deck 7","Price":"$1.99"},{"id":8,"name":"Purchase Deck 8","Price":"$2.00"}];
	};
   return items;
});


deckServices.factory('downloadDecks', 
  function(){
var items={};
items.query=function(){
	return [{"id":1,"name":"Deck 1"},{"id":2,"name":"Deck 2"},{"id":3,"name":"Deck 3"},{"id":4,"name":"Deck 4"},{"id":5,"name":"Deck 5"},{"id":6,"name":"Deck 6"},{"id":7,"name":"Deck 7"},{"id":8,"name":"Deck 8"}];
	};
   return items;
});
