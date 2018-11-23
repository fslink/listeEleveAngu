angular.
  module('core.eleve').
  factory('Eleve', ['$resource',
    function($resource) {
      return $resource('api/eleves', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);