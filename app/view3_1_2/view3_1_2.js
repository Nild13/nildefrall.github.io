'use strict';

// const { forEach } = require("angular");

angular.module('myApp.view3_1_2', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3_1_2', {
      templateUrl: 'view3_1_2/view3_1_2.html',
      controller: 'View3_1_2Ctrl'
    });
  }])


  .controller('View3_1_2Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    // $scope.flaga = "true";
    $scope.flaga = localStorage.getItem('NFdata_2') !== null
    $scope.flaga2 = localStorage.getItem('NFdata7_2') !== null
    console.log($scope.flaga)
  //   $scope.funkcjaButton = function(){
  //     if (localStorage.getItem('NFdata') == null) {
  //       return $scope.flaga = true;
  //   }
  //   else{
  //       return $scope.flaga = false;
  //   }
  // }
    $scope.clearLS = function(){   
        localStorage.removeItem("NFdata_2")
        localStorage.removeItem("NFdata5_2")
        localStorage.removeItem("NFdata6_2")
        window.location.href = "#!/view4_2";
}
// $scope.funkcjaButton()
  }]);

