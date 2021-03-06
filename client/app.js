var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: "userController"
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'questionController'
	})
	.when('/question/:id', {
		templateUrl: 'partials/question.html',
		controller: 'questionController'

	})
	.when('/new_question', {
		templateUrl: 'partials/newQuestion.html',
		controller: 'questionController'

	})
	.when('/question/:id/new_answer', {
		templateUrl: 'partials/answer.html',
		controller: 'questionController'

	})
	.otherwise({
		redirectTo: "/"
	})
})