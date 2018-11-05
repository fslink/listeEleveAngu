 angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: ['$http', function studentListController($http) {

      var self = this;
      this.orderProp = "nom";

      $http.get('api/eleves').then(function(response){
      	self.students = response.data;
      })

    }]
 });