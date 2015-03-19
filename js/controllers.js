'use strict';
var decks;
var deckCount;
var cards=[];
var cardCount=0;
/* Controllers */

var deckControllers = angular.module('deckControllers',[]);

//Home Page controller(Home.html) 
//Manage Deck, stats, info, options menus
deckControllers.controller('HomeCtrl',['$scope','$routeParams','userDecks','$location',
	function($scope,$routeParams,userDecks,$location)
	{
		
		
		$scope.path=$location.$$path;
	    decks=userDecks.query()
		  deckCount=decks.length;
		  console.log(deckCount);
		  
	 
	  element_display([],['header-back-btn','header-home-btn'],'Qcards');
	}
]);

//Manage Decks page controllers(createDeck.html)
//Create, Edit, Import, Export, Delete, Download, List Cards, Purchase
deckControllers.controller('manageDecksCtrl',['$scope','$routeParams','$location',
	function($scope,$routeParams,$location)
	{
		element_display(['header-back-btn'],['header-home-btn'],'Manage Decks');  
	}
]);


//Create Decks Controller(createDeck.html)
deckControllers.controller('createDeckCtrl', ['$scope', '$routeParams','$window','$location',
  function($scope, $routeParams,$window,$location) {
	$scope.path=$location.$$path;
	$scope.category='';
	$scope.setname='';
    $scope.cancel=function()
	{
		 cancel($location); //this function declared in app_functions.js
		
	};
	$scope.create=function(setname,category)
	{
		console.log("Create");
		var deck={};
		deckCount++;
		deck.id=deckCount;
		deck.name=setname;
		deck.category=category
		decks.push(deck);
		$location.path("/decksList");
		// $window.alert(setname+' '+category);
	}
	element_display(['header-back-btn','header-home-btn'],[],'Create Decks');
  }]);

	  

//Edit Deck Controller(createCard.html)
deckControllers.controller('editDeckCtrl',['$scope','$routeParams','$location',
  function($scope,$routeParas,$location)
  {
	  for(var i=0;i<decks.length;i++)
	  {
		  if($routeParas.id==decks[i].id)
		  {
		 $scope.category=decks[i].category;
		 $scope.setname=decks[i].name;
	  
		  }
	}
	$scope.cancel=function()
	{
		cancel($location); //this function declared in app_functions.js
   		 
		
	};
	 $scope.save=function(name,category)
	 {
		for(var i=0;i<decks.length;i++)
	  {
		  if($routeParas.id==decks[i].id)
		  {
		 decks[i].category=category;
		 decks[i].name=name;
	 
		  }
	}
	 $location.path("/decksListEdit");
	}
	element_display(['header-back-btn','header-home-btn'],[],'Edit Deck');
  }
]);	  

  
//Import Decks Controller(import.html)  
deckControllers.controller('importCtrl',['$scope','$routeParams','$location',
  function($scope,$routeParas,$location)
  {
	$scope.cancel=function()
	{
		cancel($location); //this function declared in app_functions.js
		
	};
	$scope.importBtn=function(setname,category)
	{
		console.log("Create");
		var deck={};
		deck.name=setname;
		deck.category=category
		decks.push(deck);
		$location.path("/decksList");
		// $window.alert(setname+' '+category);
	}
	element_display(['header-back-btn','header-home-btn'],[],'Import Deck');
  }]);
 
//Export Decks Controller(export.html)
deckControllers.controller('exportDeckCtrl',['$scope','$routeParams','$location',
  function($scope,$routeParas,$location)
  {
	$scope.cancel=function()
	{
		cancel($location); //this function declared in app_functions.js
   		 
		
	};
	
	$scope.next=function(setname,category)
	{
		console.log("Create");
		var deck={};
		deck.name=setname;
		deck.category=category
		decks.push(deck);
		$location.path("/decksList");
		// $window.alert(setname+' '+category);
	}
	
	$scope.help=function()
	{
		
	}
	element_display(['header-back-btn','header-home-btn'],[],'Export Deck');
  }
]);

//Decks List Controller(decksList.html)
deckControllers.controller('decksListCtrl',['$scope','$routeParams','$location',
  function($scope,$routeParas)
  {
	  $scope.option='createCard';
	  $scope.decks=decks;
	  element_display(['header-back-btn','header-home-btn'],[],'Decks');
  }
  
]);


//Decks List For edit Controller(decksList.html)
deckControllers.controller('decksListEditCtrl',['$scope','$routeParams','$location',
  function($scope,$routeParas)
  {
	  $scope.option='edit';
	  $scope.decks=decks;
	  element_display(['header-back-btn','header-home-btn'],[],'Decks');
  }
]);

//Decks List for delete Controller(decksList.html)
deckControllers.controller('decksListDeleteCtrl',['$scope','$routeParams','$location',
  function($scope,$routeParas)
  {
	   element_display(['header-back-btn','header-home-btn'],[],'Decks');
	  $scope.option='delete';
	  $scope.decks=decks;
	  $scope.user = {
    deckList: []
  };
  }
]);
//Purchase Decks List Controller(purchaseDeck.html)
deckControllers.controller('purchaseDeckCtrl',['$scope','$routeParams',"$location","purchaseDecks",
  function($scope,$routeParas,$location,purchaseDecks)
  {
	  $scope.purchaseDecks=purchaseDecks.query();
	  
	  $scope.cancel=function(){
		cancel($location); //this function declared in app_functions.js
		  }
		   element_display(['header-back-btn','header-home-btn'],[],'Purchase Decks');
  }
]);

//Create card Controller(createCard.html)
deckControllers.controller('createCardCtrl',['$scope','$routeParams',"$location",
  function($scope,$routeParas,$location)
  {
console.log($routeParas.id);
	 $scope.cardCount=cardCount;
	 $scope.deleteCard=function(id)
	 {
		 console.log(id);
		 }
  }
]);

//download deck Controller(download.html)
deckControllers.controller('downloadCtrl',['$scope','$routeParams',"$location","downloadDecks",
  function($scope,$routeParas,$location,downloadDecks)
  {
$scope.downloadDecks=downloadDecks.query();
	
	
	 $scope.cancel=function(){
		cancel($location); //this function declared in app_functions.js
		
		  }
		   element_display(['header-back-btn','header-home-btn'],[],'Download Decks');
  }
]);

var checklistCtrl = angular.module("checklistCtrl", ["checklist-model"]);
checklistCtrl.controller('deckStudyListCtrl',['$scope', function($scope) {
  $scope.decksStudyList = decks;
  $scope.user = {
    deckStudyList: [$scope.decksStudyList[1]]
  };
  $scope.checkAll = function() {
    $scope.user.deckStudyList = angular.copy($scope.decksStudyList);
  };
  $scope.uncheckAll = function() {
    $scope.user.deckStudyList = [];
  };
  $scope.checkFirst = function() {
    $scope.user.deckStudyList.splice(0, $scope.user.decksStudyList.length); 
    $scope.user.deckStudyList.push($scope.decksStudyList[0]);
  };
  element_display(['header-back-btn'],['header-home-btn'],'Learn');
}]);