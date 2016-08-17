const angular = require('angular');

module.exports = function(){

  angular.module('myApp')
    .config(['$routeProvider', function($routeProvider){

      $routeProvider
        .when('/books', {
          templateUrl: 'app/templates/books/index.html',
          controller: 'BooksController',
          controllerAs: 'booksVm'
        });
    }]);

};
