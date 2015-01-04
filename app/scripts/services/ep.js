'use strict';

/**
 * @ngdoc service
 * @name unbeschriebenEpApp.ep
 * @description
 * # ep
 * Factory in the unbeschriebenEpApp.
 */
angular.module('unbeschriebenEpApp')
  .factory('ep', function () {
    return [
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
  });
