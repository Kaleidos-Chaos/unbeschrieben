'use strict';

/**
 * @ngdoc function
 * @name unbeschriebenEpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unbeschriebenEpApp
 */
angular.module('unbeschriebenEpApp')
  .controller('MainCtrl', function ($scope, ep, $compile, $timeout, $route, $routeParams) {
    $scope.ep = ep;
    $scope.download = false;
    $scope.pw = {
      text: ''
    };

    if ($routeParams.download) {
      $scope.download = true;
    }

    $scope.$watch('download', function(is) {
      $route.updateParams({
        download: is ? 'show' : undefined
      });
    });

    $scope.applySticky = function() {
      var $sticky = angular.element(document.getElementById('become-sticky'));
      $sticky.attr({
        sticky: true,
        'sticky-class': 'sticky'
      }).html('<ng-include src="\'views/cta.html\'"></ng-include>');

      $compile($sticky)($scope);
    };

    angular.element(document).on('click', function(event) {
      [event.target, event.target.parentNode].forEach(function(el) {
        if (!el.tagName) { return; }
        var type = el.tagName.toLowerCase();
        if (['a', 'button'].indexOf(type) !== -1) {
          $timeout(function() {
            el.blur();
          }, 150);
        }
      });
    });

    $scope.playIfPause = ep.play;

    $scope.getCoverWidth = function() {
      var cover = document.getElementsByClassName('cover_img')[0];
      return Math.ceil(cover.offsetWidth / 50) * 50;
    };
  });
