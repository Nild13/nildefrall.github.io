angular.module('myApp.view6_2', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view6_2', {
      templateUrl: 'view6_2/view6_2.html',
      controller: 'View6_2Ctrl'
    });
  }])


  .controller('View6_2Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS4 = function(){
      // if(confirm("Usunięcie spowoduje, że jeżeli rozpocząłeś pracę nad formularzem zostanie on wyczyszczony. Na pewno tego chcesz?")){
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
        if (localStorage.getItem('NFdata6_2') == null) {
          localStorage.setItem('NFdata6_2', '[]');
        }
        localStorage.setItem('NFdata6_2', JSON.stringify(NFdataFromInput6));
         //<---------------------------------------------------------
         let newDataForSummary3 = JSON.parse(localStorage.getItem('NFdata6_2'))
         let oldDataForSummary3 = JSON.parse(localStorage.getItem('NFdata7_2'))
         let blabla3 = Object.assign(newDataForSummary3, oldDataForSummary3)
         localStorage.setItem('NFdata7_2', JSON.stringify(blabla3));
         //<---------------------------------------------------------
         $scope.downloadDataFromLS6()
    }
    
    $scope.downloadDataFromLS6 = function () {
      if (localStorage.getItem('NFdata6_2') != null) {
        $scope.NFdataTab6 = JSON.parse(localStorage.getItem('NFdata6_2'));
      }
      }
      $scope.downloadDataFromLS6()
  }]);