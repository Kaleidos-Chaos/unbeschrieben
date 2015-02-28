'use strict';

/**
 * @ngdoc overview
 * @name unbeschriebenEpApp
 * @description
 * # unbeschriebenEpApp
 *
 * Main module of the application.
 */
angular
  .module('unbeschriebenEpApp', [
    'ngAria',
    'mediaPlayer',
    'ngMessages',
    'ngRoute',
    'sticky'
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
