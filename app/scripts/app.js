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
    'ngRoute',
    'sticky'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope) {
    $rootScope.getBackground = function() {
      return {
        'background-image': 'url("http://res.cloudinary.com/xiphe/image/upload/w_' +
        Math.ceil(window.innerWidth / 100) * 100 + ',h_' + Math.ceil(window.innerHeight / 100) * 100 + ',c_fill,q_80/bg_xrqytx.jpg")'
      };
    };
    $rootScope.getFooterBg = function() {
      var footer = document.getElementById('footer');
      if (!footer) {
        return false;
      }

      return {
        'background-image': 'url("http://res.cloudinary.com/xiphe/image/upload/w_' +
        Math.ceil(footer.offsetWidth / 100) * 100 + ',h_' + Math.ceil(footer.offsetHeight / 100) * 100 + ',c_fill,q_80/true_n7lfap.jpg")'
      };
    };
  });
