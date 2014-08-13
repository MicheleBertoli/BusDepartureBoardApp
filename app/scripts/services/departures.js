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
        transformResponse: function(data) {
          return angular.fromJson(data).departures;
        }
      }
    });
  });
