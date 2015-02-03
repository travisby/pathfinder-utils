'use strict';

/**
 * @ngdoc overview
 * @name pathfinderUtilsApp
 * @description
 * # pathfinderUtilsApp
 *
 * Main module of the application.
 */
angular
  .module('pathfinderUtilsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
