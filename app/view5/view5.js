angular.module('myApp.view5', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view5', {
      templateUrl: 'view5/view5.html',
      controller: 'View5Ctrl'
    });
  }])
 
  .controller('View5Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.NFdataTab5 = [];
    $scope.pushData5 = function(NFCPU, NFGPU, NFanimal, NFpolicy, NFfood, NFsize, NFCcity, NFCcity2){
        if(NFCPU && NFGPU && NFanimal && NFpolicy && NFfood && NFsize && NFCcity && NFCcity2){

          let NFdataFromInput5 = { 'CPU': NFCPU, 'GPU': NFGPU, 'Animal':NFanimal, 'Policy': NFpolicy, 'Food': NFfood, 'Size': NFsize, 'ChildCity': NFCcity, 'ChildCity2': NFCcity2};
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
        }
    }
    $scope.downloadDataFromLS5 = function () {
      if (localStorage.getItem('NFdata5') != null) {
        $scope.NFdataTab5 = JSON.parse(localStorage.getItem('NFdata5'));
        
      }
}
$scope.downloadDataFromLS5()
  }]);