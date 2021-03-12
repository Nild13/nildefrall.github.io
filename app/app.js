'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'LocalStorageModule',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider', function($locationProvider, $routeProvider, localStorageServiceProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
  localStorageServiceProvider.setPrefix(' ');
}]);