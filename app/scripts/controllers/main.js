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
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};
  });
