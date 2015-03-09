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
    'sticky',
    'cloudinary'
  ])
  .config(function ($routeProvider) {
    window.jQuery.cloudinary.config('cloud_name', 'xiphe');
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
