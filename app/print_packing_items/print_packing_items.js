'use strict';

angular.module('myApp.printPackingItems', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/print_packing_items', {
    templateUrl: 'print_packing_items/print_packing_items.html',
    controller: 'PrintItemsCtrl'
  });
}])

.controller('PrintItemsCtrl', ['$scope', 'items', function($scope, items) {
	$scope.items = items;
}]);