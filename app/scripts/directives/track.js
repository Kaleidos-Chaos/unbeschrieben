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

        scope.i = ep.playlist.indexOf(scope.track);

        scope.isOpen = false;
        scope.track.slug = scope.slug = scope.track.name.toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'');

        scope.seek = function($event) {
          var x = $event.x || $event.screenX;
          var rect = element[0].querySelector('.track').getClientRects()[0];
          var seekedTo = (x - rect.left) / (rect.right - rect.left);
          scope.track.audio.audio.currentTime = scope.track.audio.duration * seekedTo;
        };

        scope.loaded = function() {
          return (scope.track.loaded || 0) + '%';
        };

        scope.played = function() {
          return ((scope.track.audio.currentTime / scope.track.audio.duration) || 0) * 100 + '%';
        };

        scope.playing = function() {
          return scope.i === ep.current.n && !ep.paused();
        };

        scope.$watch(scope.playing, function(playing) {
          if (ep.current.n !== scope.i) { return; }

          if (playing) {
            $route.updateParams({play: scope.slug});
          } else if (!playing) {
            $route.updateParams({play: undefined});
          }
        });

        scope.open = function() {
          scope.isOpen = true;
        };

        scope.playPause = function() {
          if (ep.current.n === scope.i) {
             ep.playPause();
          } else {
            scope.play();
          }
        };

        scope.play = function() {
          ep.skip(scope.i);
          ep.play();
        };

        var once = scope.$watch(function() { return $routeParams.play; }, function(slug) {
          if (slug === scope.slug) {
            scope.open();
            if (!scope.playing()) {
              scope.play();
            }
            once();
          }
        });
      }
    };
  });
