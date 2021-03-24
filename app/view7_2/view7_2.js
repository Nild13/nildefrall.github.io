angular.module('myApp.view7_2', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view7_2', {
      templateUrl: 'view7_2/view7_2.html',
      controller: 'View7_2Ctrl'
    });
  }])


  .controller('View7_2Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS5 = function(){
      // if(confirm("Usunięcie spowoduje, że stracisz wszystkie dane. Na pewno tego chcesz?")){
        localStorage.removeItem("NFdata_2")
        localStorage.removeItem("NFdata5_2")
        localStorage.removeItem("NFdata6_2")
        localStorage.removeItem("NFdata7_2")
        window.location.href = "#!/view3_1_2";
      }
      
//       else{
//         alert("Anulowano")
//   }
// }
    $scope.NFdata7 = [];
    $scope.downloadDataFromLS7 = function () {
      if (localStorage.getItem('NFdata7_2') != null) {
        $scope.NFdata7 = JSON.parse(localStorage.getItem('NFdata7_2'));
      }
    }
    $scope.downloadDataFromLS7()
  }]);