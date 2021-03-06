'use strict';

angular.module('myApp.view3_1_2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3_1_2', {
      templateUrl: 'view3_1_2/view3_1_2.html',
      controller: 'View3_1_2Ctrl'
    });
  }])


  .controller('View3_1_2Ctrl', ['$scope', '$http', 'localStorageService', function ($scope, $http, localStorageService){


    $scope.flaga = localStorage.getItem('NFdata_2') !== null
    $scope.flaga2 = localStorage.getItem('NFdata7_2') !== null
    console.log($scope.flaga)

    $scope.clearLS = function(){   
        localStorage.removeItem("NFdata_2")
        localStorage.removeItem("NFdata5_2")
        localStorage.removeItem("NFdata6_2")
        window.location.href = "#!/view4_2";
}
  }]);

