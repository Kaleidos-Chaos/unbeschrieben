'use strict';

/**
 * @ngdoc directive
 * @name unbeschriebenEpApp.directive:track
 * @description
 * # track
 */
angular.module('unbeschriebenEpApp')
  .directive('track', function (ep, $route, $routeParams) {
    return {
      templateUrl: 'views/tracks/main.html',
      scope: {
        track: '=data',
        player: '='
      },
      restrict: 'E',
      link: function postLink(scope, element) {

        scope.i = ep.indexOf(scope.track);
        scope.isOpen = false;
        scope.track.slug = scope.slug = scope.track.name.toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'');

        scope.playing = false;

        scope.player.on('play', function() {
          if (!scope.isCurrent()) {
            scope.playing = false;
            return;
          }
          scope.playing = true;
        });

        scope.player.on('pause', function() {
          scope.playing = false;
        });

        scope.seek = function($event) {
          var x = $event.x || $event.screenX;
          var rect = element[0].querySelector('.track').getClientRects()[0];
          var seekedTo = (x - rect.left) / (rect.right - rect.left);
          scope.player.seek(scope.player.duration * seekedTo);
        };

        scope.loaded = function() {
          return (scope.player.loadPercent || 0) + '%';
        };

        scope.played = function() {
          return ((scope.player.currentTime / scope.player.duration) || 0) * 100 + '%';
        };

        scope.isCurrent = function() {
          return scope.player.currentTrack === scope.i + 1;
        };

        scope.$watch('playing', function(playing) {
          if (playing) {
            $route.updateParams({play: scope.slug});
          } else if (!playing && scope.isCurrent() && scope.player.loadPercent > 0) {
            $route.updateParams({play: undefined});
          }
        });

        scope.open = function() {
          scope.isOpen = true;
        };

        scope.playPause = function() {
          if (scope.isCurrent()) {
            scope.player.playPause();
          } else {
            scope.player.play(scope.i);
          }
        };

        scope.getState = function() {
          if (scope.playing) {
            return scope.STATE_PLAYING;
          }
          if (scope.isOpen) {
            return scope.STATE_OPEN;
          } else {
            return scope.STATE_CLOSED;
          }
        };

        scope.STATE_CLOSED = 0;
        scope.STATE_OPEN = 1;
        scope.STATE_PLAYING = 2;

        scope.$watch(function() { return $routeParams.play; }, function(slug) {
          if (slug === scope.slug) {
            scope.open();
            if (!scope.playing) {
              scope.playPause();
            }
          }
        });
      }
    };
  });
