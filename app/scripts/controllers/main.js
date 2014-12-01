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
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addList = function(yoh){
    	// console.log(yoh);
    	$scope.lists.push(yoh);
    }

  });
