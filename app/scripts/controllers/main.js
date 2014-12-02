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
    $scope.lists = [ ];

    $scope.addToList = function(addlistVal){
    	$scope.lists.push({text: addlistVal});
    };

    $scope.removeItem = function(index){
      $scope.lists.splice(index, 1);
    };

  });
