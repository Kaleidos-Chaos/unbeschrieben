'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:imageOnload
 * @description
 * # imageOnload
 */
angular.module('unbeschriebenEpApp')
  .directive('imageOnload', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('load', function() {
          scope.$eval(attrs.imageOnload);
        });
      }
    };
  });
