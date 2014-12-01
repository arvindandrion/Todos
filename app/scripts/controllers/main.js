'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('MainCtrl', function ($scope) {
  	//$scope.inputList = "";
    $scope.lists = [
      {text: "Go To NoFrills"},
      {text: "Eating Outside"},
      {text: "Buy Drinks"},
    ];

    $scope.addList = function(addlistVal){
    	$scope.lists.push({text: addlistVal});
    }

  });
