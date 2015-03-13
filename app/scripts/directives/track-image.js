'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:trackImage
 * @description
 * # trackImage
 */
angular.module('unbeschriebenEpApp')
  .directive('trackImage', function() {
    return {
      restrict: 'C',
      require: '^trackview',
      link: function postLink(scope, element, attrs, trackview) {
        var $window = angular.element(window);
        var stickyHeight = 31;
        var trackviewRect;
        var elementRect;
        var windowHeight;
        var heightDiff;
        var factor;
        var scrollDiff;

        scope.getWidth = function() {
          return Math.ceil(element[0].offsetWidth / 50) * 50;
        };

        function setRects() {
          trackviewRect = trackview.element[0].getBoundingClientRect();
          elementRect = element[0].getBoundingClientRect();
        }

        function setDimensions() {
          setRects();
          windowHeight = window.innerHeight - stickyHeight;
        }

        function canScroll() {
          /* mobile */
          if (elementRect.width === trackviewRect.width) {
            return false;
          }

          /* screen to high */
          if (windowHeight >= elementRect.height) {
            return false;
          }

          /* text to short */
          if (trackviewRect.height <= elementRect.height) {
            return false;
          }

          return true;
        }

        function shouldScroll() {
          /* not finished from last scroll */
          if (factor > 0 && factor < 1) {
            return true;
          }

          /* no need to scroll */
          if (trackviewRect.top > stickyHeight) {
            return false;
          }

          /* no need to scroll */
          if (trackviewRect.bottom <= windowHeight) {
            return false;
          }
          return true;
        }

        function scoll() {
          requestAnimationFrame(function() {
            setRects();
            if (!shouldScroll()) {
              return;
            }

            heightDiff = trackviewRect.height - windowHeight;
            factor = (trackviewRect.top - stickyHeight) / (heightDiff + stickyHeight) * -1;
            if (factor < 0) {
              factor = 0;
            } else if (factor > 1) {
              factor = 1;
            }

            scrollDiff = trackviewRect.height - elementRect.height;

            element.css('top', scrollDiff * factor + 'px');
          });
        }

        function toggleScroll() {
          setDimensions();
          if (canScroll()) {
            $window.on('scroll', scoll);
          } else {
            $window.off('scroll', scoll);
            element.css('top', '0px');
          }
        }

        angular.element(element).on('load', function() {
          $window.on('resize', toggleScroll);
          toggleScroll();
        });
      }
    };
  });
