'use strict';

angular.module('myApp.view2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $http) {
  $scope.error3 = true;
  let onRequestCompleted = function(response) {
    console.log(response.data)
    $scope.user = response.data;
}
  let onError = function(r){
    $scope.error3 = false;
    $scope.error2 = true;
    
    $scope.error = 'NIE MOŻNA WYŚWIETLIĆ NIC';
    
  }
$http.get("https://api.github.com/users/iamshaunjp").
    then(onRequestCompleted, onError);
});