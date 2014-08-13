'use strict';

/**
 * @ngdoc service
 * @name outOfViewApp.Departures
 * @description
 * # Departures
 * Factory in the outOfViewApp.
 */
angular.module('outOfViewApp')
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
