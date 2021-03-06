'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'LocalStorageModule',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view3_1',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.view7',
  'myApp.view3_1_2',
  'myApp.view4_2',
  'myApp.view5_2',
  'myApp.view6_2',
  'myApp.view7_2',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider', function($locationProvider, $routeProvider, localStorageServiceProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
  localStorageServiceProvider.setPrefix(' ');
}]);