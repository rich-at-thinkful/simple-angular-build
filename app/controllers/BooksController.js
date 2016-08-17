const angular = require('angular');
module.exports = function(){

  const BOOKS = [
    { title: 'Harry Potter' },
    { title: 'To Kill a Mockingbird' }
  ];

  function BooksController(){
    this.books = BOOKS;
  }

  angular.module('myApp')
    .controller('BooksController', [BooksController]);

};

