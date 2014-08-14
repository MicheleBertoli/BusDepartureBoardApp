'use strict';

/**
 * @ngdoc service
 * @name busDepartureBoardApp.Departures
 * @description
 * # Departures
 * Factory in the busDepartureBoardApp.
 */
angular.module('busDepartureBoardApp')
  .factory('Departures', function ($resource, api) {
    return $resource(api.url + '/stop/:atcocode/live.json', {
      group: 'route',
      'api_key': api.apiKey,
      'app_id': api.appId
    }, {
      get: {
        method: 'GET',
        isArray: true,
        transformResponse: function(data) {
          var raw = angular.fromJson(data).departures;
          var departures = [];
          Object.keys(raw).forEach(function (key) {
            departures = departures.concat(raw[key]);
          });
          return departures;
        }
      }
    });
  });
