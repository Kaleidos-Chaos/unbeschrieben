'use strict';

/**
 * @ngdoc service
 * @name unbeschriebenEpApp.ep
 * @description
 * # ep
 * Factory in the unbeschriebenEpApp.
 */
angular.module('unbeschriebenEpApp')
  .factory('ep', function (ngAudio, ngAudioGlobals) {

    ngAudioGlobals.unlock = true;

    var ep = {};
    ep.current = { n: -1 };

    ep.playlist = [
      {
        name: 'Zeig mir die Welt',
        view: 'views/tracks/zmdw.html',
        src: 'https://dl.dropboxusercontent.com/s/j9jmcrpkbu81r8n/kaleidos_welt_master2.mp3?dl=0',
        type: 'audio/mpeg'
      },
      {
        name: 'Absinth',
        view: 'views/tracks/absinth.html',
        src: 'https://dl.dropboxusercontent.com/s/ts51xd0yikelf21/kaleidos_absinth_master2.mp3?dl=0',
        type: 'audio/mpeg'
      },
      {
        name: 'Bruder',
        view: 'views/tracks/bruder.html',
        src: 'https://dl.dropboxusercontent.com/s/o65nuj5qe7xoi9p/kaleidos_bruder_master2.mp3?dl=0',
        type: 'audio/mpeg'
      },
      {
        name: 'Alles Brennt',
        view: 'views/tracks/allesbrennt.html',
        src: 'https://dl.dropboxusercontent.com/s/oelbai3arov7wqe/kaleidos_alles_brennt_master2.mp3?dl=0',
        type: 'audio/mpeg'
      },
      {
        name: 'Das Versprechen',
        view: 'views/tracks/versprechen.html',
        src: 'https://dl.dropboxusercontent.com/s/0m285m9x9bd0ror/kaleidos_versprechen_master2.mp3?dl=0',
        type: 'audio/mpeg'
      }
    ];

    function initAudio(n) {
      var track = ep.playlist[n];
      track.audio = ngAudio.load(track.src);
      track.loading = true;

      var pprev = -1;
      var prev = -1;

      var ivl = setInterval(function() {
        if (track.audio.audio &&
          angular.isFunction(track.audio.play)
        ) {
          var audio = track.audio.audio;
          audio.onended = function() {
            ep.next();
            ep.play();
          };

          var pIvl = setInterval(function() {
            try {
              track.loaded = (audio.buffered.end(0) / audio.duration) * 100;
            } catch (e) {
              // cry a lot!
            }

            track.loading = track.loaded !== prev || prev !== pprev;
            pprev = prev;
            prev = track.loaded;

            if (track.loaded >= 100) {
              track.loading = false;
              clearInterval(pIvl);
            }
          }, 1000);

          clearInterval(ivl);
        }
      }, 5);
    }

    ep.skip = function(n) {
      if (!n || n >= ep.playlist.length) {
        n = 0;
      } else if (n < 0) {
        n = ep.playlist.length - 1;
      }

      if (ep.current.n !== n) {
        var paused = ep.paused();
        if (ep.current.n >= 0 && !paused) {
          var track = ep.playlist[ep.current.n];
          var played = Math.round(((track.audio.currentTime / track.audio.duration) || 0) * 10) * 10;

          if (played < 90) {
            window._gaq.push([
              '_trackEvent',
              ep.playlist[ep.current.n].name,
              'skipped at ' + played + '%'
            ]);
          }
        }

        ep.stop();

        ep.current.n = n;
        if (!ep.playlist[n].audio) {
          initAudio(n);
        }

        if (!paused) {
          ep.play();
        }
      }

      return ep.current.n;
    };

    ep.next = function() {
      ep.skip(ep.current.n + 1);
    };

    ep.prev = function() {
      ep.skip(ep.current.n - 1);
    };

    ep.play = function() {
      if (ep.paused()) {
        window._gaq.push(['_trackEvent', ep.playlist[ep.current.n].name, 'play']);
        ep.playlist[ep.current.n].audio.play();
      }
    };

    ep.pause = function() {
      ep.playlist[ep.current.n].audio.pause();
    };

    ep.paused = function() {
      if (ep.current.n < 0 || !ep.playlist[ep.current.n].audio ||
        angular.isUndefined(ep.playlist[ep.current.n].audio.paused)
      ) {
        return true;
      } else {
        return ep.playlist[ep.current.n].audio.paused;
      }
    };

    ep.stop = function() {
      if (ep.current.n >= 0 && ep.playlist[ep.current.n].audio) {
        ep.playlist[ep.current.n].audio.stop();
      }
    };

    ep.playPause = function() {
      if (ep.paused()) {
        ep.play();
      } else {
        ep.pause();
      }
    };

    ep.skip();

    return ep;
  });
