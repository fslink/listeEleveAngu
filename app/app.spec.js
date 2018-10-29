describe('ListeElevesController', function(){

	beforeEach(module('listeElevesApp'));

	it('it should create a students model with 3 students', inject(function($controller){
		 var scope = {};
    	 var ctrl = $controller('ListeElevesController', {$scope: scope});

    	 expect(scope.eleves.length).toBe(3);
	}))
})