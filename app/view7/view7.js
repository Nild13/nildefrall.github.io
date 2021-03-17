angular.module('myApp.view7', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view7', {
      templateUrl: 'view7/view7.html',
      controller: 'View7Ctrl'
    });
  }])


  .controller('View7Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.NFdata7 = [];
    $scope.downloadDataFromLS7 = function () {
      if (localStorage.getItem('NFdata7') != null) {
        $scope.NFdata7 = JSON.parse(localStorage.getItem('NFdata7'));
      }
    }
    $scope.downloadDataFromLS7()
  }]);