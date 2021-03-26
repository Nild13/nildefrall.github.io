'use strict';

// const { forEach } = require("angular");

angular.module('myApp.view1', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])


  .controller('View1Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
    $scope.Letter = 'tak'
    $scope.name = ' ';
    $scope.surname = ' ';

    $scope.inputData = function (name, surname) {
      console.log(`key ${name} value ${surname}`);
      let newsurNameDataFrominput = { 'name': name, 'surname': surname };
      if (localStorage.getItem('people') == null) {
        localStorage.setItem('people', '[]');
      }
      let oldsurNameDataFrominput = JSON.parse(localStorage.getItem('people'))
      oldsurNameDataFrominput.push(newsurNameDataFrominput);
      localStorage.setItem('people', JSON.stringify(oldsurNameDataFrominput));
    }


    $scope.getDataFromLS = function () {
      if (localStorage.getItem('people') != null) {
        $scope.peopleTab = JSON.parse(localStorage.getItem('people'));
      }
    }

    $scope.showNameInInput = function (person) {
      $scope.changeInput = $scope.peopleTab.indexOf(person)
      console.log($scope.changeInput)
      let mienna = $scope.peopleTab[$scope.changeInput]
      $scope.newName = mienna.name;
      $scope.newSurname = mienna.surname;
    }

    $scope.replaceNameAndSurname = function () {
      let newData = { 'name': $scope.newName, 'surname': $scope.newSurname };
      if (localStorage.getItem('people') == null) {
        localStorage.setItem('people', '[]');
      }
      let oldData = JSON.parse(localStorage.getItem('people'))
      console.log(oldData[$scope.changeInput])
      oldData.splice($scope.changeInput, 1, newData);
      localStorage.setItem('people', JSON.stringify(oldData));
      console.log('przeszlo caly')
      location.reload()
    }

    $scope.removeRow = function () {
      let dataforRemove = JSON.parse(localStorage.getItem('people'))
      console.log(dataforRemove[$scope.changeInput])
      dataforRemove.splice($scope.changeInput, 1);
      localStorage.setItem('people', JSON.stringify(dataforRemove));
      console.log('przeszlo caly')
      location.reload()
    }
    $scope.peopleTab = []
    $scope.peopleTab2 = []
    $scope.getDataFromLS();
  }]);

