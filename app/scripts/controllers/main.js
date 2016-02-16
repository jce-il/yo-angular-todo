'use strict';

/**
 * @ngdoc function
 * @name yoAngularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularTodoApp
 */
angular.module('yoAngularTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
  });
