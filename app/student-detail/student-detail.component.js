angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', '$http', 
      function studentDetailController($routeParams, $http) {
      	var self = this;

        $http.get('api/eleves/' + $routeParams.studentId).then(function(response){
      	 self.student = response.data;
        })

      }
    ]
  });