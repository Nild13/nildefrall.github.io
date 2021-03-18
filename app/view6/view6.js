angular.module('myApp.view6', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view6', {
      templateUrl: 'view6/view6.html',
      controller: 'View6Ctrl'
    });
  }])


  .controller('View6Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS4 = function(){
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
    $scope.NFdataTab6 = [];
    $scope.pushData6 = function(){
    
        let NFdataFromInput6 = {
          'FPhone': $scope.NFdataTab6.FPhone, 
          'Boots': $scope.NFdataTab6.Boots, 
          'Chairman':$scope.NFdataTab6.Chairman, 
          'RAM': $scope.NFdataTab6.RAM, 
          'FSport': $scope.NFdataTab6.FSport, 
          'Sportsman': $scope.NFdataTab6.Sportsman, 
          'Old': $scope.NFdataTab6.Old
        };
        if (localStorage.getItem('NFdata6') == null) {
          localStorage.setItem('NFdata6', '[]');
        }
        localStorage.setItem('NFdata6', JSON.stringify(NFdataFromInput6));
         //<---------------------------------------------------------
         let newDataForSummary3 = JSON.parse(localStorage.getItem('NFdata6'))
         let oldDataForSummary3 = JSON.parse(localStorage.getItem('NFdata7'))
         let blabla3 = Object.assign(newDataForSummary3, oldDataForSummary3)
         localStorage.setItem('NFdata7', JSON.stringify(blabla3));
         //<---------------------------------------------------------
         $scope.downloadDataFromLS6()
    }
    
    $scope.downloadDataFromLS6 = function () {
      if (localStorage.getItem('NFdata6') != null) {
        $scope.NFdataTab6 = JSON.parse(localStorage.getItem('NFdata6'));
      }
      }
      $scope.downloadDataFromLS6()
  }]);