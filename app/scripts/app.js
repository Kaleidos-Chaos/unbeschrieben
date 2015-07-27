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
    'ngAudio',
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
    var pixelRatio = window.devicePixelRatio || 1;
    $rootScope.getBackground = function() {
      var width = Math.ceil(window.innerWidth / 100) * 100;
      var height = Math.ceil(window.innerHeight / 100) * 100;

      return {
        'background-size': width + 'px ' + height + 'px',
        'background-image': 'url("http://res.cloudinary.com/xiphe/image/upload/w_' +
        width * pixelRatio + ',h_' + height * pixelRatio +
        ',c_fill,q_80/bg_xrqytx.jpg")'
      };
    };
    $rootScope.getFooterBg = function() {
      var footer = document.getElementById('footer');
      if (!footer) {
        return false;
      }
      var width = Math.ceil(footer.offsetWidth / 100) * 100;
      var height = Math.ceil(footer.offsetHeight / 100) * 100;

      return {
        'background-size': width + 'px ' + height + 'px',
        'background-image': 'url("http://res.cloudinary.com/xiphe/image/upload/w_' +
        width * pixelRatio + ',h_' + height * pixelRatio + ',c_fill,q_80/true_n7lfap.jpg")'
      };
    };
  });
