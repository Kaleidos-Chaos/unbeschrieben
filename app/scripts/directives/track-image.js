'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:trackImage
 * @description
 * # trackImage
 */
angular.module('unbeschriebenEpApp')
  .directive('trackImage', function () {
    return {
      restrict: 'C',
      require: '^trackview',
      link: function postLink(scope, element, attrs, trackview) {
        scope.getWidth = function() {
          return Math.round(element[0].offsetWidth / 50) * 50;
        };

        angular.element(window).on('scroll', function() {
          var stickyHeight = 31;
          var trackviewRect = trackview.element[0].getBoundingClientRect();
          var elementRect = element[0].getBoundingClientRect();
          var windowHeight = window.innerHeight - stickyHeight;

          if (trackviewRect.height <= elementRect.height) {
            return;
          }

          if (trackviewRect.top > stickyHeight) {
            return;
          }

          if (trackviewRect.bottom <= windowHeight) {
            return;
          }

          console.log('scroll');
          var heightDiff = trackviewRect.height - windowHeight;
          var factor = Math.abs((trackviewRect.top - stickyHeight) / heightDiff);

          var scrollDiff = trackviewRect.height - elementRect.height;

          element.css('top', scrollDiff * factor + 'px');

        });
      }
    };
  });
