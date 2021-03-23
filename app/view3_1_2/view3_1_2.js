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
    $scope.flaga = localStorage.getItem('NFdata') !== null
    $scope.flaga2 = localStorage.getItem('NFdata7') !== null
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
      if(confirm("Na pewno chcesz rozpocząć pracę z nowym formularzem?")){
        localStorage.removeItem("NFdata")
        localStorage.removeItem("NFdata5")
        localStorage.removeItem("NFdata6")
        window.location.href = "#!/view4_2";
      }
      
      else{
        alert("Anulowano")
  }
}
// $scope.funkcjaButton()
  }]);

