'use strict';

// const { forEach } = require("angular");

angular.module('myApp.view3_1', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3_1', {
      templateUrl: 'view3_1/view3_1.html',
      controller: 'View3_1Ctrl'
    });
  }])


  .controller('View3_1Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
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
      if(confirm("Rozpoczęcie wypełniania spowoduje, że jeżeli rozpocząłeś pracę nad formularzem zostanie on wyczyszczony. Na pewno tego chcesz?")){
        localStorage.removeItem("NFdata")
        localStorage.removeItem("NFdata5")
        localStorage.removeItem("NFdata6")
        window.location.href = "#!/view4";
      }
      
      else{
        alert("Anulowano")
  }
}
// $scope.funkcjaButton()
  }]);

