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
  })
  .run(function($rootScope) {
    $rootScope.getBackground = function() {
      return {
        'background-image': 'url("http://res.cloudinary.com/xiphe/image/upload/w_' +
        Math.ceil(window.innerWidth / 100) * 100 + ',h_' + Math.ceil(window.innerHeight / 100) * 100 + ',c_fill,q_80/bg_xrqytx.jpg")'
      };
    };
  });
