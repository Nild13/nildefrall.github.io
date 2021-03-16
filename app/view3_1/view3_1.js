'use strict';

// const { forEach } = require("angular");

angular.module('myApp.view3_1', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3_1', {
      templateUrl: 'view3_1/view3_1.html',
      controller: 'View3_1Ctrl'
    });
  }])


  .controller('View3_1Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){}]);

