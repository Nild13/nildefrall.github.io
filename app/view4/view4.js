angular.module('myApp.view4', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view4', {
      templateUrl: 'view4/view4.html',
      controller: 'View4Ctrl'
    });
  }])


  .controller('View4Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.NFdataTab = [];
    $scope.pushData = function(NFname, NFsurname, NFPESEL, NFconfession, NFUKsport, NFaddress, NFcity, NFvoivodeship){
      if(NFname && NFsurname && NFPESEL && NFconfession && NFUKsport && NFaddress && NFcity && NFvoivodeship){
      console.log(NFname, NFsurname, NFPESEL, NFconfession, NFUKsport, NFaddress, NFcity, NFvoivodeship)

      
          let NFdataFromInput = { 'name': NFname, 'surname': NFsurname, 'PESEL':NFPESEL, 'confession': NFconfession, 'FavoritSport': NFUKsport, 'address': NFaddress, 'city': NFcity, 'voivodeship': NFvoivodeship};
          if (localStorage.getItem('NFdata') == null) {
            localStorage.setItem('NFdata', '[]');
          }
          localStorage.setItem('NFdata', JSON.stringify(NFdataFromInput));
          $scope.downloadDataFromLS()
    }
  }
          $scope.downloadDataFromLS = function () {
          if (localStorage.getItem('NFdata') != null) {
            $scope.NFdataTab = JSON.parse(localStorage.getItem('NFdata'));
            console.log("Imie" +' '+ $scope.NFdataTab.name)
          }
  }
  $scope.downloadDataFromLS()
          
  }]);