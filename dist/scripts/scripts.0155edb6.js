"use strict";angular.module("todosApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("todosApp").controller("MainCtrl",["$scope",function(a){a.lists=[],a.addToList=function(b){a.lists.push({text:b})},a.removeItem=function(b){a.lists.splice(b,1)}}]),angular.module("todosApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);