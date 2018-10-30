describe('studentListController', function(){

	beforeEach(module('studentListApp'));

	it('it should create a students model with 3 students', inject(function($controller){
		 var scope = {};
    	 var ctrl = $controller('studentListController', {$scope: scope});

    	 expect(scope.students.length).toBe(3);
	}))
})