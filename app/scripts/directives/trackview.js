'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:trackview
 * @description
 * # trackview
 */
angular.module('unbeschriebenEpApp')
  .directive('trackview', function () {
    return {
      restrict: 'C',
      controller: function($element) {
        this.element = $element;
      }
    };
  });
