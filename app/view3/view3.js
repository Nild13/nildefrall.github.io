'use strict';

// const { forEach } = require("angular");

angular.module('myApp.view3', ['ngRoute'])



  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl'
    });
  }])


  .controller('View3Ctrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
    // $scope.name = ' ';
    // $scope.surname = ' ';
    
    $scope.inputData = function (name, surname) {
      console.log(`key ${name} value ${surname}`);
      if(name && surname){
      let newsurNameDataFrominput = { 'name': name, 'surname': surname };
      if (localStorage.getItem('people2') == null) {
        localStorage.setItem('people2', '[]');
      }
      let oldsurNameDataFrominput = JSON.parse(localStorage.getItem('people2'))
      oldsurNameDataFrominput.push(newsurNameDataFrominput);
      localStorage.setItem('people2', JSON.stringify(oldsurNameDataFrominput));
      $scope.getDataFromLS()
    }
    }


    $scope.getDataFromLS = function () {
      if (localStorage.getItem('people2') != null) {
        $scope.peopleTab = JSON.parse(localStorage.getItem('people2'));
      }
      $scope.imie = '';
      $scope.nazwisko = '';
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
      if (localStorage.getItem('people2') == null) {
        localStorage.setItem('people2', '[]');
      }
      let oldData = JSON.parse(localStorage.getItem('people2'))
      console.log(oldData[$scope.changeInput])
      oldData.splice($scope.changeInput, 1, newData);
      localStorage.setItem('people2', JSON.stringify(oldData));
      console.log('przeszlo caly')
      // location.reload()
    }

    $scope.removeRow = function () {
      let dataforRemove = JSON.parse(localStorage.getItem('people2'))
      console.log(dataforRemove[$scope.changeInput])
      dataforRemove.splice($scope.changeInput, 1);
      localStorage.setItem('people2', JSON.stringify(dataforRemove));
      console.log('przeszlo caly')
      // location.reload()
      $scope.peopleTab.splice($scope.changeInput,1);
    }
    
    $scope.peopleTab = []
    $scope.peopleTab2 = []
    $scope.getDataFromLS();
  }]);

