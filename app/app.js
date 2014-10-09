'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.packingItems',
  'myApp.printPackingItems',
  'ng.group' 
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/packing_items'});
}])
.value('items', []);

