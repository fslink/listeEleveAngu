angular.
	module('studentListApp').
	config(['$locationProvider', '$routeProvider' ,
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('client');

			$routeProvider.
	        when('/students', {
	          template: '<student-list></student-list>'
	        }).
	        when('/students/:studentId', {
	          template: '<student-detail></student-detail>'
	        }).
	        otherwise('/students');
			}
	]);