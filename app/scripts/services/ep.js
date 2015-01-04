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
        type: 'audio/mpeg'
      },
      {
        name: 'Absinth',
        view: 'views/tracks/absinth.html',
        type: 'audio/mpeg'
      },
      {
        name: 'Bruder',
        view: 'views/tracks/bruder.html',
        type: 'audio/mpeg'
      },
      {
        name: 'Alles Brennt',
        view: 'views/tracks/allesbrennt.html',
        type: 'audio/mpeg'
      },
      {
        name: 'Das Versprechen',
        view: 'views/tracks/versprechen.html',
        type: 'audio/mpeg'
      }
    ];
  });
