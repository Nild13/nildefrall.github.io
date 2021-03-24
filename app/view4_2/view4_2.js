angular.module('myApp.view4_2', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view4_2', {
      templateUrl: 'view4_2/view4_2.html',
      controller: 'View4_2Ctrl'
    });
  }])


  .controller('View4_2Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.clearLS2 = function(){
     
      // if(confirm("Usunięcie spowoduje, że jeżeli rozpocząłeś pracę nad formularzem zostanie on wyczyszczony. Na pewno tego chcesz?")){
        localStorage.removeItem("NFdata_2")
        localStorage.removeItem("NFdata5_2")
        localStorage.removeItem("NFdata6_2")
        localStorage.removeItem("NFdata7_2")
        window.location.href = "#!/view3_1_2";
      // }
      //tu modal
  //     else{
  //       alert("Anulowano")
  // }
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

          if (localStorage.getItem('NFdata_2') == null) {
            localStorage.setItem('NFdata_2', '[]');
          }
          localStorage.setItem('NFdata_2', JSON.stringify(NFdataFromInput));
          //<-------------------------------------------------------------->
          localStorage.setItem('NFdata7_2', JSON.stringify(NFdataFromInput));
          //<-------------------------------------------------------------->
          $scope.downloadDataFromLS()
          console.log(NFdataFromInput.name)
    }
  // }
  
          $scope.downloadDataFromLS = function () {
          if (localStorage.getItem('NFdata_2') !== null) {
            $scope.NFdataTab = JSON.parse(localStorage.getItem('NFdata_2'))
            $scope.NFdataTaba = JSON.parse(localStorage.getItem('NFdata_2')).name
            console.log($scope.NFdataTab)
          }
  }
  
  $scope.downloadDataFromLS()
          
  }]);