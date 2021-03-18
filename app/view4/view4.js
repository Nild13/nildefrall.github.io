angular.module('myApp.view4', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view4', {
      templateUrl: 'view4/view4.html',
      controller: 'View4Ctrl'
    });
  }])


  .controller('View4Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS2 = function(){
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
    $scope.NFdataTab = [];
    $scope.pushData = function(){
      // if(NFname && NFsurname && NFPESEL && NFconfession && NFUKsport && NFaddress && NFcity && NFvoivodeship){
      // console.log(NFname, NFsurname, NFPESEL, NFconfession, NFUKsport, NFaddress, NFcity, NFvoivodeship)

      
          let NFdataFromInput = { 
            'name': $scope.NFdataTab.name, 
            'surname': $scope.NFdataTab.surname, 
            'PESEL': $scope.NFdataTab.PESEL, 
            'confession': $scope.NFdataTab.confession, 
            'FavoritSport': $scope.NFdataTab.FavoritSport, 
            'address': $scope.NFdataTab.address, 
            'city': $scope.NFdataTab.city, 
            'voivodeship': $scope.NFdataTab.voivodeship
          };

          if (localStorage.getItem('NFdata') == null) {
            localStorage.setItem('NFdata', '[]');
          }
          localStorage.setItem('NFdata', JSON.stringify(NFdataFromInput));
          //<-------------------------------------------------------------->
          localStorage.setItem('NFdata7', JSON.stringify(NFdataFromInput));
          //<-------------------------------------------------------------->
          $scope.downloadDataFromLS()
          console.log(NFdataFromInput.name)
    }
  // }
  
          $scope.downloadDataFromLS = function () {
          if (localStorage.getItem('NFdata') !== null) {
            $scope.NFdataTab = JSON.parse(localStorage.getItem('NFdata'))
            $scope.NFdataTaba = JSON.parse(localStorage.getItem('NFdata')).name
            console.log($scope.NFdataTab)
          }
  }
  
  $scope.downloadDataFromLS()
          
  }]);