angular.module('myApp.view7', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view7', {
      templateUrl: 'view7/view7.html',
      controller: 'View7Ctrl'
    });
  }])


  .controller('View7Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.NFdataTabSummary = [];
    $scope.NFdataTabSummary5 = [];
    $scope.NFdataTabSummary6 = [];
    $scope.funkcjaCoWszystkoWywoluje = function(){
      $scope.downloadDataFromLSsummary()
      $scope.downloadDataFromLSsummary5()
      $scope.downloadDataFromLSsummary6()
    }
    $scope.downloadDataFromLSsummary = function () {
      if (localStorage.getItem('NFdata') != null) {
        $scope.NFdataTabSummary = JSON.parse(localStorage.getItem('NFdata'));
        console.log("Imie" +' '+ $scope.NFdataTabSummary.name)
      }
    }
    $scope.downloadDataFromLSsummary5 = function () {
      if (localStorage.getItem('NFdata5') != null) {
        $scope.NFdataTabSummary5 = JSON.parse(localStorage.getItem('NFdata5'));
        
      }
    }
    $scope.downloadDataFromLSsummary6 = function () {
      if (localStorage.getItem('NFdata6') != null) {
        $scope.NFdataTabSummary6 = JSON.parse(localStorage.getItem('NFdata6'));
      }
    }
    $scope.funkcjaCoWszystkoWywoluje()
    console.log($scope.NFdataTabSummary,$scope.NFdataTabSummary5,$scope.NFdataTabSummary6)
  }]);