var app = angular.module('myApp', ['ngRoute']);

// Routing configuration - control where view(s) loaded
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		name: 'home',
		templateUrl: 'views/home.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

// Controller in which data is set and add/remove functions defined
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
