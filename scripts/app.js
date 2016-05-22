var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller("testController", ['$scope', function($scope) {
	$scope.message = 'this works';

	$scope.todos = [
		{'item': 'Shopping', 'done': false}
	];

	$scope.addToDo = function() {
		$scope.todos.push({'item':$scope.newToDo, 'done':false});
		$scope.newToDo = '';
	};

	$scope.removeToDo = function() {
		$scope.todos = $scope.todos.filter(function(item) {
			return !item.done;
		})
	};
}])
