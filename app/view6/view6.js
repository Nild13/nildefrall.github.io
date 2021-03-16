angular.module('myApp.view6', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view6', {
      templateUrl: 'view6/view6.html',
      controller: 'View6Ctrl'
    });
  }])


  .controller('View6Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService){
    $scope.pushData6 = function(NFphone, NFboots, NFchairman, NFRAM, NFsport, NFsportsman, NFold){
      if(NFphone && NFboots && NFchairman && NFRAM && NFsport && NFsportsman && NFold){

        let NFdataFromInput6 = { 'FPhone': NFphone, 'Boots': NFboots, 'Chairman':NFchairman, 'RAM': NFRAM, 'FSport': NFsport, 'Sportsman': NFsportsman, 'Old': NFold};
        if (localStorage.getItem('NFdata6') == null) {
          localStorage.setItem('NFdata6', '[]');
        }
        localStorage.setItem('NFdata6', JSON.stringify(NFdataFromInput6));
      }

    }
  }]);