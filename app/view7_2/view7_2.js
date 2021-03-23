angular.module('myApp.view7_2', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view7_2', {
      templateUrl: 'view7_2/view7_2.html',
      controller: 'View7_2Ctrl'
    });
  }])


  .controller('View7_2Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS5 = function(){
      if(confirm("Usunięcie spowoduje, że stracisz wszystkie dane. Na pewno tego chcesz?")){
        localStorage.removeItem("NFdata")
        localStorage.removeItem("NFdata5")
        localStorage.removeItem("NFdata6")
        localStorage.removeItem("NFdata7")
        window.location.href = "#!/view3_1_2";
      }
      
      else{
        alert("Anulowano")
  }
}
    $scope.NFdata7 = [];
    $scope.downloadDataFromLS7 = function () {
      if (localStorage.getItem('NFdata7') != null) {
        $scope.NFdata7 = JSON.parse(localStorage.getItem('NFdata7'));
      }
    }
    $scope.downloadDataFromLS7()
  }]);