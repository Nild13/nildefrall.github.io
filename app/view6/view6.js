angular.module('myApp.view6', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view6', {
      templateUrl: 'view6/view6.html',
      controller: 'View6Ctrl'
    });
  }])


  .controller('View6Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.NFdataTab5 = [];
    $scope.tekst = 'teskt';
    $scope.pushData6 = function(NFphone, NFboots, NFchairman, NFRAM, NFsport, NFsportsman, NFold){
      if(NFphone && NFboots && NFchairman && NFRAM && NFsport && NFsportsman && NFold){

        let NFdataFromInput6 = { 'FPhone': NFphone, 'Boots': NFboots, 'Chairman':NFchairman, 'RAM': NFRAM, 'FSport': NFsport, 'Sportsman': NFsportsman, 'Old': NFold};
        if (localStorage.getItem('NFdata6') == null) {
          localStorage.setItem('NFdata6', '[]');
        }
        localStorage.setItem('NFdata6', JSON.stringify(NFdataFromInput6));
         //<---------------------------------------------------------
         let newDataForSummary = JSON.parse(localStorage.getItem('NFdata6'))
         let oldDataForSummary = JSON.parse(localStorage.getItem('NFdata7'))
         let blabla = Object.assign(newDataForSummary, oldDataForSummary)
         localStorage.setItem('NFdata7', JSON.stringify(blabla));
         //<---------------------------------------------------------
      }
    }
    $scope.downloadDataFromLS6 = function () {
      if (localStorage.getItem('NFdata6') != null) {
        $scope.NFdataTab6 = JSON.parse(localStorage.getItem('NFdata6'));
      }
      }
      $scope.downloadDataFromLS6()
  }]);