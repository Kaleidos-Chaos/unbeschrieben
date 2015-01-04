(function() {
  'use strict';

  function Player() {
    // var self = this;
    // var audioObjects = {};

    // this.playing = false;

    // this.stopAll = function() {
    //   angular.forEach(audioObjects, function(audioObject) {
    //     audioObject.stop();
    //   });
    // };

    // this.play = function(track) {
    //   self.playing = track;
    //   self.stopAll();

    //   if (!audioObjects[track.name]) {
    //     var ngAudioObject = ngAudio.load(track.file);
    //     audioObjects[track.name] = ngAudioObject;
    //   }

    //   audioObjects[track.name].play();

    //   return audioObjects[track.name];
    // };
  }

  /**
   * @ngdoc service
   * @name unbeschriebenEpApp.player
   * @description
   * # player
   * Service in the unbeschriebenEpApp.
   */
  angular.module('unbeschriebenEpApp')
    .service('player', Player);
})();
