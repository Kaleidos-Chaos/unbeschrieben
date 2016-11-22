'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:emailbutton
 * @description
 * # emailbutton
 */
angular.module('unbeschriebenEpApp')
  .directive('emailbutton', function ($http) {
    return {
      templateUrl: 'views/emailbutton.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.email = { address: '' };
        scope.state = { done: false };

        scope.$watch('email.address', function(a, b) {
          if (a !== b) {
            scope.state.done = a === '';
          }
        });

        scope.go = function() {
          $http.post('http://unbeschrieben-download.hannesdiem.de/subscribe', {email: scope.email.address}).then(function() {
            scope.email.address = '';
          });
        };
      }
    };
  });
