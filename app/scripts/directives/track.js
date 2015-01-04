'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:track
 * @description
 * # track
 */
angular.module('unbeschriebenEpApp')
  .directive('track', function (ep) {
    return {
      templateUrl: 'views/tracks/main.html',
      scope: {
        track: '=data',
        player: '='
      },
      restrict: 'E',
      link: function postLink(scope, element) {

        scope.i = ep.indexOf(scope.track);
        scope.open = false;

        function seek($event) {
          var x = $event.x || $event.screenX;
          var rect = element[0].querySelector('.track').getClientRects()[0];
          var seekedTo = (x - rect.left) / (rect.right - rect.left);
          scope.player.seek(scope.player.duration * seekedTo);
        }

        scope.loaded = function() {
          return (scope.player.loadPercent || 0) + '%';
        };

        scope.played = function() {
          return ((scope.player.currentTime / scope.player.duration) || 0) * 100 + '%';
        };

        scope.playing = function() {
          return scope.player.playing && scope.player.currentTrack === scope.i + 1;
        };

        var once = scope.$watch(scope.playing, function(playing) {
          if (playing) {
            scope.open = true;
            once();
          }
        });

        scope.toggle = function($event) {
          if (!scope.open) {
            if (!scope.player.playing) {
              scope.player.play(scope.i);
            }
            scope.open = true;
            return;
          }

          if (scope.playing()) {
            seek($event);
          } else {
            scope.player.play(scope.i);
          }
        };
      }
    };
  });
