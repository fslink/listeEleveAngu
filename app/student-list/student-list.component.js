 angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: ['Eleve', function studentListController(Eleve) {

      this.students = Eleve.query();
      this.orderProp = "nom";

    }]
 });