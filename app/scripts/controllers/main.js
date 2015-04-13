'use strict';

/**
 * @ngdoc function
 * @name unbeschriebenEpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unbeschriebenEpApp
 */
angular.module('unbeschriebenEpApp')
  .controller('MainCtrl', function ($scope, ep, $compile, $route, $routeParams, $timeout) {
    $scope.ep = ep;

    var $sticky = angular.element(document.getElementById('become-sticky'));
    $scope.applySticky = function() {
      $sticky.attr({
        sticky: true,
        'sticky-class': 'sticky'
      });
      $compile($sticky)($scope);
    };

    $scope.playIfPause = function() {
      if (!$scope.epPlayer.playing) {
        $scope.epPlayer.play();
      }
    };

    function debounce(fn, delay) {
      var timer = null;
      return function () {
        var context = this, args = arguments;
        $timeout.cancel(timer);
        timer = $timeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }

    $scope.prev = debounce(function() {
      $scope.epPlayer.prev();
    }, 100);

    $scope.next = debounce(function() {
      $scope.epPlayer.next();
    }, 100);


    var cover = document.getElementsByClassName('cover_img')[0];

    $scope.getCoverWidth = function() {
      return Math.ceil(cover.offsetWidth / 50) * 50;
    };


  });
