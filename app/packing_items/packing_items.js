'use strict';

angular.module('myApp.packingItems', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/packing_items', {
    templateUrl: 'packing_items/packing_items.html',
    controller: 'ItemsCtrl'
  });
}])

.controller('ItemsCtrl', ['$scope', 'items', function($scope, items) {
	$scope.items = items;
	window.i = items;
	$scope.addItem = function(){
		$scope.items.push({name: null, category: null, number: 0});
	};

	$scope.removeItem = function(item){
		var idx = $scope.items.indexOf(item);
		$scope.items.splice(idx, 1);
	};
}]);