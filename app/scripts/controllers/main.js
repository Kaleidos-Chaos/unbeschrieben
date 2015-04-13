'use strict';

/**
 * @ngdoc function
 * @name unbeschriebenEpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unbeschriebenEpApp
 */
angular.module('unbeschriebenEpApp')
  .controller('MainCtrl', function ($scope, ep, $compile) {
    $scope.ep = ep;

    $scope.applySticky = function() {
      var $sticky = angular.element(document.getElementById('become-sticky'));
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

    var cover = document.getElementsByClassName('cover_img')[0];

    $scope.getCoverWidth = function() {
      return Math.ceil(cover.offsetWidth / 50) * 50;
    };


  });
