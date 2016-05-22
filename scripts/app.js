var app = angular.module('myApp', []);

app.controller("testController", ['$scope', function($scope) {
	$scope.message = 'this works';

	$scope.todos = [
		{'item': 'Shopping', 'done': false}
	];

	$scope.addToDo = function() {

	};

	$scope.removeToDo = function() {

	};
}])
