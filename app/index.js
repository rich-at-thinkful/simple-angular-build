const angular = require('angular');
require('angular-route');
const initControllers = require('./controllers');
const initRoutes = require('./routes');

angular.module('myApp', ['ngRoute']);
initControllers();
initRoutes();

