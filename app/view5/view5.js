angular.module('myApp.view5', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view5', {
      templateUrl: 'view5/view5.html',
      controller: 'View5Ctrl'
    });
  }])
 
  .controller('View5Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS3 = function(){
      if(confirm("Usunięcie spowoduje, że jeżeli rozpocząłeś pracę nad formularzem zostanie on wyczyszczony. Na pewno tego chcesz?")){
        localStorage.removeItem("NFdata")
        localStorage.removeItem("NFdata5")
        localStorage.removeItem("NFdata6")
        localStorage.removeItem("NFdata7")
        window.location.href = "#!/view3_1";
      }
      
      else{
        alert("Anulowano")
  }
}
    $scope.NFdataTab5 = [];
    $scope.pushData5 = function(){
        // if(NFCPU && NFGPU && NFanimal && NFpolicy && NFfood && NFsize && NFCcity && NFCcity2){

          let NFdataFromInput5 = { 
            'CPU': $scope.NFdataTab5.CPU,
            'GPU': $scope.NFdataTab5.GPU, 
            'Animal':$scope.NFdataTab5.Animal, 
            'Policy': $scope.NFdataTab5.Policy, 
            'Food': $scope.NFdataTab5.Food, 
            'Size': $scope.NFdataTab5.Size, 
            'ChildCity': $scope.NFdataTab5.ChildCity, 
            'ChildCity2': $scope.NFdataTab5.ChildCity2
          };
          if (localStorage.getItem('NFdata5') == null) {
            localStorage.setItem('NFdata5', '[]');
          }
          localStorage.setItem('NFdata5', JSON.stringify(NFdataFromInput5));
          //<---------------------------------------------------------
          let newDataForSummary = JSON.parse(localStorage.getItem('NFdata5'))
          let oldDataForSummary = JSON.parse(localStorage.getItem('NFdata7'))
          let blabla = Object.assign(newDataForSummary, oldDataForSummary)
          localStorage.setItem('NFdata7', JSON.stringify(blabla));
          //<---------------------------------------------------------
        // }
        $scope.downloadDataFromLS5()
    }
    $scope.downloadDataFromLS5 = function () {
      if (localStorage.getItem('NFdata5') != null) {
        $scope.NFdataTab5 = JSON.parse(localStorage.getItem('NFdata5'));
        
      }
}
$scope.downloadDataFromLS5()
  }]);