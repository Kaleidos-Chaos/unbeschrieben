'use strict';

/**
 * @ngdoc function
 * @name unbeschriebenEpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unbeschriebenEpApp
 */
angular.module('unbeschriebenEpApp')
  .controller('MainCtrl', function ($scope, ep) {
    $scope.ep = ep;

    $scope.playIfPause = function() {
      if (!$scope.epPlayer.playing) {
        $scope.epPlayer.play();
      }
    };
  });
